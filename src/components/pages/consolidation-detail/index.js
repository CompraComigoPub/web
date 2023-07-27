import Button from "components/atoms/button";
import TagCheckSet from "components/molecules/tagcheckset";
import Title from "components/molecules/title";
import PriceProjection from "components/organisms/price-projection";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";

// loading the sass style fot the component
import "./index.scss";
import SelectSuppliers from "components/organisms/select-suppliers";
import { mutate, useQuery } from "utils/graphql";
import ordersByPurchase from "utils/graphql/queries/order/ordersByPurchase";
import { useParams } from "react-router-dom";
import Loader from "components/atoms/loader";
import createDemandMt from "utils/graphql/mutations/operator/createDemand";
import ApprovalConclusion from "components/molecules/approval-conclusion";
import createBudgetMt from "utils/graphql/mutations/operator/createBudget";
import { toast } from "react-toastify";
import updatePurchaseInterestStatus from "utils/graphql/mutations/operator/updatePurchaseInterestStatus";

function ConsolidationDetail(props) {
  const { className = "", children, ...other } = props;
  const params = useParams();
  const [values, setValues] = useState({});
  const [suppliers, setSuppliers] = useState({});
  const [maxDates, setMaxDates] = useState({});
  const { data, loading } = useQuery(
    ordersByPurchase,
    {
      id: params.purchaseID,
    },
    { fetchPolicy: "no-cache" }
  );

  const [step, setStep] = React.useState(0);
  const { handleSubmit } = useForm();

  function next() {
    setStep(step + 1);
    window.scrollTo(0, 0);
  }
  function prev() {
    setStep(step - 1);
    window.scrollTo(0, 0);
  }

  const consolidateOrder = async (value, suppliers, maxDate) => {
    let demand = value;
    let budget = { orderId: value.orderId, maxDate };
    try {
      await Promise.all(
        suppliers.map(async (supplier) => {
          demand.supplierId = supplier.id;
          const result = await mutate(createDemandMt, demand);
          budget.demandId = result.data.createDemand.id;
          await mutate(createBudgetMt, { budget });
        })
      );
    } catch (error) {
      toast.error("Erro ao criar orçamentos");
      console.log(error);
    }
  };

  const onSubmit = handleSubmit(async () => {
    if (step === 1) {
      let numberOfOrdersConsolidated = 0;
      const valuesList = Object.entries(values).map((item) => item[1]);
      valuesList.forEach(async (value, index) => {
        if (suppliers[index].length === 0) return;
        numberOfOrdersConsolidated++;
        await consolidateOrder(value, suppliers[index], maxDates[index]);
      });

      if (
        numberOfOrdersConsolidated ===
        data.purchaseInterest.notConsolidatedOrders.length
      ) {
        await mutate(updatePurchaseInterestStatus, {
          purchaseInterestId: params.purchaseID,
          status: "CLOSED",
        });
      }
    }
    next();
    window.scrollTo(0, 0);
  });

  const getDemandItem = (item, order) => {
    return {
      productId: item.product.id,
      companyId: order.company.id,
      unity: item.unity,
      quantity: item.quantity,
    };
  };

  useEffect(() => {
    if (data) {
      let initalValues = {};
      let initialSuppliers = {};
      let initialMaxDates = {};
      data?.purchaseInterest.notConsolidatedOrders.forEach((order, index) => {
        initalValues[index] = {
          orderId: order.id,
          items: order.items.map((item) => getDemandItem(item, order)),
        };
        initialSuppliers[index] = [];
        initialMaxDates[index] = null;
      });
      setValues(initalValues);
      setSuppliers(initialSuppliers);
      setMaxDates(initialMaxDates);
    }
  }, [data]);

  if (loading) {
    return <Loader>Carregando...</Loader>;
  }

  return (
    <div
      className={"page__consolidation-detail-container " + className}
      {...other}
    >
      <Title
        dataSubtitle={<>Gerencie os interesses de compra</>}
        dataType="big"
        separator
      >
        Consolidação de Volumes
      </Title>
      {step <= 1 && (
        <TagCheckSet
          list={[
            { label: "PROJETAR PREÇOS", checked: true },
            { label: "SELECIONAR FORNECEDORES", checked: step === 1 },
          ]}
        />
      )}
      <form onSubmit={onSubmit}>
        {data?.purchaseInterest.notConsolidatedOrders.map((order, index) => (
          <>
            <PriceProjection
              index={index}
              values={values}
              setValues={setValues}
              className={step === 0 ? null : "hidden"}
              order={order}
            />
            <SelectSuppliers
              step={step}
              index={index}
              setMaxDates={setMaxDates}
              maxDates={maxDates}
              setSuppliers={setSuppliers}
              suppliers={suppliers}
              company={order.company}
              className={step === 1 ? null : "hidden"}
            />
          </>
        ))}
        {step < 2 && (
          <div id="button-row">
            <>
              {step === 1 && (
                <Button variant="link" onClick={prev}>
                  Anterior
                </Button>
              )}
              <Button>
                <input
                  id="submit"
                  type="submit"
                  value={
                    step === 0
                      ? "SELECIONAR FORNECEDORES"
                      : "SOLICITAR ORÇAMENTO"
                  }
                ></input>
              </Button>
            </>
          </div>
        )}
      </form>
      {step === 2 && (
        <ApprovalConclusion
          demand
          buttonLink={"/consolidacao"}
          title="Você será notificado quando o fornedor responder a sua solicitação."
        />
      )}
      {children}
    </div>
  );
}

export default ConsolidationDetail;

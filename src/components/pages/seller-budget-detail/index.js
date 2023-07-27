import React from "react";
import { toast } from "react-toastify";
import { useParams, useHistory } from "react-router-dom";

import BaseCard from "components/atoms/base-card";
import Button from "components/atoms/button";
import SvgLock from "components/icons/Lock";
import SellerBudgetConclusion from "components/molecules/seller-budget-conclusion";
import Title from "components/molecules/title";
import Loader from "components/atoms/loader";
import InputSet from "components/molecules/input-set";

import { mutate, useQuery } from "utils/graphql";
import budgetSeller from "utils/graphql/queries/budgets/budgetSeller";
import updateBudgetStatusMt from "utils/graphql/mutations/budgets/updateBudgetStatus";
import updateBudgetMt from "utils/graphql/mutations/budgets/updateBudget";
import reproveBudgetMt from "utils/graphql/mutations/budgets/reproveBudget";
import updateFinancialInfo from "utils/graphql/mutations/budgets/updateFinancialInfo";
import { useUser } from "utils/contexts/user";
import { formatCurrencyValue, formatFloatNumberToText } from "utils/generalHelper";

// loading the sass style fot the component
import "./index.scss";

function SellerBudgetDetail(props) {
  const { userData } = useUser();

  const { className = "", children, ...other } = props;

  const [submited, setSubmited] = React.useState(false);
  const [positive, setPositive] = React.useState(true);
  const [justify, setJustify] = React.useState(false);
  const params = useParams();
  const { data, loading } = useQuery(
    budgetSeller,
    { id: params.budgetId },
    { fetchPolicy: "no-cache" }
  );
  const history = useHistory();
  const [financialValues, setFinancialValues] = React.useState({});
  const totalPrice = data?.budget.demand.items.reduce((acc, item, index) => {
    let price = 0;
    if (financialValues[index] && financialValues[index].price) {
      price = financialValues[index].price;
    }
    return acc + price * item.quantity;
  }, 0);

  React.useEffect(() => {
    if (data) {
      const financialValuesDefault = data?.budget.demand.items.reduce(
        (acc, item, index) => {
          return { ...acc, [index]: { id: item.id } };
        },
        {}
      );
      setFinancialValues(financialValuesDefault);
    }
  }, [data]);

  const updateBudget = async (e) => {
    e.preventDefault();
    const description = document.querySelector("#purchase-comments").value;

    try {
      description &&
        (await mutate(updateBudgetMt, {
          budgetId: params.budgetId,
          description: description,
        }));

      await mutate(updateFinancialInfo, {
        demandId: data?.budget.demand.id,
        totalPrice,
        items: formatFinancialValues(financialValues),
      });

      await mutate(updateBudgetStatusMt, {
        budgetId: params.budgetId,
        status: "READY_FOR_OPERATOR",
      });
      setSubmited(true);
      setPositive(true);
      window.scrollTo(0, 0);
    } catch (err) {
      toast.error(`Erro ao aprovar orçamento`);
    }
  };

  const formatFinancialValues = (financialInfo) => {
    let items = [];
    Object.values(financialInfo).forEach((value) => items.push(value));
    return items;
  };

  const reproveBudget = async (e) => {
    const description = document.querySelector("#purchase-comments").value;
    if (description === "") {
      e.preventDefault();
      setJustify(true);
      return;
    }
    try {
      await mutate(reproveBudgetMt, {
        budgetId: params.budgetId,
        status: "REPROVED_BY_SELLER",
        description,
      });
      setSubmited(true);
      setPositive(false);
      window.scrollTo(0, 0);
    } catch (err) {
      toast.error(`Erro ao reprovar orçamento`);
    }
  };

  const handleChange = (e) => {
    if (e.target.value !== "") {
      setJustify(false);
    }
  };

  const back = () => {
    history.push("/orcamentos");
    window.scrollTo(0, 0);
  };

  const handleValuesChange = (e, local, index) => {
    setFinancialValues({
      ...financialValues,
      [index]: {
        ...financialValues[index],
        [local]: parseFloat(e.target.value),
      },
    });
  };

  if (loading) {
    return <Loader>Carregando...</Loader>;
  }

  return (
    <div
      className={"page__seller-budget-detail-container " + className}
      {...other}
    >
      <Title
        dataSubtitle={
           userData?.companyNetworkId ===
           "bbc39411-d7b7-4dfd-9079-1c4198560666" ? (
               <>
              Gerencie os dados do orçamento de compra. Atualmente,{" "}
                 <strong>5.210,00 toneladas de aço</strong> negociadas
               </>
             ) : (
               <>Gerencie os dados do orçamento de compra</>
             )
        }
        dataType="big"
        separator
      >
        Descrição do orçamento
      </Title>

      <>
        {submited ? (
          <BaseCard id="card" full>
            <SellerBudgetConclusion
              hideButton
              positive={positive}
              title={
                positive
                  ? "Seu orçamento foi enviado"
                  : "Você recusou esse orçamento."
              }
              subtitle={
                positive
                  ? "Você será notificado quando o comprador aprovar o orçamento."
                  : "Fique tranquilo, avisaremos que você não pôde pegar essa demanda."
              }
            />
          </BaseCard>
        ) : (
          <BaseCard id="card" full>
            <div>
              <section id="header">
                <SvgLock />
                <div>
                  <h2>Confidencial</h2>
                  <span>
                    Informações acerca do comprador estarão disponíveis após
                    aprovação do orçamento.
                  </span>
                </div>
                <h2>{data?.budget.order.purchaseInterest.title}</h2>
              </section>
              <hr />
              <form onSubmit={(e) => updateBudget(e)}>
                {data?.budget.demand.items.map((item, index) => (
                  <>
                    <section>
                      <div>
                        <h3>Produto:</h3>
                        <span>{item.product.name}</span>
                      </div>
                      <div>
                        <h3>Quantidade:</h3>
                        <span>{item.quantity}</span>
                      </div>
                      <div>
                        <h3>Unidade:</h3>
                        <span>{item.unity}</span>
                      </div>
                    </section>
                    <section className="no-space">
                      {data?.budget.order.items[
                        index
                      ]?.additionalInfoForms?.map((form) => {
                        return (
                          <>
                            {form?.infos?.map((info) => {
                              return (
                                <div>
                                  <h3>{info?.field}:</h3>
                                  <span>{info?.value}</span>
                                </div>
                              );
                            })}
                          </>
                        );
                      })}
                    </section>
                    <section className="no-space">
                      {data?.budget.status === "READY_FOR_SELLER" ? (
                        <>
                          <div>
                            <h3>{"Preço por unidade (R$) *"}</h3>
                            <InputSet
                              required
                              placeholder="exemplo : 123"
                              className="product-input"
                              type="number"
                              onChange={(e) =>
                                handleValuesChange(e, "price", index)
                              }
                              min="0"
                              step="any"
                            />
                          </div>
                          <div>
                            <h3>{"ICMS (%) *"}</h3>
                            <InputSet
                              required
                              placeholder="exemplo : 123"
                              className="product-input"
                              type="number"
                              onChange={(e) =>
                                handleValuesChange(e, "icms", index)
                              }
                              step="any"
                            />
                          </div>
                          <div>
                            <h3>{"IPI (%) *"}</h3>
                            <InputSet
                              required
                              placeholder="exemplo : 12"
                              className="product-input"
                              type="number"
                              onChange={(e) =>
                                handleValuesChange(e, "ipi", index)
                              }
                              step="any"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <h3>Preço unitário:</h3>
                            <span>{formatCurrencyValue(item.price)}</span>
                          </div>
                          <div>
                            <h3>Preço total:</h3>
                            <span>
                              {formatCurrencyValue(item.totalPrice)}
                            </span>
                          </div>
                          <div>
                            <h3>ICMS:</h3>
                            <span>{formatFloatNumberToText(item.icms)}%</span>
                          </div>
                          <div>
                            <h3>IPI:</h3>
                            <span>{formatFloatNumberToText(item.ipi)}%</span>
                          </div>
                        </>
                      )}
                    </section>
                    <section>
                      <div className={"obs"}>
                        <h3>Observações do produto:</h3>
                        <span>{item.description || "Sem observações"}</span>
                      </div>
                    </section>

                    <hr />
                  </>
                ))}
                <h2>Informações de envio</h2>
                <section>
                  <div>
                    <h3>Cidade:</h3>
                    <span>{data?.budget.order.company.addresses[0].city}</span>
                  </div>
                  <div>
                    <h3>Estado:</h3>
                    <span>{data?.budget.order.company.addresses[0].state}</span>
                  </div>
                </section>
                <hr />
                <h2>Informações financeiras</h2>
                <section>
                  {/* */}
                  <div>
                    <h3>Preço total:</h3>
                    <p>
                      {data?.budget.status === "READY_FOR_SELLER"
                        ? formatCurrencyValue(totalPrice)
                        : formatCurrencyValue(
                            data?.budget.demand.totalPrice
                        )}
                    </p>
                  </div>
                </section>
                {data?.budget.status === "READY_FOR_SELLER" ? (
                  <>
                    <div
                      className={
                        justify ? "observation-area red" : "observation-area"
                      }
                    >
                      <span id="observation-title">Alguma Observação?</span>
                      <textarea
                        onChange={(e) => handleChange(e)}
                        id="purchase-comments"
                        // name="purchase-comments"
                        rows="5"
                        cols="33"
                        type="text"
                        placeholder="Descreva aqui alguma observação sobre o pedido."
                      />
                      <small>
                        Por que você não pôde aceitar o pedido? Por favor,
                        justifique.
                      </small>
                    </div>
                    <section>
                      <Button type="submit">Enviar Orçamento</Button>

                      <Button onClick={(e) => reproveBudget(e)} variant="link">
                        Não Aceitar Orçamento
                      </Button>
                    </section>
                  </>
                ) : (
                  <section>
                    <div className={"obs"}>
                      <h3>Observações :</h3>
                      <span>
                        {data?.budget.description || "Sem observações"}
                      </span>
                    </div>
                  </section>
                )}
              </form>
            </div>
          </BaseCard>
        )}
      </>
      <Button id="last" onClick={back}>
        ANALISAR OUTROS ORÇAMENTOS
      </Button>
      {children}
    </div>
  );
}

export default SellerBudgetDetail;

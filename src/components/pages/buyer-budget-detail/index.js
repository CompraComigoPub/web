import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import BaseCard from "components/atoms/base-card";
import Button from "components/atoms/button";
import InputSet from "components/molecules/input-set";
import SellerBudgetConclusion from "components/molecules/seller-budget-conclusion";
import Title from "components/molecules/title";
import Loader from "components/atoms/loader";

import { mutate, useQuery } from "utils/graphql";
import budgetBuyer from "utils/graphql/queries/budgets/budgetBuyer";
import updateBudgetMt from "utils/graphql/mutations/budgets/updateBudget";
import updateBudgetStatusMt from "utils/graphql/mutations/budgets/updateBudgetStatus";
import createInvoiceMt from "utils/graphql/mutations/invoice/createInvoice";
import reproveBudgetMt from "utils/graphql/mutations/budgets/reproveBudget";
import { formatCurrencyValue, formatFloatNumberToText } from "utils/generalHelper";

// loading the sass style fot the component
import "./index.scss";

function BuyerBudgetDetail(props) {
  const { className = "", children, ...other } = props;
  const history = useHistory();
  const [submited, setSubmited] = React.useState(false);
  const [positive, setPositive] = React.useState(true);
  const [justify, setJustify] = React.useState(false);
  const params = useParams();
  const { data, loading } = useQuery(
    budgetBuyer,
    { id: params.budgetId },
    { fetchPolicy: "no-cache" }
  );
  const address = data?.budget.demand.supplier.addresses[0];
  // const diffPrices =
  //   data?.budget.order.items.reduce((a, b) => a + b.cost, 0) -
  //   data?.budget.demand.totalPrice;

  const approveBudget = async () => {
    const homologation = document.querySelector("#homologation").value;
    const description = document.querySelector("#purchase-comments").value;
    if (homologation === "") {
      toast.warning("Para continuar responda se deseja homologar fornecedor");
      return;
    }
    try {
      description &&
        (await mutate(updateBudgetMt, {
          budgetId: params.budgetId,
          description,
        }));
      await mutate(updateBudgetStatusMt, {
        budgetId: params.budgetId,
        status: "APPROVED",
      });
      await createInvoice(Boolean(homologation));
      setSubmited(true);
      setPositive(true);
      window.scrollTo(0, 0);
    } catch (err) {
      toast.error(`Erro ao aprovar orçamento`);
    }
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
        status: "REPROVED_BY_BUYER",
        description,
      });
      setSubmited(true);
      setPositive(false);
      window.scrollTo(0, 0);
    } catch (err) {
      toast.error(`Erro ao reprovar orçamento`);
    }
  };

  const createInvoice = async (homologation) => {
    try {
      const invoice = {
        budgetId: params.budgetId,
        homologation,
        items: getInvoiceItems(),
      };
      await mutate(createInvoiceMt, {
        invoice,
      });
    } catch (err) {
      console.log(err);
      toast.error(`Erro ao criar pedido`);
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

  const getInvoiceItems = () => {
    return data?.budget.demand.items.map((item) => {
      return {
        productId: item.product.id,
        quantity: item.quantity,
        price: item.price,
      };
    });
  };

  if (loading) {
    return <Loader>Carregando...</Loader>;
  }

  return (
    <div
      className={"page__buyer-budget-detail-container " + className}
      {...other}
    >
      <Title
        dataSubtitle={<>Gerencie os dados do orçamento de compra</>}
        dataType="big"
        separator
      >
        Descrição do orçamento
      </Title>
      <BaseCard id="card" full>
        <div>
          <section id="header">
            <div>
              <img
                alt="Empresa compradora"
                src={data?.budget.order.company.logo}
              />
              <h2>{data?.budget.order.company.tradeName}</h2>
            </div>
            <h2>{data?.budget.order.purchaseInterest.title}</h2>
          </section>
          <hr />
          {submited ? (
            <>
              <SellerBudgetConclusion
                hideButton
                positive={positive}
                title={
                  positive
                    ? "Você aprovou o orçamento e sua demanda será realizada."
                    : "Você reprovou esse orçamento."
                }
                subtitle={
                  positive
                    ? "Iremos enviar seu pedido para produção."
                    : "Iremos pedir novos orçamentos para essa compra. Você será notificado quando existir um novo orçamento disponibilizado."
                }
              />
              <Button id="last" onClick={back}>
                ANALISAR OUTROS ORÇAMENTOS
              </Button>
            </>
          ) : (
            <>
              {data?.budget.demand.items.map((item, index) => (
                <>
                  <h2 id="product">{`${item.product.name} - Item ${index + 1}`}</h2>
                  <section className="no-space">
                    <div>
                      <h3>Quantidade:</h3>
                      <span>{item.quantity}</span>
                    </div>
                    <div>
                      <h3>Unidade:</h3>
                      <span>{item.unity}</span>
                    </div>
                    <div>
                      <h3>Preço:</h3>
                      <span>{formatCurrencyValue(item.price)}</span>
                    </div>
                  </section>
                  <section className="no-space">
                    <div>
                      <h3>Preço total:</h3>
                      <span>{formatCurrencyValue(item.totalPrice)}</span>
                    </div>
                    <div>
                      <h3>ICMS:</h3>
                      <span>{formatFloatNumberToText(item.icms)}%</span>
                    </div>
                    <div>
                      <h3>IPI:</h3>
                      <span>{formatFloatNumberToText(item.ipi)}%</span>
                    </div>
                    {data?.budget.order.items[index]?.additionalInfoForms?.map(
                      (form) => {
                        return (
                          <>
                            {form?.infos?.map((info) => {
                              return (
                                <div>
                                  <h3>{info?.field}</h3>
                                  <span>{info?.value}</span>
                                </div>
                              );
                            })}
                          </>
                        );
                      }
                    )}
                  </section>
                  <section>
                    <div id="description">
                      <h3>Observações :</h3>
                      <span>{item.description || "Sem observações"}</span>
                    </div>
                  </section>
                </>
              ))}
              <hr />
              <h2>Informações do fornecedor</h2>
              <br />
              <section>
                <section>
                  <img
                    alt="Empresa Vendedora"
                    src={data?.budget.demand.supplier.logo}
                  />
                  <h3>{data?.budget.demand.supplier.name}</h3>
                </section>
                <div>
                  <h3>CNPJ:</h3>
                  <span>
                    {data?.budget.order.company.cnpj}
                  </span>
                </div>
                <div>
                  <h3>Endereço:</h3>
                  <span>
                    {address.numericIndentifier
                      ? address.street + "," + address.numericIndentifier
                      : address.street}
                  </span>
                  <br />

                  <span>{address.city + "-" + address.state}</span>
                </div>
                {data?.budget.status === "READY_FOR_BUYER" && (
                  <InputSet
                    type="select"
                    required
                    id="homologation"
                    label="Homologar Fornecedor?"
                    // {...register("homologate")}
                  >
                    <option selected disabled hidden value="">
                      Selecionar
                    </option>
                    <option className="green" value={true}>
                      Sim
                    </option>
                    <option className="red" value={false}>
                      Não
                    </option>
                  </InputSet>
                )}
              </section>
              {/* <hr />
              <h2>Informações financeiras</h2>
              <section>
                <div>
                  <h3>Preço total:</h3>
                  <p>
                    {formatCurrencyValue(data?.budget.demand.totalPrice)}
                  </p>
                </div>
                <div className="green">
                  <h3>Economia :</h3>
                  <p>R$</p>
                </div>
              </section> */}
              <hr />
              {data?.budget.status === "READY_FOR_BUYER" ? (
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
                      rows="5"
                      cols="33"
                      type="text"
                      placeholder="Descreva aqui alguma observação sobre o pedido."
                    />
                    <small>
                      Por que esse orçamento não está adequado? Por favor,
                      justifique.
                    </small>
                  </div>
                  <section>
                    <Button onClick={approveBudget}>APROVAR</Button>

                    <Button onClick={(e) => reproveBudget(e)} variant="link">
                      Não aprovar orçamento
                    </Button>
                  </section>
                </>
              ) : (
                <section>
                  <div id="description" className={"obs"}>
                    <h3>Observações :</h3>
                    <span>{data?.budget.description || "Sem observações"}</span>
                  </div>
                </section>
              )}
            </>
          )}
        </div>
      </BaseCard>
      {children}
    </div>
  );
}

export default BuyerBudgetDetail;

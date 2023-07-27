import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import BaseCard from "components/atoms/base-card";
import Button from "components/atoms/button";
import Loader from "components/atoms/loader";
import BudgetAction from "components/molecules/budget-action";
import Title from "components/molecules/title";
import SellerBudgetConclusion from "components/molecules/seller-budget-conclusion";

import { mutate, useQuery } from "utils/graphql";
import updateBudgetMt from "utils/graphql/mutations/budgets/updateBudget";
import updateBudgetStatusMt from "utils/graphql/mutations/budgets/updateBudgetStatus";
import budgetBuyer from "utils/graphql/queries/budgets/budgetBuyer";
import reproveBudgetMt from "utils/graphql/mutations/budgets/reproveBudget";
import { formatCurrencyValue, formatFloatNumberToText } from "utils/generalHelper";

// loading the sass style fot the component
import "./index.scss";

function BudgetDetail(props) {
  const { className = "", children, ...other } = props;
  const params = useParams();
  const [submited, setSubmited] = React.useState(false);
  const [positive, setPositive] = React.useState(true);
  const [justify, setJustify] = React.useState(false);
  const { data, loading } = useQuery(
    budgetBuyer,
    {
      id: params.budgetId,
    },
    { fetchPolicy: "no-cache" }
  );
  const address = data?.budget.demand.supplier.addresses[0];
  const history = useHistory();
  const budget = data?.budget;

  const handleClick = () => {
    history.push("/orcamentos");
    window.scrollTo(0, 0);
  };

  const updateBudget = async () => {
    const description = document.querySelector("#purchase-comments").value;
    try {
      description &&
        (await mutate(updateBudgetMt, {
          budgetId: params.budgetId,
          description: description.value,
        }));
      await mutate(updateBudgetStatusMt, {
        budgetId: params.budgetId,
        status: "READY_FOR_BUYER",
      });
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
        status: "REPROVED_BY_OPERATOR",
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

  if (loading) {
    return <Loader>Carregando...</Loader>;
  }

  return (
    <div className={"page__budgetDetail-container " + className} {...other}>
      <div className="sub-header">
        <Title
          dataSubtitle={<>Gerencie os orçamentos recebidos e enviados</>}
          dataType="big"
          separator
        >
          Orçamentos
        </Title>
      </div>
      <main>
        {submited ? (
          <BaseCard id="base" full>
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
          <>
            <BudgetAction
              totalPrice={budget?.demand.totalPrice}
              status={budget?.statusText}
            />
            <br />
            <br />
            <BaseCard id="base" full>
              <section>
                <div className="top">
                  <img
                    alt="Empresa Compradora"
                    src={budget?.order.company.logo}
                  />
                  <h2 className="no-margin">{budget?.order.company.tradeName}</h2>
                </div>
                <h2 className="no-margin" id="product-name">
                  {budget?.order?.purchaseInterest.title}
                </h2>
              </section>
              <hr />
              {budget.demand.items.map((item, index) => (
                <div className="product-container">
                  <h2 id="product">{`${item.product.name} - Item ${index + 1}`}</h2>
                  <br />
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
                      <h3>Preço unitário:</h3>
                      <span>
                        {" "}
                        {item.price
                          ? formatCurrencyValue(item.price)
                          : "Não informado"}
                      </span>
                    </div>
                  </section>
                  <section className="no-space">
                    <div>
                      <h3>Preço total:</h3>
                      <span>
                        {" "}
                        {item.totalPrice
                          ?  formatCurrencyValue(item.totalPrice)
                          : "Não informado"}
                      </span>
                    </div>
                    <div>
                      <h3>ICMS:</h3>
                      <span>
                        {item.icms ? formatFloatNumberToText(item.icms) + "%" : "Não informado"}
                      </span>
                    </div>
                    <div>
                      <h3>IPI:</h3>
                      <span>{item.ipi ? formatFloatNumberToText(item.ipi) + "%" : "Não informado"}</span>
                    </div>
                    {budget.order.items[index]?.additionalInfoForms?.map(
                      (form) => {
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
                      }
                    )}
                  </section>
                  <section>
                    <div id="description">
                      <h3>Observações :</h3>
                      <span>{item.description || "Sem observações"}</span>
                    </div>
                  </section>
                </div>
              ))}
              <hr />
              <h2>Informações do fornecedor</h2>
              <section>
                <div className="top">
                  <img
                    alt="Empresa Vendedora"
                    src={budget?.demand.supplier.logo}
                  />
                  <h3>{budget?.demand.supplier.name}</h3>
                </div>
                <div>
                  <h3>CNPJ:</h3>
                  <span>
                    {budget?.demand.supplier.cnpj}
                  </span>
                </div>
                <div>
                  <h3>Endereço:</h3>
                  <span>
                    {address.numericIndentifier
                      ? address.street + ", " + address.numericIndentifier
                      : address.street}
                  </span>
                  <br />
                  <span>{address.city + " - " + address.state}</span>
                </div>
              </section>
              <hr />
              <h2>Informações do comprador</h2>
              <section>
                <div className="top">
                  <img
                    alt="Empresa Compradora"
                    src={budget.order.company.logo}
                  />
                  <h3>{budget.order.company.tradeName}</h3>
                </div>
                <div>
                  <h3>CNPJ:</h3>
                  <span>
                    {budget.order.company.cnpj}
                  </span>
                </div>
                <div>
                  <h3>Endereço:</h3>
                  <span>
                    {budget.order.company.addresses[0].numericIndentifier
                      ? budget.order.company.addresses[0].street + ", " + budget.order.company.addresses[0].numericIndentifier
                      : budget.order.company.addresses[0].street}
                  </span>
                  <br />
                  <span>{budget.order.company.addresses[0].city + " - " + budget.order.company.addresses[0].state}</span>
                </div>
              </section>
              <hr />
              {data?.budget.status === "READY_FOR_OPERATOR" ? (
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
                    <Button
                      onClick={(e) => updateBudget("READY_FOR_BUYER", e)}
                      type="submit"
                    >
                      Aprovar Orçamento
                    </Button>

                    <Button onClick={(e) => reproveBudget(e)} variant="link">
                      Não aprovar orçamento
                    </Button>
                  </section>
                </>
              ) : (
                <section>
                  <div className={"obs"}>
                    <h3>Observações :</h3>
                    <span>{data?.budget.description || "Sem observações"}</span>
                  </div>
                </section>
              )}
            </BaseCard>
          </>
        )}

        <Button onClick={handleClick} id="button">
          ANALISAR OUTROS ORÇAMENTOS
        </Button>
      </main>
    </div>
  );
}

export default BudgetDetail;

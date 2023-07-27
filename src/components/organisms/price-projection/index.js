import React, { useEffect, useState } from "react";

import { FaAngleDown } from "react-icons/fa";
import BaseCard from "components/atoms/base-card";
import InputSet from "components/molecules/input-set";

import { formatCurrencyValue, formatFloatNumberToText, getFormatedDate } from "utils/generalHelper";

// loading the sass style fot the component
import "./index.scss";

function PriceProjection(props) {
  const {
    className = "",
    children,
    order,
    setValues,
    values,
    index,
    ...other
  } = props;
  const getDemandItem = (item) => {
    return {
      productId: item.product.id,
      companyId: order.company.id,
      unity: item.unity,
      quantity: item.quantity,
    };
  };

  const demandDefault = {
    orderId: order.id,
    items: order.items.map((item) => getDemandItem(item)),
  };

  const [demand, setDemand] = useState(demandDefault);

  const totalPrice =
    demand?.items
      ?.filter((item) => item.price)
      .reduce((a, b) => parseFloat(a) + parseFloat(b.price * b.quantity), 0) || 0;

  const formatDate = (date) => {
    return getFormatedDate(new Date(date));
  };

  const handleChange = (e, local, index) => {
    const newDemand = updateDemandValue(demand, e, local, index);
    setDemand({ ...demand, ...newDemand });
  };

  const updateDemandValue = (demand, e, local, index) => {
    let newDemand = demand;
    newDemand.items[index] = {
      ...newDemand.items[index],
      [local]:
        local === "description" ? e.target.value : parseFloat(e.target.value),
    };
    return newDemand;
  };

  useEffect(() => {
    setValues({ ...values, [index]: { ...demand, totalPrice } });
  }, [demand]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleOpen = (index) => {
    const forms = document.querySelectorAll(".form-item");
    const switches = document.querySelectorAll(".switch");
    if (forms[index].getAttribute("id") === "form-item-close") {
      forms[index].setAttribute("id", "form-item-open");
      switches[index].setAttribute("id", "up");
    } else {
      forms[index].setAttribute("id", "form-item-close");
      forms[index].scroll(0, 0);
      switches[index].setAttribute("id", "down");
    }
  };

  const handleInvalid = (index) => {
    const forms = document.querySelectorAll(".form-item");
    if (forms[index].getAttribute("id") === "form-item-close") {
      forms[index].setAttribute("id", "form-item-open");
    }
  };

  return (
    <div
      className={"organism__price-projection-container " + className}
      {...other}
    >
      <BaseCard id="card" full>
        <div
          onFocus={() => handleInvalid(index)}
          id={index === 0 ? "form-item-open" : "form-item-close"}
          className="form-item"
        >
          <div id="close-menu">
            <div id="top">
              <img alt="Empresa Compradora" src={order.company.logo} />
              <h2>{order.company.tradeName}</h2>
            </div>

            <FaAngleDown
              id="down"
              className="switch"
              onClick={() => handleOpen(index)}
            />
          </div>

          {order.items.map((item, index) => (
            <>
              <section>
                <h2 id="product-name">{item.product.name}</h2>
              </section>

              <hr />
              <h2>Características do pedido</h2>
              <section>
                <div>
                  <h3>Quantidade:</h3>
                  <span>{item.quantity}</span>
                </div>
                <div>
                  <h3>Unidade:</h3>
                  <span>{item.unity}</span>
                </div>
              </section>
              <section>
                <div id="description">
                  <h3>Observações:</h3>
                  <span>{item.description || "Sem observações"}</span>
                </div>
              </section>
              <hr />
              <>
                {item?.additionalInfoForms?.map((form) => {
                  return (
                    <>
                      <h2 id="product-name">{form.name}</h2>
                      <section className="no-space">
                        {form.infos.map((info) => {
                          return (
                            <div>
                              <h3>{info?.field}:</h3>
                              <p>{info?.value}</p>
                            </div>
                          );
                        })}
                      </section>
                      <hr />
                    </>
                  );
                })}
              </>
              <h2>Informações Financeiras</h2>
              <section>
                <div>
                  <h3>Preço Anterior:</h3>
                  <span>{formatCurrencyValue(item.cost)}</span>
                </div>
                <div>
                  <h3>ICMS:</h3>
                  <span>{formatFloatNumberToText(item.icms)}</span>
                </div>
                <div>
                  <h3>IPI:</h3>
                  <span>{formatFloatNumberToText(item.ipi)}</span>
                </div>
              </section>
              <section>
                <div>
                  <h3>Prazo de pagamento:</h3>
                  <span>{item.deadlineAt || "Não informado"}</span>
                </div>
                <div>
                  <h3>Tipo de Frete:</h3>
                  <span>{item.shippingType || "Não informado"}</span>
                </div>
                <div>
                  <h3>Prazo de Frete:</h3>
                  <span>
                    {item.shippingAt
                      ? formatDate(item.shippingAt)
                      : "Não informado"}
                  </span>
                </div>
              </section>
              <hr />
              <h2>Projeção de preços</h2>
              <section>
                <InputSet
                  onChange={(e) => handleChange(e, "price", index)}
                  // {...register(`items.${index}.price`)}
                  // type="number"
                  label="Preço Previsto"
                  // required
                />
                <InputSet
                  onChange={(e) => handleChange(e, "icms", index)}
                  // type="number"
                  label="ICMS:"
                  // required
                />
                <InputSet
                  onChange={(e) => handleChange(e, "ipi", index)}
                  // type="number"
                  label="IPI:"
                  // required
                />
              </section>
              {/* <section>
                <InputSet label="Desconto (%)" />
                <InputSet
                  onChange={(e) => handleChange(e, "discount", index)}
                  // type="number"
                  label="Desconto(R$)"
                  // required
                />
                <InputSet id="green" label="Agregado" />
              </section> */}
              <div className="observation-area">
                <span id="observation-title">Alguma Observação?</span>
                <textarea
                  onChange={(e) => handleChange(e, "description", index)}
                  id="purchase-comments"
                  rows="5"
                  cols="33"
                  type="text"
                  placeholder="Descreva aqui alguma observação sobre o pedido."
                  // required
                />
              </div>
              {/* {order.items.length - 1 === index && (
                <div className="total">
                  <p>Valor total dessa compra:</p>
                  <h2>
                    <span>{formatCurrencyValue(totalPrice) || 0.0}</span>
                  </h2>
                </div>
              )} */}
            </>
          ))}
        </div>
      </BaseCard>
      {children}
    </div>
  );
}

export default PriceProjection;

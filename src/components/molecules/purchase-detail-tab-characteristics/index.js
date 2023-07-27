import React from "react";
import { formatCurrencyValue, getFormatedDate } from "utils/generalHelper";
import { FaAngleDown } from "react-icons/fa";

// loading the sass style fot the component
import "./index.scss";

function PurchaseDetailTabCharacteristics(props) {
  const { className = "", children, item, index, ...other } = props;

  const formatDate = (date) => {
    return getFormatedDate(new Date(date));
  };

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
      className={
        "molecule__purchase-detail-tab-characteristics-container " + className
      }
      {...other}
    >
      <div
        onFocus={() => handleInvalid(index)}
        id={index === 0 ? "form-item-open" : "form-item-close"}
        className="form-item"
      >
        <div id="close-menu">
          <section>
            <h2>{item?.product.name}</h2>
          </section>

          <FaAngleDown
            id="down"
            className="switch"
            onClick={() => handleOpen(index)}
          />
        </div>

        <section>
          <div>
            <h3>Quantidade:</h3>
            <p>{item?.quantity}</p>
          </div>
          <div>
            <h3>Unidade:</h3>
            <p>{item?.unity}</p>
          </div>
        </section>
        <section>
          <div id="description">
            <h3>Observações:</h3>
            <p>{item?.description}</p>
          </div>
        </section>
        <hr />
        <>
          {item?.additionalInfoForms?.map((form) => {
            return (
              <>
                <h2>{form.name}</h2>
                <section>
                  {form.infos.map((info) => {
                    return (
                      <div>
                        <h3>{info?.field}</h3>
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
            <h3>Preço Praticado:</h3>
            <p>{formatCurrencyValue(item?.cost)}</p>
          </div>
          <div>
            <h3>ICMS:</h3>
            <p>{item?.icms}%</p>
          </div>
        </section>
        <section>
          <div>
            <h3>IPI:</h3>
            <p>{item?.ipi}%</p>
          </div>
          <div>
            <h3>Prazo de Pagamento:</h3>
            <p>{item.deadlineAt || "Não informado"}</p>
          </div>
        </section>
        <section>
          <div>
            <h3>Prazo do Frete:</h3>
            <p>
              {item?.shippingAt
                ? formatDate(item?.shippingAt)
                : "Não informado"}
            </p>
          </div>
          <div>
            <h3>Tipo de Frete:</h3>
            <p>{item?.shippingType}</p>
          </div>
        </section>
        <hr />
        <h2>Informações de Fornecimento</h2>
        <div>
          <h3>Nome do Fornecedor:</h3>
          <p>{item?.supplierName || "Não Informado"}</p>
        </div>
        <div>
          <h3>Email:</h3>
          <p>{item?.supplierEmail || "Não Informado"}</p>
        </div>
        <div>
          <h3>Telefone:</h3>
          <p>{item?.supplierPhone || "Não Informado"}</p>
        </div>
        <hr />
        {children}
      </div>
    </div>
  );
}

export default PurchaseDetailTabCharacteristics;

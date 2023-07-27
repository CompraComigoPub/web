import React from "react";

import BaseCard from "components/atoms/base-card";

import { formatCurrencyValue } from "utils/generalHelper";

// loading the sass style fot the component
import "./index.scss";

function OperatorRequestAction(props) {
  const {
    className = "",
    children,
    status = "PAID",
    totalPrice, //PENDING, PAID, CANCELED, PAYING
    ...other
  } = props;

  return (
    <div
      className={"molecule__operator-request-action-container " + className}
      {...other}
    >
      <BaseCard id="base" full>
        {status === "PAYING" ? (
          <div className="row">
            <section>
              <div>
                <h2 className="red">PAGAMENTO</h2>
                <p>STATUS DO PEDIDO</p>
              </div>
              <div>
                <h2 className="red">30.08.2021</h2>
                <p>PRAZO DE PAGAMENTO</p>
              </div>
            </section>
            <section>
              <div>
                <h2 className="green">R$</h2>
                <p>TOTAL</p>
              </div>
            </section>
          </div>
        ) : status === "UNDER_EVALUATION" ? (
          <div className="row">
            <section>
              <div>
                <h2 className="orange">PENDENTE</h2>
                <p>STATUS</p>
              </div>
              {/* <div>
              <h2 className='red'>30.03.2021</h2>
              <p>PRAZO DE PAGAMENTO</p>
            </div> */}
            </section>
            <section>
              <div>
                <h2 className="green">{formatCurrencyValue(totalPrice)}</h2>
                <p>TOTAL</p>
              </div>
            </section>
          </div>
        ) : status === "PAID" ? (
          <div className="row">
            <section>
              <div>
                <h2 className="green">PAGO</h2>
                <p>STATUS</p>
              </div>
              <div>
                <h2 className="red">30.08.2021</h2>
                <p>PRAZO DE PAGAMENTO</p>
              </div>
            </section>
            <section>
              <div>
                <h2 className="green">R$</h2>
                <p>TOTAL</p>
              </div>
            </section>
          </div>
        ) : (
          <></>
        )}
        {/* <hr />
        <div className="row">
          <section>
            <div>
              <h3>Data do pedido:</h3>
              <span>nome</span>
            </div>
            <div>
              <h3>Etapa do pedido:</h3>
              <span>nome</span>
            </div>
            <div></div>
          </section>
          <section>
            <div>
              <h3>Referência:</h3>
              <span>nome</span>
            </div>
          </section>
        </div> */}
      </BaseCard>

      {children}
    </div>
  );
}

export default OperatorRequestAction;

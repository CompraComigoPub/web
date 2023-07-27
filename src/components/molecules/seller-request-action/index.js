import React from "react";

import BaseCard from "components/atoms/base-card";

import Button from "components/atoms/button";

import { formatCurrencyValue } from "utils/generalHelper";

// loading the sass style fot the component
import "./index.scss";

function SellerRequestAction(props) {
  const {
    className = "",
    children,
    setSent,
    status = "PENDING",
    totalPrice, //PENDING, PAID, CANCELED
    ...other
  } = props;

  return (
    <div
      className={"molecule__seller-request-action-container " + className}
      {...other}
    >
      <BaseCard id="base" full>
        {status === "UNDER_EVALUATION" ? (
          <div className="row">
            <section>
              <div>
                <h2 className="orange">PENDENTE</h2>
                <p>STATUS DO PEDIDO</p>
              </div>
              <div>
                <h2 className="green">{formatCurrencyValue(totalPrice)}</h2>
                <p>VALOR TOTAL DO PEDIDO</p>
              </div>
            </section>
            {/* <section>
              <Button onClick={()=> setSent(true)} id='button'>GERAR COBRANÇA</Button>
              <Button variant='link'>Cancelar pedido</Button>
            </section> */}
          </div>
        ) : status === "PAID" ? (
          <div className="row">
            <section>
              <div>
                <h2 className="green">PAGO</h2>
                <p>STATUS DO PEDIDO</p>
              </div>
              <div>
                <h2 className="green">R$</h2>
                <p>VALOR TOTAL DO PEDIDO</p>
              </div>
            </section>
            <section>
              <div></div>
              <Button variant="link">Cancelar pedido</Button>
            </section>
          </div>
        ) : status === "CANCELED" ? (
          <div className="row">
            <section>
              <div>
                <h2 className="red">CANCELADO</h2>
                <p>STATUS DO PEDIDO</p>
              </div>
              <div>
                <h2 className="green">R$</h2>
                <p>VALOR TOTAL DO PEDIDO</p>
              </div>
            </section>
          </div>
        ) : (
          <></>
        )}
      </BaseCard>

      {children}
    </div>
  );
}

export default SellerRequestAction;

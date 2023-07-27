import React from "react";

import BaseCard from "components/atoms/base-card";

import Button from "components/atoms/button";

import { formatCurrencyValue } from "utils/generalHelper";

// loading the sass style fot the component
import "./index.scss";

function BuyerRequestAction(props) {
  const {
    className = "",
    children,
    status = "CANCELED",
    totalPrice, //PENDING, PAID, CANCELED, PAYING
    ...other
  } = props;

  return (
    <div
      className={"molecule__buyer-request-action-container " + className}
      {...other}
    >
      <BaseCard id="base" full>
        {status === "PAYING" ? (
          <div className="row">
            <section>
              <div>
                <h2 className="orange">PAGAMENTO</h2>
                <p>STATUS DO PEDIDO</p>
              </div>
              <div>
                <h2 className="red">30.08.2021</h2>
                <p>PRAZO DE PAGAMENTO</p>
              </div>
            </section>
            <section>
              <div>
                <h2 className="green">{formatCurrencyValue(totalPrice)}</h2>
                <p>VALOR TOTAL DO PEDIDO</p>
              </div>
              <Button id="button">BAIXAR BOLETO</Button>
            </section>
          </div>
        ) : status === "UNDER_EVALUATION" ? (
          <div className="row">
            <section>
              <div>
                <h2 className="orange">PENDENTE</h2>
                <p>STATUS DO PEDIDO</p>
              </div>
              <div>
                <h2 className="red">Não definido</h2>
                <p>PRAZO DE PAGAMENTO</p>
              </div>
            </section>
            <section>
              <div>
                <h2 className="green">{formatCurrencyValue(totalPrice)}</h2>
                <p>VALOR TOTAL DO PEDIDO</p>
              </div>
              <h2 id="wait" className="orange">
                Aguardando faturamento
              </h2>
            </section>
          </div>
        ) : status === "PAID" ? (
          <div className="row">
            <section>
              <div>
                <h2 className="green">PAGO</h2>
                <p>STATUS DO PEDIDO</p>
              </div>
              <div>
                <h2 className="red">30.08.2021</h2>
                <p>PRAZO DE PAGAMENTO</p>
              </div>
            </section>
            <section>
              <div>
                <h2 className="green">{formatCurrencyValue(totalPrice)}</h2>
                <p>VALOR TOTAL DO PEDIDO</p>
              </div>
              <div>
                <h2 className="black">#</h2>
                <p>TRANSAÇÃO</p>
              </div>
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
                <h2 className="red">Não definido</h2>
                <p>PRAZO DE PAGAMENTO</p>
              </div>
            </section>
            <section>
              <div>
                <h2 className="green">R$</h2>
                <p>VALOR TOTAL DO PEDIDO</p>
              </div>
            </section>
          </div>
        ) : (
          <></>
        )}
        {/* <hr />
      <div className='row'>
        <section>
          <div>
            <h3>Data do pedido:</h3>
            <span>nome</span>
          </div>
          <div>
            <h3>Data do pagamento:</h3>
            <span>nome</span>
          </div>
        </section>
        <section>
          <div>
            <h3>Referência:</h3>
            <span>nome</span>
          </div>
          <Button variant='link' >Imprimir pedido</Button>
        </section>
      </div> */}
      </BaseCard>

      {children}
    </div>
  );
}

export default BuyerRequestAction;

import React from "react";

import BaseCard from "components/atoms/base-card";

import { formatCurrencyValue } from "utils/generalHelper";

// loading the sass style fot the component
import "./index.scss";

function BudgetAction(props) {
  const { className = "", children, type, status, totalPrice, ...other } = props;

  const getColorByStatus = (status) => {
    switch (status) {
    case "Reprovado pelo comprador":
    case "Não aceito pelo vendedor":
      return "#FF0000";
    case "Em análise pelo vendedor":
    case "Em análise pelo comprador":
    case "Pendente" :
      return "#F6821F";
    default:
      return "#48BE00";
    }
  };

  return (
    <div
      className={"molecule__budget-action-container " + className}
      {...other}
    >
      <BaseCard id="card" full>
        <section>
          <div>
            <h2 style={{color : getColorByStatus(status)}}>{status}</h2>
            <p>STATUS</p>
          </div>
          <div >
            <h2 style={{color : getColorByStatus(status)}}>{formatCurrencyValue(totalPrice)}</h2>
            <p>TOTAL</p>
          </div>
        </section>

        {/* <section>
            <Button>{type === 'supplier' ? 'ENVIAR PARA COMPRADOR' : 'ENVIAR PEDIDO'}</Button>
            <Button variant='link'>Cancelar pedido</Button>
          </section> */}

        {/* <Button>SELECIONAR OUTRO FORNECEDOR</Button> */}
      </BaseCard>

      {children}
    </div>
  );
}

export default BudgetAction;

import React from 'react';

// loading the sass style fot the component
import './index.scss';

function PurchaseStatus(props) {
  const {
    className = "",
    children,
    status,
    data,
    ...other
  } = props;

  console.log(data.transaction);

  return <div
    className={"organism__purchase-status-container " + className}
    data-status={status}
    {...other}
  >
    <div className="purchase-status-container">
      <div className="top">
        <div>
          <div className={`status ${status}`}>{data.orderStatus}</div>
          <div className="status-description">STATUS DO PEDIDO</div>
        </div>
        <div>
          <div className={"status payment-time"}>{data.payment}</div>
          <div className="status-description">PRAZO DE PAGAMENTO</div>
        </div>
        <div>
          <div className="status value">{data.value}</div>
          <div className="status-description">VALOR TOTAL DO PEDIDO</div>
        </div>
        <div className="transaction">
          {
            data.transaction !== ""
              ? <div>{data.transaction === "wait"
                ? <div className="transaction-wait">Aguardando Faturamento</div>
                : data.transaction === "done" ?
                  <div className="transaction-done"><button>Baixar Boleto</button></div>
                  : <div>
                    <div className="transaction-id">{data.transaction}</div>
                    <div className="status-description">TRANSAÇÃO</div>
                  </div>
              }
              </div>
              : <div></div>}
        </div>
      </div>
      <hr />
      <div className="bottom">
        <div>
          <div className="status-infos">Data do Pedido</div>
          <div className={"status-infos orderDate"}>{data.orderDate}</div>
        </div>
        <div>
          <div className="status-infos">Data do Pagamento</div>
          <div className={"status-infos paymentDate"}>{data.orderDate}</div>
        </div>
        <div>
          <div className="status-infos">Complemento</div>
          <div className={"status-infos reference"}>{data.reference}</div>
        </div>
        <div>
          <div className="status-infos print">Imprimir pedido</div>
        </div>
      </div>
    </div>
  </div>;
}

export default PurchaseStatus;

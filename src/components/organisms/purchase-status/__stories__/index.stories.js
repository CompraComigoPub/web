import React from 'react';
import PurchaseStatus from '../';

import './styles.scss';

const def = {
  title: 'Organisms/PurchaseStatus'
};
export default def;

const dataPeding =
{
  orderStatus: "Pendente",
  payment: "Nao definido",
  value: "R$ 1.527,91",
  orderDate: "07/04/2021",
  paymentDate: "Pagamento pendente",
  reference: "Dev-9483",
  transaction: "wait" //wait, id, done 
};

const dataApproved =
{
  orderStatus: "Pagamento",
  payment: "30.03.2021",
  value: "R$ 1.527,91",
  orderDate: "07/04/2021",
  paymentDate: "Pagamento pendente",
  reference: "Dev-9483",
  transaction: "done" //wait, id, done 
};

const dataCanceled =
{
  orderStatus: "Cancelado",
  payment: "Nao definido",
  value: "R$ 1.527,91",
  orderDate: "07/04/2021",
  paymentDate: "Pagamento pendente",
  reference: "Dev-9483",
  transaction: "" //wait, id, done 
};

const dataDone =
{
  orderStatus: "Pago",
  payment: "30.03.2021",
  value: "R$ 1.527,91",
  orderDate: "07/04/2021",
  paymentDate: "Pagamento pendente",
  reference: "Dev-9483",
  transaction: "#7474726" //wait, id, done 
};


function PurchaseStatusWaiting() {
  return <div style={{ height: '100%' }}>
    <div className="organism__purchase-status-el-container">
      <PurchaseStatus
        data={dataPeding}
        status="waiting" />
    </div>
  </div>;
}
export function PurchaseStatusApproved() {
  return <div style={{ height: '100%' }}>
    <div className="organism__purchase-status-el-container">
      <PurchaseStatus
        data={dataApproved}
        status="approved" />
    </div>
  </div>;
}
export function PurchaseStatusCanceled() {
  return <div style={{ height: '100%' }}>
    <div className="organism__purchase-status-el-container">
      <PurchaseStatus
        data={dataCanceled}
        status="canceled" />
    </div>
  </div>;
}
export function PurchaseStatusDone() {
  return <div style={{ height: '100%' }}>
    <div className="organism__purchase-status-el-container">
      <PurchaseStatus
        data={dataDone}
        status="done" />
    </div>
  </div>;
}

export {
  PurchaseStatusWaiting as PurchaseStatus
};

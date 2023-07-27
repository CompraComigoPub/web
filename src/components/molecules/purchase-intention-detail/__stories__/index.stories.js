import React from 'react';
import PurchaseIntentionDetail from '../';

import './styles.scss';

const data = {
  product: {
    name: "Papel Chamex Couchê A3, 90g, Fosco",
    quantity: "100",
    unit: "1",
    sku: "Tonelada",
    extra: "Aqui entra as informações que o comprador adicionar."
  },
  provider: {
    name: "Tecken",
    logo: "/images/logo-tecken.jpg",
    description: "Distribuidor de Papel",
    address: "Rua Serra Negra, 292 São Paulo - Brasil",
    homologated: "Sim"

  },
  send: {
    freight: "CIF",
    city: "São Paulo",
    shippingTime: "25/03/2021"
  },
  financial: {
    unitPrice: "R$ 147,87",
    subtotalTotal: "R$ 1.478,70",
    icms: "R$ 33,78",
    ipi: "R$ 15,43",
    totalPrice: "R$ 1.527,91",
    notes: ""
  }
};

const def = {
  title: 'Molecules/PurchaseIntentionDetail'
};
export default def;

function PurchaseIntentionDetailEl() {
  return <div style={{ height: '100%' }}>
    <div className="molecule__purchase-intention-detail-el-container">
      <PurchaseIntentionDetail data={data} />
    </div>
  </div>;
}

export {
  PurchaseIntentionDetailEl as PurchaseIntentionDetail
};

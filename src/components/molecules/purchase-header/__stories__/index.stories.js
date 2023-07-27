import React from 'react';
import PurchaseHeader from '../';

import './styles.scss';

const data = {
  product: "Papel Chamex Couche A3, 90g, Fosco",
  logo: "/images/company-avatar.jpg",
  companyName: "Marcopolo"
};

const def = {
  title: 'Molecules/PurchaseHeader'
};
export default def;

function PurchaseHeaderEl() {
  return <div style={{ height: '100%' }}>
    <div className="molecule__purchase-header-el-container">
      <PurchaseHeader data={data} />
    </div>
  </div>;
}

export function PurchaseHeaderHidden() {
  return <div style={{ height: '100%' }}>
    <div className="molecule__purchase-header-el-container">
      <PurchaseHeader hidden data={data} />
    </div>
  </div>;
}

export {
  PurchaseHeaderEl as PurchaseHeader
};

import React from 'react';
import PurchaseConclusion from '../';

import './styles.scss';

const def = {
  title: 'Molecules/PurchaseConclusion'
};
export default def;

function PurchaseConclusionEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__purchase-conclusion-el-container">
      <PurchaseConclusion />
    </div>
  </div>;
}

export {
  PurchaseConclusionEl as PurchaseConclusion
};

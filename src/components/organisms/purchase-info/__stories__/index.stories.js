import React from 'react';
import PurchaseInfo from '../';

import './styles.scss';

const def = {
  title: 'Organisms/PurchaseInfo'
};
export default def;

function PurchaseInfoEl () {
  return <div style={{height: '100%'}}>
    <div className="organism__purchase-info-el-container">
      <PurchaseInfo />
    </div>
  </div>;
}

export {
  PurchaseInfoEl as PurchaseInfo
};

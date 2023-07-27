import React from 'react';
import PurchaseDetailTabCharacteristics from '../';

import './styles.scss';

const def = {
  title: 'Molecules/PurchaseDetailTabCharacteristics'
};
export default def;

function PurchaseDetailTabCharacteristicsEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__purchase-detail-tab-characteristics-el-container">
      <PurchaseDetailTabCharacteristics />
    </div>
  </div>;
}

export {
  PurchaseDetailTabCharacteristicsEl as PurchaseDetailTabCharacteristics
};

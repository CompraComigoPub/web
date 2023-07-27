import React from 'react';
import SellerBudgetConclusion from '../';

import './styles.scss';

const def = {
  title: 'Molecules/SellerBudgetConclusion'
};
export default def;

function SellerBudgetConclusionEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__seller-budget-conclusion-el-container">
      <SellerBudgetConclusion />
    </div>
  </div>;
}

export {
  SellerBudgetConclusionEl as SellerBudgetConclusion
};

import React from 'react';
import BuyerBudgetDetail from '../';

import './styles.scss';

const def = {
  title: 'Pages/BuyerBudgetDetail'
};
export default def;

function BuyerBudgetDetailEl () {
  return <div style={{height: '100%'}}>
    <div className="page__buyer-budget-detail-el-container">
      <BuyerBudgetDetail />
    </div>
  </div>;
}

export {
  BuyerBudgetDetailEl as BuyerBudgetDetail
};

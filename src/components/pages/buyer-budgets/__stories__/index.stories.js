import React from 'react';
import BuyerBudgets from '../';

import './styles.scss';

const def = {
  title: 'Pages/BuyerBudgets'
};
export default def;

function BuyerBudgetsEl () {
  return <div style={{height: '100%'}}>
    <div className="page__buyer-budgets-el-container">
      <BuyerBudgets />
    </div>
  </div>;
}

export {
  BuyerBudgetsEl as BuyerBudgets
};

import React from 'react';
import SellerBudgets from '../';

import './styles.scss';

const def = {
  title: 'Pages/SellerBudgets'
};
export default def;

function SellerBudgetsEl () {
  return <div style={{height: '100%'}}>
    <div className="page__seller-budgets-el-container">
      <SellerBudgets />
    </div>
  </div>;
}

export {
  SellerBudgetsEl as SellerBudgets
};

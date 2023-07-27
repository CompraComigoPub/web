import React from 'react';
import SellerBudgetDetail from '../';

import './styles.scss';

const def = {
  title: 'Pages/SellerBudgetDetail'
};
export default def;

function SellerBudgetDetailEl () {
  return <div style={{height: '100%'}}>
    <div className="page__seller-budget-detail-el-container">
      <SellerBudgetDetail />
    </div>
  </div>;
}

export {
  SellerBudgetDetailEl as SellerBudgetDetail
};

import React from 'react';
import BudgetAction from '../';

import './styles.scss';

const def = {
  title: 'Molecules/BudgetAction'
};
export default def;

function BudgetActionEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__budget-action-el-container">
      <BudgetAction />
    </div>
  </div>;
}

export {
  BudgetActionEl as BudgetAction
};

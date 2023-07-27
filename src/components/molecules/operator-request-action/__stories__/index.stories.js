import React from 'react';
import OperatorRequestAction from '../';

import './styles.scss';

const def = {
  title: 'Molecules/OperatorRequestAction'
};
export default def;

function OperatorRequestActionEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__operator-request-action-el-container">
      <OperatorRequestAction />
    </div>
  </div>;
}

export {
  OperatorRequestActionEl as OperatorRequestAction
};

import React from 'react';
import JoinedOrder from '../';

import './styles.scss';

const def = {
  title: 'Organisms/JoinedOrder'
};
export default def;

function JoinedOrderEl () {
  return <div style={{height: '100%'}}>
    <div className="organism__joined-order-el-container">
      <JoinedOrder />
    </div>
  </div>;
}

export {
  JoinedOrderEl as JoinedOrder
};

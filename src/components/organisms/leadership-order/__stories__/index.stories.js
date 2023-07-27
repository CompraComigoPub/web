import React from 'react';
import LeadershipOrder from '../';

import './styles.scss';

const def = {
  title: 'Organisms/LeadershipOrder'
};
export default def;

function LeadershipOrderEl () {
  return <div style={{height: '100%'}}>
    <div className="organism__leadership-order-el-container">
      <LeadershipOrder />
    </div>
  </div>;
}

export {
  LeadershipOrderEl as LeadershipOrder
};

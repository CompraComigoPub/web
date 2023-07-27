import React from 'react';
import BuyerRequests from '../';

import './styles.scss';

const def = {
  title: 'Pages/BuyerRequests'
};
export default def;

function BuyerRequestsEl () {
  return <div style={{height: '100%'}}>
    <div className="page__buyer-requests-el-container">
      <BuyerRequests />
    </div>
  </div>;
}

export {
  BuyerRequestsEl as BuyerRequests
};

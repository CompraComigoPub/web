import React from 'react';
import SellerRequests from '../';

import './styles.scss';

const def = {
  title: 'Pages/SellerRequests'
};
export default def;

function SellerRequestsEl () {
  return <div style={{height: '100%'}}>
    <div className="page__seller-requests-el-container">
      <SellerRequests />
    </div>
  </div>;
}

export {
  SellerRequestsEl as SellerRequests
};

import React from 'react';
import BuyerRequestsDetail from '../';

import './styles.scss';

const def = {
  title: 'Pages/BuyerRequestsDetail'
};
export default def;

function BuyerRequestsDetailEl () {
  return <div style={{height: '100%'}}>
    <div className="page__buyer-requests-detail-el-container">
      <BuyerRequestsDetail />
    </div>
  </div>;
}

export {
  BuyerRequestsDetailEl as BuyerRequestsDetail
};

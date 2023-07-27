import React from 'react';
import SellerRequestDetail from '../';

import './styles.scss';

const def = {
  title: 'Pages/SellerRequestDetail'
};
export default def;

function SellerRequestDetailEl () {
  return <div style={{height: '100%'}}>
    <div className="page__seller-request-detail-el-container">
      <SellerRequestDetail />
    </div>
  </div>;
}

export {
  SellerRequestDetailEl as SellerRequestDetail
};

import React from 'react';
import SellerRequestAction from '../';

import './styles.scss';

const def = {
  title: 'Molecules/SellerRequestAction'
};
export default def;

function SellerRequestActionEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__seller-request-action-el-container">
      <SellerRequestAction />
    </div>
  </div>;
}

export {
  SellerRequestActionEl as SellerRequestAction
};

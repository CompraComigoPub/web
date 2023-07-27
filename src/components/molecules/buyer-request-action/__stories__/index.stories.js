import React from 'react';
import BuyerRequestAction from '../';

import './styles.scss';

const def = {
  title: 'Molecules/BuyerRequestAction'
};
export default def;

function BuyerRequestActionEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__buyer-request-action-el-container">
      <BuyerRequestAction />
    </div>
  </div>;
}

export {
  BuyerRequestActionEl as BuyerRequestAction
};

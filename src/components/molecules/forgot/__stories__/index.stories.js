import React from 'react';
import Forgot from '../';

import './styles.scss';

const def = {
  title: 'Molecules/Forgot'
};
export default def;

function ForgotEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__forgot-el-container">
      <Forgot />
    </div>
  </div>;
}

export {
  ForgotEl as Forgot
};

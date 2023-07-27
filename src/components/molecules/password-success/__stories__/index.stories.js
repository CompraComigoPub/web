import React from 'react';
import PasswordSuccess from '../';

import './styles.scss';

const def = {
  title: 'Molecules/PasswordSuccess'
};
export default def;

function PasswordSuccessEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__password-success-el-container">
      <PasswordSuccess />
    </div>
  </div>;
}

export {
  PasswordSuccessEl as PasswordSuccess
};

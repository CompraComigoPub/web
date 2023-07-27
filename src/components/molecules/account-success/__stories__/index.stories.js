import React from 'react';
import AccountSuccess from '../';

import './styles.scss';

const def = {
  title: 'Molecules/AccountSuccess'
};
export default def;

function AccountSuccessEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__account-success-el-container">
      <AccountSuccess />
    </div>
  </div>;
}

export {
  AccountSuccessEl as AccountSuccess
};

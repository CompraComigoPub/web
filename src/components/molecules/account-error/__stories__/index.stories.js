import React from 'react';
import AccountError from '..';

import './styles.scss';

const def = {
  title: 'Molecules/AccountError'
};
export default def;

function AccountErrorEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__account-error-el-container">
      <AccountError />
    </div>
  </div>;
}

export {
  AccountErrorEl as AccountError
};

import React from 'react';
import AccountModalContent from '../';

import './styles.scss';

const def = {
  title: 'Organisms/AccountModalContent'
};
export default def;

function AccountModalContentEl () {
  return <div style={{height: '100%'}}>
    <div className="organism__account-modal-content-el-container">
      <AccountModalContent />
    </div>
  </div>;
}

export {
  AccountModalContentEl as AccountModalContent
};

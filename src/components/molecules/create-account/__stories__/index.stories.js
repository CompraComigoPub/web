import React from 'react';
import CreateAccount from '../';

import './styles.scss';

const def = {
  title: 'Molecules/CreateAccount'
};
export default def;

function CreateAccountEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__create-account-el-container">
      <CreateAccount />
    </div>
  </div>;
}

export {
  CreateAccountEl as CreateAccount
};

import React from 'react';
import Password from '../';

import './styles.scss';

const def = {
  title: 'Molecules/Password'
};
export default def;

function PasswordEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__password-el-container">
      <Password />
    </div>
  </div>;
}

export {
  PasswordEl as Password
};

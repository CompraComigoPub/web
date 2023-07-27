import React from 'react';
import Login from '../';

import './styles.scss';

const def = {
  title: 'Molecules/Login'
};
export default def;

function LoginEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__login-el-container">
      <Login />
    </div>
  </div>;
}

export {
  LoginEl as Login
};

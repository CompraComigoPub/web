import React from 'react';
import RegisterUser from '../';

import './styles.scss';

const def = {
  title: 'Pages/RegisterUser'
};
export default def;

function RegisterUserEl () {
  return <div style={{height: '100%'}}>
    <div className="page__register-user-el-container">
      <RegisterUser />
    </div>
  </div>;
}

export {
  RegisterUserEl as RegisterUser
};

import React from 'react';
import Register from '../';

import './styles.scss';

const def = {
  title: 'Pages/Register'
};
export default def;

function RegisterEl () {
  return <div style={{height: '100%'}}>
    <div className="page__register-el-container">
      <Register />
    </div>
  </div>;
}

export {
  RegisterEl as Register
};

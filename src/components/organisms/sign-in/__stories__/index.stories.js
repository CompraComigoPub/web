import React from 'react';
import SignIn from '../';

import './styles.scss';

const def = {
  title: 'Organisms/SignIn'
};
export default def;

function SignInEl () {
  return <div style={{height: '100%'}}>
    <div className="organism__sign-in-el-container">
      <SignIn />
    </div>
  </div>;
}

export {
  SignInEl as SignIn
};

import React from 'react';
import SignInPerson from '../';

import './styles.scss';

const def = {
  title: 'Molecules/SignInPerson'
};
export default def;

function SignInPersonEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__sign-in-person-el-container">
      <SignInPerson />
    </div>
  </div>;
}

export {
  SignInPersonEl as SignInPerson
};

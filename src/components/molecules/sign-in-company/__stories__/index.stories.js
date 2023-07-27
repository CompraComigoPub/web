import React from 'react';
import SignInCompany from '../';

import './styles.scss';

const def = {
  title: 'Molecules/SignInCompany'
};
export default def;

function SignInCompanyEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__sign-in-company-el-container">
      <SignInCompany />
    </div>
  </div>;
}

export {
  SignInCompanyEl as SignInCompany
};

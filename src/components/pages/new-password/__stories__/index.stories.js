import React from 'react';
import NewPassword from '../';

import './styles.scss';

const def = {
  title: 'Pages/NewPassword'
};
export default def;

function NewPasswordEl () {
  return <div style={{height: '100%'}}>
    <div className="page__new-password-el-container">
      <NewPassword />
    </div>
  </div>;
}

export {
  NewPasswordEl as NewPassword
};

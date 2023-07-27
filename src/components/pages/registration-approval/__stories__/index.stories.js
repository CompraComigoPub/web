import React from 'react';
import RegistrationApproval from '../';

import './styles.scss';

const def = {
  title: 'Pages/RegistrationApproval'
};
export default def;

function RegistrationApprovalEl () {
  return <div style={{height: '100%'}}>
    <div className="page__registration-approval-el-container">
      <RegistrationApproval />
    </div>
  </div>;
}

export {
  RegistrationApprovalEl as RegistrationApproval
};

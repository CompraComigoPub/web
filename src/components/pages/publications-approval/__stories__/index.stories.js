import React from 'react';
import PublicationsApproval from '../';

import './styles.scss';

const def = {
  title: 'Pages/PublicationsApproval'
};
export default def;

function PublicationsApprovalEl () {
  return <div style={{height: '100%'}}>
    <div className="page__publications-approval-el-container">
      <PublicationsApproval />
    </div>
  </div>;
}

export {
  PublicationsApprovalEl as PublicationsApproval
};

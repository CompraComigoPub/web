import React from 'react';
import ApprovalConclusion from '../';

import './styles.scss';

const def = {
  title: 'Molecules/ApprovalConclusion'
};
export default def;

function ApprovalConclusionEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__approval-conclusion-el-container">
      <ApprovalConclusion />
    </div>
  </div>;
}

export {
  ApprovalConclusionEl as ApprovalConclusion
};

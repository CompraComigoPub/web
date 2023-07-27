import React from 'react';
import ConsolidationDetail from '../';

import './styles.scss';

const def = {
  title: 'Pages/ConsolidationDetail'
};
export default def;

function ConsolidationDetailEl () {
  return <div style={{height: '100%'}}>
    <div className="page__consolidation-detail-el-container">
      <ConsolidationDetail />
    </div>
  </div>;
}

export {
  ConsolidationDetailEl as ConsolidationDetail
};

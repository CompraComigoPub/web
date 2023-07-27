import React from 'react';
import Consolidation from '../';

import './styles.scss';

const def = {
  title: 'Pages/Consolidation'
};
export default def;

function ConsolidationEl () {
  return <div style={{height: '100%'}}>
    <div className="page__consolidation-el-container">
      <Consolidation />
    </div>
  </div>;
}

export {
  ConsolidationEl as Consolidation
};

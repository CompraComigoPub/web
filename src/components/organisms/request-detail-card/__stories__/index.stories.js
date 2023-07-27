import React from 'react';
import RequestDetailCard from '../';

import './styles.scss';

const def = {
  title: 'Organisms/RequestDetailCard'
};
export default def;

function RequestDetailCardEl () {
  return <div style={{height: '100%'}}>
    <div className="organism__request-detail-card-el-container">
      <RequestDetailCard />
    </div>
  </div>;
}

export {
  RequestDetailCardEl as RequestDetailCard
};

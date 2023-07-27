import React from 'react';
import PurchaseTeam from '../';

import './styles.scss';

const def = {
  title: 'Molecules/PurchaseTeam'
};
export default def;

function PurchaseTeamEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__purchase-team-el-container">
      <PurchaseTeam />
    </div>
  </div>;
}

export {
  PurchaseTeamEl as PurchaseTeam
};

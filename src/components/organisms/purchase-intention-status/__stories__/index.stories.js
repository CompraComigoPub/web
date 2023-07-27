import React from 'react';
import PurchaseIntentionStatus from '../';

import './styles.scss';

const def = {
  title: 'Organisms/PurchaseIntentionStatus'
};
export default def;

const info = {
  card1: {
    highlight: '3 PEDIDOS',
    description: 'QUANTIDADE DE SOLICITAÇÕES',
  },
  card2: {
    highlight: '30.03.2021',
    description: 'DATA LIMITE DE ENVIO',
  },
  card3: {
    highlight: 'R$ 161.880',
    description: 'VALOR TOTAL DO PEDIDOS',
  },
};

function PurchaseIntentionStatusEl () {
  return <div style={{height: '100%'}}>
    <div className="organism__purchase-intention-status-el-container">
      <PurchaseIntentionStatus cards={info}/>
    </div>
  </div>;
}

export {
  PurchaseIntentionStatusEl as PurchaseIntentionStatus
};

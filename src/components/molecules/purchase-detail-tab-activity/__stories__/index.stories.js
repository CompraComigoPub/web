import React from 'react';
import PurchaseDetailTabActivity from '../';

import './styles.scss';

const def = {
  title: 'Molecules/PurchaseDetailTabActivity'
};
export default def;

const entries = [
  {
    ageGroup: 'Hoje',
    entries: [
      {
        title: <><strong>Martiplast</strong> enviou um arquivo</>,
        age: '3 horas atrás',
      },
      {
        title: <><strong>Martiplast</strong> enviou um arquivo</>,
        age: '3 horas atrás',
      },
    ],
  },
  {
    ageGroup: 'Semana passada',
    entries: [
      {
        title: <><strong>Martiplast</strong> enviou um arquivo</>,
        age: '3 horas atrás',
      },
      {
        title: <><strong>Martiplast</strong> enviou um arquivo</>,
        age: '3 horas atrás',
      },
      {
        title: <><strong>Martiplast</strong> enviou um arquivo</>,
        age: '3 horas atrás',
      },
    ],
  },
];

function PurchaseDetailTabActivityEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__purchase-detail-tab-activity-el-container">
      <PurchaseDetailTabActivity activity={entries} />
    </div>
  </div>;
}

export {
  PurchaseDetailTabActivityEl as PurchaseDetailTabActivity
};

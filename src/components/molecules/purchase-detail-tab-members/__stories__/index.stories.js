import React from 'react';
import PurchaseDetailTabMembers from '../';

import './styles.scss';

const def = {
  title: 'Molecules/PurchaseDetailTabMembers'
};
export default def;

const members = [
  {
    name: 'Empresa 1',
    role: 'Empresa líder',
    avatar: "http://placekitten.com/200/300"
  },
  {
    name: 'Empresa 2',
    role: 'Empresa Participante',
    avatar: "http://placekitten.com/200/301"
  },
  {
    name: 'Empresa 3',
    role: 'Empresa Participante',
    avatar: "http://placekitten.com/200/304"
  },
];

function PurchaseDetailTabMembersEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__purchase-detail-tab-members-el-container">
      <PurchaseDetailTabMembers members={members} />
    </div>
  </div>;
}

export {
  PurchaseDetailTabMembersEl as PurchaseDetailTabMembers
};

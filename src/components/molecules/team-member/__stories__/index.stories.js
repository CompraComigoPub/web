import React from 'react';
import TeamMember from '../';

import './styles.scss';

export default {
  title: 'Molecules/TeamMember'
};


function TeamMemberEl() {
  return <div style={{ height: '100%' }}>
    <h3>team member</h3>
    <div className="molecule__team-member-el-container">
      <TeamMember
        image={"/images/img-atendimento.jpg"}
        name="Compra Comigo"
        companyName="Atendimento"
      />
    </div>
  </div>;
}
export function TeamMemberCompradora() {
  return <div style={{ height: '100%' }}>
    <h3>team member</h3>
    <div className="molecule__team-member-el-container">
      <TeamMember
        image={"/images/img-atendimento.jpg"}
        name="Emilee Simchenko"
        companyName="Compradora"
      />
    </div>
  </div>;
}

export {
  TeamMemberEl as TeamMember
};

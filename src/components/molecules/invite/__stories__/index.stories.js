import React from 'react';
import Invite from '../';

import './styles.scss';

const def = {
  title: 'Molecules/Invite'
};
export default def;

function InviteProfile() {
  return <div style={{ height: '100%' }}>
    <div className="molecule__invite-el-container">
      <Invite
        title="Qual o perfil do convidado?"
        subtitle="Escolha a opcão mais adequada."
        button="Continue"
        type="profile" />

    </div>
  </div>;
}
export function InviteProfileSelected() {
  return <div style={{ height: '100%' }}>
    <div className="molecule__invite-el-container">
      <Invite
        title="Qual o perfil do convidado?"
        subtitle="Escolha a opcão mais adequada."
        button="Continue"
        type="profile"
        selected />

    </div>
  </div>;
}
export function InviteSend() {
  return <div style={{ height: '100%' }}>
    <div className="molecule__invite-el-container">
      <Invite
        title="Enviar Convite"
        subtitle="Preencha com as informações de envio."
        button="Enviar convite"
        type="send" />
    </div>
  </div>;
}
export function InviteConfirm() {
  return <div style={{ height: '100%' }}>
    <div className="molecule__invite-el-container">
      <Invite
        title="Qual o perfil do convidado?"
        subtitle="Escolha a opcão mais adequada."
        button="Fechar"
        type="confirm" />
    </div>
  </div>;
}

export {
  InviteProfile as Invite
};

import React from 'react';
import PeopleIcon from '../../icons/People';
import Invite from '../invite';
// loading the sass style fot the component
import './index.scss';

function WelcomeCard(props) {
  const {
    className = "",
    children,
    message,
    name,
    // userInviteHash = '',
    onClick,
    ...other
  } = props;

  // const [isLinkVisible, setLinkVisible] = React.useState(false);
  // const [isCopied, setCopied] = React.useState(false);

  // const inviteLink = `https://compracomigo.cc/i/${userInviteHash}`;

  // function copyLinkToClickboard () {
  //   navigator.clipboard.writeText(inviteLink);
  //   setCopied(true);
  //   setTimeout(() => {
  //     setCopied(false);
  //   }, 2000);
  // }

  return <div
    className={"molecule__welcome-card-container " + className}
    {...other}
  >
    <div className="wellcome-card">
      <div className="card-text">
        <div className="title">{message}, <b>{name}</b></div>
        <div className="subtitle">Veja o que está acontecendo na sua rede hoje</div>
      </div>
      <div className="card-button">
        <Invite
          className="button-invite"
          button="Enviar convite"
          subtitle="Preencha com as informações de envio."
          title="Enviar Convite"
          type="send"
        >
          <PeopleIcon />
          Convidar empresas parceiras
        </Invite>
        {/* <button
          className="button-invite"
          onClick={event => {
            setLinkVisible(true);
            onClick && onClick(event);
          }}>
          <PeopleIcon />
          Convidar empresas parceiras
        </button> */}
        {/* <div
          className="invite-link"
          onClick={copyLinkToClickboard}
          data-visible={isLinkVisible ? 1 : null}
          title="Clique para copiar"
        >
          {
            isCopied
              ? "Copiado, envie para seus contatos"
              : inviteLink
          }
        </div> */}
      </div>
    </div>
  </div >;
}

export default WelcomeCard;

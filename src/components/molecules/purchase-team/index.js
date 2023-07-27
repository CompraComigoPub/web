import React from 'react';

// loading the sass style fot the component
import './index.scss';

function PurchaseTeam(props) {
  const {
    className = "",
    children,
    members = [{ pic: '', name: 'Compra Comigo', role: 'Atendimento' }, { pic: '', name: 'Emilee Simchenko', role: 'Compradora' }],
    ...other
  } = props;

  return <div
    className={"molecule__purchase-team-container " + className}
    {...other}
  >
    <h2>Equipe</h2>
    {members?.map((member) => (
      <div className='member'>
        <img src={member?.photo} alt='' />
        <div id='column'>
          <h3>{member?.name}</h3>
          <p>{member?.position}</p>
        </div>
      </div>
    ))}

    {children}
  </div>;
}

export default PurchaseTeam;

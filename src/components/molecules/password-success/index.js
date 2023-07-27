import React from 'react';
import Button from 'components/atoms/button';
import Title from 'components/molecules/title';
import Check from 'components/icons/Check.svg';

// loading the sass style fot the component
import './index.scss';

function PasswordSuccess (props) {
  const {
    className = "",
    children,
    ...other
  } = props;

  return <div
    className={"molecule__password-success-container " + className}
    {...other}
  >
    <img className='check' alt='' src={Check}></img>
    <Title
      dataSubtitle="Você alterou sua senha.
      Faça login com sua nova senha."
      dataType="medium"
    >Senha atualizada com sucesso!</Title>
    <div className="button-container">
      <Button disabled={false}>Entrar</Button>
    </div>

    {children}
  </div>;
}

export default PasswordSuccess;

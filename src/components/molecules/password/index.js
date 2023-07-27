import React from 'react';
import Button from 'components/atoms/button';
import Title from 'components/molecules/title';
import InputSet from 'components/molecules/input-set';

// loading the sass style fot the component
import './index.scss';

function Password (props) {
  const {
    className = "",
    children,
    ...other
  } = props;

  const formRef = React.useRef(null);
  const [validForm, setValidForm] = React.useState(false);


  function onInvalid () {
    setValidForm(false);
  }

  function checkValidity () {
    setValidForm(formRef.current.checkValidity());
  }

  function onButtonClick (event) {
    event.stopPropagation();
    event.preventDefault();
    props.setSuccess(true);

    // TODO: use real user and password to check
    window.sessionStorage.setItem('auth', JSON.stringify({
      user: {
        id: 123,
        company: 'Marcopolo',
        position: 'Gerente de compras',
        photo: '/images/user-avatar.jpg',
        name: 'Fulana Silva'
      }
    }));
  }

  return <div
    className={"molecule__password-container " + className}
    {...other}
  >
    <Title
      dataSubtitle="Crie uma nova senha"
      dataType="medium"
    >Criar nova senha</Title>

    <form onInvalid={onInvalid} ref={formRef}>
      <hr></hr>
      <InputSet label="Nova senha:" name="new-password" type="password" placeholder="Digite sua nova senha" full required onBlur={checkValidity} />
      <InputSet label="Confirme sua nova senha:" name="retype-password" type="password" placeholder="Digite novamente sua nova senha" full required onBlur={checkValidity} />
      <div className="button-container">
        <Button disabled={!validForm} onClick={onButtonClick}>Enviar</Button>
      </div>
    </form>

    {children}
  </div>;
}

export default Password;

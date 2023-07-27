import React from 'react';
import Button from 'components/atoms/button';
import Title from 'components/molecules/title';
import Check from 'components/icons/Check.svg';

// loading the sass style fot the component
import './index.scss';

function LinkSent (props) {
  const {
    className = "",
    children,
    ...other
  } = props;

  // const history = useHistory();

  // const formRef = React.useRef(null);
  // const [validForm, setValidForm] = React.useState(false);

  // function onInvalid () {
  //   setValidForm(false);
  // }

  // function checkValidity () {
  //   setValidForm(formRef.current.checkValidity());
  // }

  // function onButtonClick (event) {
  //   event.stopPropagation();
  //   event.preventDefault();

  //   // TODO: use real user and password to check
  //   window.sessionStorage.setItem('auth', JSON.stringify({
  //     user: {
  //       id: 123,
  //       company: 'Marcopolo',
  //       position: 'Gerente de compras',
  //       photo: '/images/user-avatar.jpg',
  //       name: 'Fulana Silva'
  //     }
  //   }));
  //   setTimeout(_ => {
  //     // history.push("/");
  //     window.location.href = '/';
  //   }, 500);
  // }

  return <div
    className={"molecule__link-sent-container " + className}
    {...other}
  >
    <img className='check' alt='' src={Check}></img>
    <Title
      dataSubtitle="Enviamos um e-mail para você criar uma nova senha.
      Siga os passos enviados para recuperar seu acesso."
      dataType="medium"
    >Link de recuperação enviado com sucesso</Title>
    <div className="button-container">
      <Button disabled={false} onClick={()=> props.setForgot(false)}>Fazer Login</Button>
    </div>
    {children}
  </div>;
}

export default LinkSent;

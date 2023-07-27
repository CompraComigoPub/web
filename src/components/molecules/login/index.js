import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';


import Button from 'components/atoms/button';
import InputSet from 'components/molecules/input-set';
import Title from 'components/molecules/title';

import { useAuth } from 'utils/data/hooks/useAuth';
import { useHistory } from 'react-router-dom';

// loading the sass style fot the component
import './index.scss';

function Login (props) {
  const {
    setForgot,
    className = "",
    children,
    ...other
  } = props;

  const { login } = useAuth();
  const formRef = useRef(null);
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ email: '', password: '' });

  function handleChange({target}) {
    const {id, value} = target;
    setData({...data, [id]: value});
  };

  async function onSubmit (event) {
    event.stopPropagation();
    event.preventDefault();
    try {
      setLoading(true);
      await login(data);
      history.push('/');
    } catch (error) {
      toast.error('Usuário ou senha inválidos');
    } finally {
      setLoading(false);
    }
  }

  return <div
    className={"molecule__login-container " + className}
    {...other}
  >
    <Title
      dataSubtitle="Entre na plataforma do Compra Comigo."
      dataType="medium"
    >Entrar</Title>

    <form ref={formRef} onSubmit={onSubmit}>
      <hr></hr>
      <InputSet label="Usuário" name="email" type="email" placeholder="E-mail" full required value={data.email} onChange={handleChange} />
      <InputSet label="Senha" name="password" type="password" placeholder="xxxxxx" full required value={data.password} onChange={handleChange} />
      <div className="button-container">
        <Button disabled={loading} type="submit">{loading ? 'Entrando...' : 'Entrar'}</Button>
      </div>
      <hr></hr>
    </form>
    <p onClick={() => setForgot(true)}>Esqueci minha senha</p>
  </div>;
}

export default Login;

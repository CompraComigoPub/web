import React, { useEffect } from 'react';
import Button from 'components/atoms/button';
import InputSet from 'components/molecules/input-set';
import Title from 'components/molecules/title';
import LinkSent from 'components/molecules/link-sent';
import { toast } from 'react-toastify';

// loading the sass style fot the component
import './index.scss';
import { mutate } from 'utils/graphql';
import updatePassword from 'utils/graphql/mutations/user/update-password';

function Forgot (props) {
  const {
    className = "",
    children,
    ...other
  } = props;

  const formRef = React.useRef(null);
  const [validForm, setValidForm] = React.useState(false);
  const [linkSent, setLinkSent] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  function onChange (e) {
    setEmail(e.target.value);
  }

  useEffect(()=>{
    if(email !== ''){
      setValidForm(true);
    }else{
      setValidForm(false);
    }
  },[email]);

  async function onSubmit (event) {
    event.stopPropagation();
    event.preventDefault();
    setLoading(true);
    try{
      const { data: { updatePassword: { success, message } } } = await mutate(updatePassword, { email });
      if(!success){
        throw new Error(message);
      }
      setLinkSent(true);
    }catch(error){
      toast.error('Não foi possível realizar a redefinição de senha.');
    }finally{
      setLoading(false);
    }
  };

  return <div
    className={"molecule__forgot-container " + className}
    {...other}
  >
    {linkSent ?
      <LinkSent setForgot={props.setForgot}/>
      :
      <>
        <Title
          dataSubtitle="Recupere a sua senha"
          dataType="medium"
        >Esqueci minha senha</Title>

        <form ref={formRef} onSubmit={onSubmit}>
          <hr></hr>
          <InputSet label="E-mail cadastrado" name="email" type="email" placeholder="Digite seu e-mail cadastrado" full required onChange={e => onChange(e)} />
          <div className="button-container">
            <Button type='submit' disabled={loading || !validForm} >{loading ? 'Enviando...' : 'Enviar e-mail de recuperação'}</Button>
          </div>
        </form>
      </>
    }
    {children}
  </div>;
}

export default Forgot;

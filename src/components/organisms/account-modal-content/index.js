import LogoCompraComigo from 'components/icons/LogoCompraComigo';
import CreateAccount from 'components/molecules/create-account';
import Login from 'components/molecules/login';
import React from 'react';
// loading the sass style fot the component
import './index.scss';

function AccountModalContent (props) {
  const {
    className = "",
    children,
    isCreate = false,
    ...other
  } = props;

  return <div
    className={"organism__account-modal-content-container " + className}
    {...other}
  >
    <aside className="sidebar">
      <div className="decorative">
        {/* <img src="/images/blob.png" alt="" className="image-1"/>
        <img src="/images/blob.png" alt="" className="image-2"/> */}
        <img src="/images/texture.png" alt="" id='texture'/>
      </div>
      <div className="logo-container">
        <LogoCompraComigo />
      </div>
      <div className="text-container">
        {
          isCreate
            ? <>
              <h3>Criar uma<br/>nova conta</h3>
              Texto de apoio aqui lorem ipsum collor dollor, seller a velt nious awards.
            </>
            : <>
              <h3>Bem-vindo ao <br/>Compra Comigo</h3>
              <p>Participe da plataforma que junta compradores <br/> e fornecedores no mesmo canal.</p>
            </>
        }
      </div>
    </aside>
    <main className="main-area">
      {
        isCreate
          ? <CreateAccount />
          : <Login />
      }
    </main>
  </div>;
}

export default AccountModalContent;

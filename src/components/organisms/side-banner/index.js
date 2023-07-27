import React from 'react';
import LogoCompraComigo from 'components/icons/LogoCompraComigo';

// loading the sass style fot the component
import './index.scss';

function SideBanner (props) {
  const {
    className = "",
    children,
    ...other
  } = props;

  return <div
    className={"organism__side-banner-container " + className}
    {...other}
  >
    <aside className="sidebar">
      <div className="decorative">
        <img src="/images/Ellipse1.svg" alt="" className="image-1"/>
        <img src="/images/Ellipse2.svg" alt="" className="image-2"/>
        <img src="/images/Ellipse3.svg" alt="" className="image-3"/>
        <img src="/images/Ellipse4.svg" alt="" className="image-4"/>
        <img src="/images/Ellipse5.svg" alt="" className="image-5"/>
        <img src="/images/Ellipse6.svg" alt="" className="image-6"/>
        <img src="/images/texture.png" alt="" id='texture'/>
      </div>
      <div className="logo-container">
        <LogoCompraComigo />
      </div>
      <div className="text-container">
        <h3>Bem-vindo ao <br/>Compra Comigo</h3>
        <p>Participe da plataforma que junta compradores <br/> e fornecedores no mesmo canal.</p>
      </div>
    </aside>

    {children}
  </div>;
}

export default SideBanner;

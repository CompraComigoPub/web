import React from 'react';
import Header from '../';

import './styles.scss';

export default {
  title: 'Molecules/Header'
};

function HeaderEl () {

  const menuList = [
    {
      label: "Sobre",
      url: "/#about"
    },
    {
      label: "Clientes e Parceiros",
      url: "/#partners"
    }
  ];

  return <div style={{height: '100%'}}>
    <div className="molecule__header-el-container">
      <Header menuList={menuList} />
    </div>
  </div>;
}

export {
  HeaderEl as Header
};

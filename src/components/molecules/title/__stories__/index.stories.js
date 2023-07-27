import React from 'react';
import Title from '../';

import './styles.scss';

export default {
  title: 'Molecules/Title'
};

function TitleEl () {
  return <div style={{height: '100%'}}>
    <h3>Title</h3>
    <div className="molecule__title-el-container">
      <Title dataType="big" dataSubtitle="Insira uma nova intenção de compra" >Cadastrar nova compra</Title>
    </div>
  </div>;
}

export function TitleMedium () {
  return <div style={{height: '100%'}}>
    <h3>Title</h3>
    <div className="molecule__title-el-container">
      <Title dataType="medium" dataSubtitle="Descreva as características dos produtos selecionados" >Características</Title>
    </div>
  </div>;
}

export {
  TitleEl as Title
};

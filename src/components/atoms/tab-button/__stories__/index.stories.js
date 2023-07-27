import React from 'react';
import TabButton from '../';

import './styles.scss';

export default {
  title: 'Atoms/TabButton'
};

function click() {
  alert("Click!");
}

function TabButtonEl () {
  return <div style={{height: '100%'}}>
    <h3>Tab Button</h3>
    <div className="atom__tab-button-el-container">
      <TabButton id="x" label="Visão Geral" onClick={click} selected="true" />
      <TabButton id="y" label="Participantes" onClick={click} />
    </div>
  </div>;
}

export {
  TabButtonEl as TabButton
};

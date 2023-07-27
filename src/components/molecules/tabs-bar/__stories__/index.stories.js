import React from 'react';
import TabsBar from '../';

import './styles.scss';

export default {
  title: 'Molecules/TabsBar'
};

const tabs = [
  {id: "Tab_Id1", label: "VISÃO GERAL"},
  {id: "Tab_Id2", label: "PARTICIPANTES"},
  {id: "Tab_Id3", label: "DOCUMENTOS"},
  {id: "Tab_Id4", label: "ATIVIDADES"},
];


function TabsBarEl () {
  return <div style={{height: '100%'}} className="tabs-bar-el-container-bg">
    <h3>Tabs Bar</h3>
    <div className="molecule__tabs-bar-el-container">
      <TabsBar tabs={tabs} />
    </div>
  </div>;
}

export {
  TabsBarEl as TabsBar
};

import React from 'react';
import SideBar from '../';

import './styles.scss';

export default {
  title: 'Organisms/SideBar'
};

function SideBarEl () {
  return <div style={{height: '100%'}}>
    <h3>side bar</h3>
    <div className="organism__side-bar-el-container">
      <SideBar />
    </div>
  </div>;
}

export {
  SideBarEl as SideBar
};

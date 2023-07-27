import React from 'react';
import MyNetwork from '../';

import './styles.scss';

const def = {
  title: 'Pages/MyNetwork'
};
export default def;

function MyNetworkEl () {
  return <div style={{height: '100%'}}>
    <div className="page__my-network-el-container">
      <MyNetwork />
    </div>
  </div>;
}

export {
  MyNetworkEl as MyNetwork
};

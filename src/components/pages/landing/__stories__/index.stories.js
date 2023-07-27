import React from 'react';
import Landing from '..';

import './styles.scss';

const def = {
  title: 'Pages/Home'
};
export default def;

function HomeEl () {
  return <div style={{height: '100%'}}>
    <div className="page__home-el-container">
      <Landing />
    </div>
  </div>;
}

export {
  HomeEl as Home
};

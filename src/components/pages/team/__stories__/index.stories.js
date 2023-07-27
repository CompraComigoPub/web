import React from 'react';
import Team from '../';

import './styles.scss';

const def = {
  title: 'Pages/Team'
};
export default def;

function TeamEl () {
  return <div style={{height: '100%'}}>
    <div className="page__team-el-container">
      <Team />
    </div>
  </div>;
}

export {
  TeamEl as Team
};

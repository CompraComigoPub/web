import React from 'react';
import Enter from '../';

import './styles.scss';

const def = {
  title: 'Pages/Enter'
};
export default def;

function EnterEl () {
  return <div style={{height: '100%'}}>
    <div className="page__enter-el-container">
      <Enter />
    </div>
  </div>;
}

export {
  EnterEl as Enter
};

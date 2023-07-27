import React from 'react';
import ProgressBar from '../';

import './styles.scss';

export default {
  title: 'Atoms/ProgressBar'
};

function ProgressBarEl() {
  return <div style={{ height: '100%' }}>
    <h3>Progress Bar</h3>
    <div className="atom__progress-bar-el-container">
      <ProgressBar
        max={200}
        current={60} />
    </div>
  </div>;
}
export function ProgressBarWithLabel() {
  return <div style={{ height: '100%' }}>
    <h3>Progress Bar</h3>
    <div className="atom__progress-bar-el-container">
      <ProgressBar
        label=" dias restantes"
        max={100}
        current={30} />
    </div>
  </div>;
}

export {
  ProgressBarEl as ProgressBar
};

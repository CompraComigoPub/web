import React from 'react';
import JustTestingIt from '../';

import './styles.scss';

export default {
  title: 'Molecules/JustTestingIt'
};

function JustTestingItEl () {
  return <div style={{height: '100%'}}>
    <h3>Just testing it</h3>
    <div className="molecule__just-testing-it-el-container">
      <JustTestingIt />
    </div>
  </div>;
}

export {
  JustTestingItEl as JustTestingIt
};

import React from 'react';
import TestingItAgain from '../';

import './styles.scss';

export default {
  title: 'Atoms/TestingItAgain'
};

function TestingItAgainEl () {
  return <div style={{height: '100%'}}>
    <h3>testing it again</h3>
    <div className="atom__testing-it-again-el-container">
      <TestingItAgain />
    </div>
  </div>;
}

export {
  TestingItAgainEl as TestingItAgain
};

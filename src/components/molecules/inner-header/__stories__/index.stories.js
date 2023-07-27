import React from 'react';
import InnerHeader from '../';

import './styles.scss';

export default {
  title: 'Molecules/InnerHeader'
};

function InnerHeaderEl () {
  return <div style={{height: '100%'}}>
    <h3>Inner Header</h3>
    <div className="molecule__inner-header-el-container">
      <InnerHeader />
    </div>
  </div>;
}

export {
  InnerHeaderEl as InnerHeader
};

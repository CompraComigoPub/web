import React from 'react';
import Partners from '../';

import './styles.scss';

export default {
  title: 'Molecules/Partners'
};

function PartnersEl () {
  return <div style={{height: '100%'}}>
    <h3>Partners</h3>
    <div className="molecule__partners-el-container">
      <Partners />
    </div>
  </div>;
}

export {
  PartnersEl as Partners
};

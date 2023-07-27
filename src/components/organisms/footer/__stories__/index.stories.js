import React from 'react';
import Footer from '../';

import './styles.scss';

export default {
  title: 'Organisms/Footer'
};

function FooterEl () {
  return <div style={{height: '100%'}}>
    <h3>Footer</h3>
    <div className="organism__footer-el-container">
      <Footer />
    </div>
  </div>;
}

export {
  FooterEl as Footer
};

import React from 'react';
import SideBanner from '../';

import './styles.scss';

const def = {
  title: 'Organisms/SideBanner'
};
export default def;

function SideBannerEl () {
  return <div style={{height: '100%'}}>
    <div className="organism__side-banner-el-container">
      <SideBanner />
    </div>
  </div>;
}

export {
  SideBannerEl as SideBanner
};

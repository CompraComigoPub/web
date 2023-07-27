import React from 'react';
import IconLabel from '../';
import HomeIcon from '../../../icons/Home';

import './styles.scss';

export default {
  title: 'Atoms/IconLabel'
};

const iconHome = [ <HomeIcon /> ];

function IconLabelEl() {
  return <div style={{ height: '100%' }}>
    <h3>Icon Label</h3>
    <div className="atom__icon-label-el-container">
      <IconLabel> 54 empresas compraram</IconLabel>
    </div>
  </div>;
}
export function IconLabelHome() {
  return <div style={{ height: '100%' }}>
    <h3>Icon Label</h3>
    <div className="atom__icon-label-el-container">
      <IconLabel icon={iconHome}> Home Page</IconLabel>
    </div>
  </div>;
}

export {
  IconLabelEl as IconLabel
};

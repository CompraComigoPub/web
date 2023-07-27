import React from 'react';
import MenuItem from '../';

import './styles.scss';
import HomeIcon from '../../../icons/Home';

export default {
  title: 'Molecules/MenuItem'
};

function MenuItemEl() {
  return <div style={{ height: '100%' }}>
    <h3>menu item</h3>
    <div className="molecule__menu-item-el-container">
      <MenuItem icon={<HomeIcon />} badge={123}> Item </MenuItem>
    </div>
  </div>;
}
export function MenuItemSelected() {
  return <div style={{ height: '100%' }}>
    <h3>menu item</h3>
    <div className="molecule__menu-item-el-container">
      <MenuItem icon={<HomeIcon />} selected badge={123}> Item </MenuItem>
    </div>
  </div>;
}
export function MenuItemWithoutBadge() {
  return <div style={{ height: '100%' }}>
    <h3>menu item</h3>
    <div className="molecule__menu-item-el-container">
      <MenuItem icon={<HomeIcon />}> Item </MenuItem>
    </div>
  </div>;
}

export {
  MenuItemEl as MenuItem
};

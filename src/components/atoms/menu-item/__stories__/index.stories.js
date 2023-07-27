import React from 'react';
import MenuItem from '../';

import './styles.scss';

export default {
  title: 'Atoms/MenuItem'
};

function MenuItemEl () {
  return <div style={{height: '100%'}}>
    <div className="atom__menu-item-el-container">
      <MenuItem>
        Sobre
      </MenuItem>
    </div>
  </div>;
}

export function MenuItemWithBiggerText () {
  return <div style={{height: '100%'}}>
    <div className="atom__menu-item-el-container">
      <MenuItem>
        Clientes e Parceiros
      </MenuItem>
    </div>
  </div>;
}

export function MenuItemWithBiggerTextAndSelected () {
  return <div style={{height: '100%'}}>
    <div className="atom__menu-item-el-container">
      <MenuItem selected>
        Clientes e Parceiros
      </MenuItem>
    </div>
  </div>;
}

export {
  MenuItemEl as MenuItem
};

import React from 'react';
import Checkbox from '../';

import './styles.scss';

export default {
  title: 'Atoms/Checkbox'
};

function CheckboxEl () {
  return <div style={{height: '100%'}}>
    <h3>checkbox</h3>
    <div className="atom__checkbox-el-container">
      <Checkbox />
    </div>
  </div>;
}
export function CheckboxChecked () {
  return <div style={{height: '100%'}}>
    <h3>checkbox</h3>
    <div className="atom__checkbox-el-container">
      <Checkbox checked/>
    </div>
  </div>;
}
export function CheckboxDisabled () {
  return <div style={{height: '100%'}}>
    <h3>checkbox</h3>
    <div className="atom__checkbox-el-container">
      <Checkbox disabled/>
    </div>
  </div>;
}

export {
  CheckboxEl as Checkbox
};

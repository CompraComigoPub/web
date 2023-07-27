import React from 'react';
import RadioButton from '../';

import './styles.scss';

export default {
  title: 'Atoms/RadioButton'
};

function RadioButtonEl () {
  return <div style={{height: '100%'}}>
    <h3>radio button</h3>
    <div className="atom__radio-button-el-container">
      <RadioButton checked />
    </div>
  </div>;
}
export function RadioButtonNotCheked () {
  return <div style={{height: '100%'}}>
    <h3>radio button</h3>
    <div className="atom__radio-button-el-container">
      <RadioButton/>
    </div>
  </div>;
}
export function RadioButtonDisabled () {
  return <div style={{height: '100%'}}>
    <h3>radio button</h3>
    <div className="atom__radio-button-el-container">
      <RadioButton disabled/>
    </div>
  </div>;
}


export {
  RadioButtonEl as RadioButton
};

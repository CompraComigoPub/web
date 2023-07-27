import React from 'react';
import InputSet from '../';

import './styles.scss';

const def = {
  title: 'Molecules/InputSet'
};
export default def;

function InputSetEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__input-set-el-container">
      <InputSet />
    </div>
  </div>;
}

export {
  InputSetEl as InputSet
};

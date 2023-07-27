import React from 'react';
import Characteristics from '../';

import './styles.scss';

const def = {
  title: 'Molecules/Characteristics'
};
export default def;

function CharacteristicsEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__characteristics-el-container">
      <Characteristics />
    </div>
  </div>;
}

export {
  CharacteristicsEl as Characteristics
};

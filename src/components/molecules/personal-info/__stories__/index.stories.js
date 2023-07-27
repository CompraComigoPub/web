import React from 'react';
import PersonalInfo from '../';

import './styles.scss';

const def = {
  title: 'Molecules/PersonalInfo'
};
export default def;

function PersonalInfoEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__personal-info-el-container">
      <PersonalInfo />
    </div>
  </div>;
}

export {
  PersonalInfoEl as PersonalInfo
};

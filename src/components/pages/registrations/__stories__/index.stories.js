import React from 'react';
import Registrations from '../';

import './styles.scss';

const def = {
  title: 'Pages/Registrations'
};
export default def;

function RegistrationsEl () {
  return <div style={{height: '100%'}}>
    <div className="page__registrations-el-container">
      <Registrations />
    </div>
  </div>;
}

export {
  RegistrationsEl as Registrations
};

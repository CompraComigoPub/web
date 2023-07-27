import React from 'react';
import WelcomeCard from '../';

import './styles.scss';

export default {
  title: 'Molecules/WelcomeCard'
};

function WelcomeCardEl() {
  return <div style={{ height: '100%' }}>
    <h3>welcome card</h3>
    <div className="molecule__welcome-card-el-container">
      <WelcomeCard
        onClick
        name="Heloísa" />
    </div>
  </div>;
}
export function WelcomeCardWithoutButton() {
  return <div style={{ height: '100%' }}>
    <h3>welcome card</h3>
    <div className="molecule__welcome-card-el-container">
      <WelcomeCard
        name="Heloísa" />
    </div>
  </div>;
}

export {
  WelcomeCardEl as WelcomeCard
};

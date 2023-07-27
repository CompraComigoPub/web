import React from 'react';
import Hero from '../';

import './styles.scss';

export default {
  title: 'Molecules/Hero'
};

function HeroEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__hero-el-container">
      <Hero />
    </div>
  </div>;
}

export {
  HeroEl as Hero
};

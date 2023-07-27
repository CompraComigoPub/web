import React from 'react';
import Carousel from '../';

import './styles.scss';

export default {
  title: 'Organisms/Carousel'
};

function CarouselEl () {
  return <div style={{height: '100%'}}>
    <h3>Carousel</h3>
    <div className="organism__carousel-el-container">
      <Carousel />
    </div>
  </div>;
}

export {
  CarouselEl as Carousel
};

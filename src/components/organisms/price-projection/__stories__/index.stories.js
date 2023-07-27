import React from 'react';
import PriceProjection from '../';

import './styles.scss';

const def = {
  title: 'Organisms/PriceProjection'
};
export default def;

function PriceProjectionEl () {
  return <div style={{height: '100%'}}>
    <div className="organism__price-projection-el-container">
      <PriceProjection />
    </div>
  </div>;
}

export {
  PriceProjectionEl as PriceProjection
};

import React from 'react';
import Button from '../';

import './styles.scss';

export default {
  title: 'Atoms/Button'
};

function ButtonEl () {
  return <div style={{height: '100%'}}>
    <h3>Button</h3>
    <div className="atom__button-el-container">
      <Button />
    </div>
  </div>;
}

export {
  ButtonEl as Button
};

import React from 'react';
import ItemsList from '../';

import './styles.scss';

const def = {
  title: 'Organisms/ItemsList'
};
export default def;

function ItemsListEl () {
  return <div style={{height: '100%'}}>
    <div className="organism__items-list-el-container">
      <ItemsList />
    </div>
  </div>;
}

export {
  ItemsListEl as ItemsList
};

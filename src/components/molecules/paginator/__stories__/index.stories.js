import React from 'react';
import Paginator from '../';

import './styles.scss';

const def = {
  title: 'Molecules/Paginator'
};
export default def;

function PaginatorEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__paginator-el-container">
      <Paginator />
    </div>
  </div>;
}

export {
  PaginatorEl as Paginator
};

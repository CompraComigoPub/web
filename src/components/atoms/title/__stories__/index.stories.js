import React from 'react';
import Title from '../';

import './styles.scss';

export default {
  title: 'Atoms/Title'
};

function TitleEl () {
  return <div style={{height: '100%'}}>
    <h3>Title</h3>
    <div className="atom__title-el-container">
      <Title />
    </div>
  </div>;
}

export {
  TitleEl as Title
};

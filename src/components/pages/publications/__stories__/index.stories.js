import React from 'react';
import Publications from '../';

import './styles.scss';

const def = {
  title: 'Pages/Publications'
};
export default def;

function PublicationsEl () {
  return <div style={{height: '100%'}}>
    <div className="page__publications-el-container">
      <Publications />
    </div>
  </div>;
}

export {
  PublicationsEl as Publications
};

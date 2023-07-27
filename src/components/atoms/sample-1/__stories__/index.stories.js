import React from 'react';
import Sample1 from '..';

import './styles.scss';

export default {
  title: 'Atoms/Sample1'
};

function Sample1El () {
  return <div style={{height: '100%'}}>
    <h3>Sample 1</h3>
    <div className="atom__sample-1-el-container">
      <Sample1 />
    </div>
  </div>;
}

export {
  Sample1El as Sample1
};

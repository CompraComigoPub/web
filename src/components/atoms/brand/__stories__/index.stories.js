import React from 'react';
import Brand from '../';

import './styles.scss';

export default {
  title: 'Atoms/Brand'
};

function BrandGlobal() {
  return <div style={{ height: '100%' }}>
    <h3>brand</h3>
    <div className="atom__brand-el-container">
      <Brand color="brand-global"/>
    </div>
  </div>;
}
export function BrandUser1() {
  return <div style={{ height: '100%' }}>
    <h3>brand</h3>
    <div className="atom__brand-el-container">
      <Brand color={"brand-user1"} />
    </div>
  </div>;
}
export function BrandUser2() {
  return <div style={{ height: '100%' }}>
    <h3>brand</h3>
    <div className="atom__brand-el-container">
      <Brand color={"brand-user2"} />
    </div>
  </div>;
}

export {
  BrandGlobal as Brand
};

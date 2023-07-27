import React from 'react';
import DropZone from '../';

import './styles.scss';

export default {
  title: 'Atoms/DropZone'
};

function DropZoneEl () {
  return <div style={{height: '100%'}}>
    <h3>drop zone</h3>
    <div className="atom__drop-zone-el-container">
      <DropZone />
    </div>
  </div>;
}

export {
  DropZoneEl as DropZone
};

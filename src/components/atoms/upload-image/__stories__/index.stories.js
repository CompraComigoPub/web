import React from 'react';
import UploadImage from '../';

import './styles.scss';

const def = {
  title: 'Atoms/UploadImage'
};
export default def;

function UploadImageEl () {
  return <div style={{height: '100%'}}>
    <div className="atom__upload-image-el-container">
      <UploadImage />
    </div>
  </div>;
}

export {
  UploadImageEl as UploadImage
};

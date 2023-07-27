import React from 'react';
import UploadCompanyPhoto from '../';

import './styles.scss';

const def = {
  title: 'Atoms/UploadCompanyPhoto'
};
export default def;

function UploadCompanyPhotoEl () {
  return <div style={{height: '100%'}}>
    <div className="atom__upload-company-photo-el-container">
      <UploadCompanyPhoto />
    </div>
  </div>;
}

export {
  UploadCompanyPhotoEl as UploadCompanyPhoto
};

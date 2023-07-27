import React from 'react';
import FormPublish from '../';

import './styles.scss';

export default {
  title: 'Organisms/FormPublish'
};

function FormPublishEl () {
  return <div style={{height: '100%'}}>
    <h3>Form Publish</h3>
    <div className="organism__form-publish-el-container">
      <FormPublish />
    </div>
  </div>;
}

export {
  FormPublishEl as FormPublish
};

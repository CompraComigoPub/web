import React from 'react';
import AppStoreButton from '../';

import './styles.scss';

export default {
  title: 'Atoms/AppStoreButton'
};

function AppStoreButtonEl () {
  return <div style={{height: '100%'}}>
    <h3>App Store Button</h3>
    <div className="atom__app-store-button-el-container">
      <AppStoreButton />
    </div>
  </div>;
}

export {
  AppStoreButtonEl as AppStoreButton
};

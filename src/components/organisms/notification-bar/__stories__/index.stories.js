import React from 'react';
import NotificationBar from '../';

import './styles.scss';

export default {
  title: 'Organisms/NotificationBar'
};

function NotificationBarEl () {
  return <div style={{height: '100%'}}>
    <h3>notification bar</h3>
    <div className="organism__notification-bar-el-container">
      <NotificationBar />
    </div>
  </div>;
}

export {
  NotificationBarEl as NotificationBar
};

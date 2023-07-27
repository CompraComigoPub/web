import React from 'react';
import Notification from '../';
import CheckIcon from '../../../icons/Check';
import CheckRedIcon from '../../../icons/CheckRed';
import MessageIcon from '../../../icons/Message';

import './styles.scss';

export default {
  title: 'Molecules/Notification'
};

function NotificationEl() {
  return <div style={{ height: '100%' }}>
    <h3>notification</h3>
    <div className="molecule__notification-el-container">
      <Notification
        title={"Sua publicação foi publicada"}
        description={"A compra está disponível"}
        icon={<CheckIcon />} />
    </div>
  </div>;
}

export function NotificationSecondary() {
  return <div style={{ height: '100%' }}>
    <h3>notification</h3>
    <div className="molecule__notification-el-container">
      <Notification
        title={"Sua publicação foi publicada"}
        description={"A compra está disponível"}
        icon={<MessageIcon />}
        variant={"secondary"} />
    </div>
  </div>;
}

export function NotificationSucess() {
  return <div style={{ height: '100%' }}>
    <h3>notification</h3>
    <div className="molecule__notification-el-container">
      <Notification
        title={"Sua publicação foi publicada"}
        description={"A compra está disponível"}
        icon={<CheckIcon />}
        variant={"success"} />
    </div>
  </div>;
}
export function NotificationError() {
  return <div style={{ height: '100%' }}>
    <h3>notification</h3>
    <div className="molecule__notification-el-container">
      <Notification
        title={"Sua publicação foi reprovada"}
        description={"Infelizmente sua compra foi reprovada"}
        icon={<CheckRedIcon />}
        variant={"error"} />
    </div>
  </div>;
}

export {
  NotificationEl as Notification
};

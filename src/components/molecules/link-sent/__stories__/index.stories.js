import React from 'react';
import LinkSent from '../';

import './styles.scss';

const def = {
  title: 'Molecules/LinkSent'
};
export default def;

function LinkSentEl () {
  return <div style={{height: '100%'}}>
    <div className="molecule__link-sent-el-container">
      <LinkSent />
    </div>
  </div>;
}

export {
  LinkSentEl as LinkSent
};

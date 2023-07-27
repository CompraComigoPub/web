import React from 'react';
import GooglePlayButton from '../';

import './styles.scss';

export default {
  title: 'Atoms/GooglePlayButton'
};

function GooglePlayButtonEl () {
  return <div style={{height: '100%'}}>
    <h3>Google Play Button</h3>
    <div className="atom__google-play-button-el-container">
      <GooglePlayButton />
    </div>
  </div>;
}

export {
  GooglePlayButtonEl as GooglePlayButton
};

import React from 'react';
import Loader from '../';

import './styles.scss';

export default {
  title: 'Molecules/Loader',
  argTypes: {
  }
};

function LoaderEl () {
  // keep the `className="molecule__loader-el-container"` in the root element
  // for unit tests to pass, checking your story rendering process
  return <div style={{height: '100%'}} className="molecule__loader-el-container">
    <Loader>Loading the page Z</Loader>
  </div>;
}

export {
  LoaderEl as Loader
};

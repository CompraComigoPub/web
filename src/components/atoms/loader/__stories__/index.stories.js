import React from 'react';
import Loader from '../';

import './styles.scss';

export default {
  title: 'Atoms/Loader',
  argTypes: {
    // TODO: add your props here (reference: https://storybook.js.org/docs/react/essentials/controls#annotation)
  }
};

function LoaderEl () {
  // keep the `className="atom__loader-el-container"` in the root element
  // for unit tests to pass, checking your story rendering process
  return <div style={{height: '100%'}} className="atom__loader-el-container">
    <Loader>Loading the page X</Loader>
  </div>;
}

// LoaderEl.parameters = {
//   design: {
//     type: 'figma',
//     url: "add a url for the figma project here"
//   },
// };

export {
  LoaderEl as Loader
};

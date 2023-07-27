import React from 'react';

import Placeholder from '..';

import './styles.scss';

export default {
  title: 'Placeholders',
  // component: Styleguide,
};

function ImagePlaceholders() {
  return (
    <>
      <div className="placeholders-container images">
        <Placeholder type="image" />
        <Placeholder type="image" size={2} />
        <Placeholder type="image" size={3} />
        <Placeholder type="image" size={4} />
      </div>
      <div className="placeholders-container images">
        <Placeholder type="image" animated />
        <Placeholder type="image" size={2} animated />
        <Placeholder type="image" size={3} animated />
        <Placeholder type="image" size={4} animated />
      </div>
    </>
  );
}
function TextPlaceholders() {
  return (
    <>
      <div className="placeholders-container">
        <Placeholder />
        <Placeholder size={2} />
        <Placeholder size={3} />
        <Placeholder size={4} />
        <br />
        <br />
        <Placeholder multiple={10} animated />
      </div>
    </>
  );
}

function All() {
  return (
    <>
      <div className="placeholders-container">
        <Placeholder type="image" animated />
        <Placeholder multiple={4} animated />
        <Placeholder type="image" size={3} animated />
        <Placeholder multiple={5} animated />
      </div>
    </>
  );
}

export { ImagePlaceholders as Images, TextPlaceholders as Texts, All };

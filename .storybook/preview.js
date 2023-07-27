import React from 'react';

import { addParameters, addDecorator } from '@storybook/react';
import { jsxDecorator } from "storybook-addon-jsx";
import { withDesign } from 'storybook-addon-designs'
import { BrowserRouter as Router } from "react-router-dom";
import {
  Title, Subtitle, Description, Primary, Stories, ArgsTable, PRIMARY_STORY, // Props,
} from '@storybook/addon-docs/blocks';

import '!style-loader!css-loader!sass-loader!../src/utils/styles/_colors.scss';
import '!style-loader!css-loader!sass-loader!../src/utils/styles/reset.scss';

// import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.tsx
// configure(require.context('../src/components', true, /\.stories\.tsx?$/), module);

addDecorator(jsxDecorator);
addDecorator(withDesign);
addDecorator(Story => <Router><Story /></Router>);

addParameters({
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen',
  controls: {
    expanded: true,
    hideNoControlsWarning: true
  },
  jsx: {
    skip: 1
  },
  docs: {
    page: _ => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <ArgsTable story={PRIMARY_STORY} />
        <Primary />
        <Stories />
      </>
    ),
  }
});

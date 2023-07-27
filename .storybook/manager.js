import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

const darkTheme = {...themes.dark};
darkTheme.brandTitle = 'On2',
darkTheme.brandUrl = 'https://on2.dev',
darkTheme.brandImage = 'https://braziljs.live/images/supporter-logos/braziljs.live/on2.png',

addons.setConfig({
  theme: darkTheme
});

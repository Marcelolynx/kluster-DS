// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#262626',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'white',
  appContentBg: '#f4f4f4',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: '#1163FE',
  barBg: '#262626',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'COTIN Storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://efazenda.servicos.ms.gov.br/daecomm/Includes/images/logo-cotin.png',
  brandTarget: '_self',
});
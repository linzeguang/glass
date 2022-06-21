import { Theme } from '@emotion/react';
import { toAlpha } from './utils';

export const light: Theme = {
  palette: {
    toAlpha: toAlpha,
    primary: {
      main: '#2674FF',
      relative: '#fff',
    },
  },
};

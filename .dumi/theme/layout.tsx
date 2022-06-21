import { ThemeProvider } from '@emotion/react';
import Layout from 'dumi-theme-default/es/layout';
import React from 'react';
import { light, ResetCSS } from '../../src/Uikit';

export default (props) => (
  <>
    <ResetCSS />
    <Layout {...props}>
      <ThemeProvider theme={light} {...props} />
    </Layout>
  </>
);

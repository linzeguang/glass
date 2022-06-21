/*
 * @Author: 林泽广
 * @Date: 2022-06-17 11:08:20
 * @LastEditTime: 2022-06-17 11:33:43
 * @LastEditors: 林泽广
 * @Description:
 */
import { defineConfig } from 'dumi';
const repo = 'glass';

export default defineConfig({
  title: repo,
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,

  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
});

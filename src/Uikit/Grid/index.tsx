/*
 * @Author: 林泽广
 * @Date: 2022-06-15 17:23:35
 * @LastEditTime: 2022-06-17 18:33:40
 * @LastEditors: 林泽广
 * @Description: 弹性盒子组件
 */

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps as _GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';
import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  space,
} from 'styled-system';

export interface GridProps
  extends PositionProps,
    _GridProps,
    FlexboxProps,
    LayoutProps,
    SpaceProps,
    ColorProps,
    BackgroundProps,
    BorderProps {}

export const Grid = styled(motion.div)<GridProps>(
  compose(position, grid, flexbox, layout, space, color, background, border),
  {
    display: 'grid',
  },
);

/*
 * @Author: 林泽广
 * @Date: 2022-06-15 17:23:35
 * @LastEditTime: 2022-06-15 18:08:59
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
  layout,
  position,
  space,
} from 'styled-system';

export interface FlexProps
  extends PositionProps,
    FlexboxProps,
    LayoutProps,
    SpaceProps,
    ColorProps,
    BackgroundProps,
    BorderProps {}

export const Flex = styled(motion.div)<FlexProps>(
  compose(position, flexbox, layout, space, color, background, border),
  {
    display: 'flex',
  },
);

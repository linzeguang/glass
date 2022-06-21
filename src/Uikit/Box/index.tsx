import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type {
  BackgroundProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';
import { background, border, color, compose, layout, position, space } from 'styled-system';

export interface BoxProps
  extends PositionProps,
    LayoutProps,
    SpaceProps,
    ColorProps,
    BackgroundProps,
    BorderProps {}

export const Box = styled(motion.div)<BoxProps>(
  compose(position, layout, space, color, background, border),
);

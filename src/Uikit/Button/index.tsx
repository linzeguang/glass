import { css, PaletteKey } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type {
  BorderProps,
  ColorProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import {
  border,
  color,
  compose,
  layout,
  position,
  space,
  typography,
  variant,
} from 'styled-system';

export interface ButtonProps
  extends PositionProps,
    LayoutProps,
    SpaceProps,
    TypographyProps,
    ColorProps,
    BorderProps {
  variant?: 'contained' | 'outlined' | 'text' | 'link';
  color?: PaletteKey;
}

export const Button = styled(motion.button)<ButtonProps>(
  ({ theme }) =>
    variant({
      variants: {
        contained: css`
          color: ${theme.palette.primary.relative};
          background-color: ${theme.palette.primary.main};
        `,
        outlined: css`
          color: ${theme.palette.primary.main};
          border: 1px solid ${theme.palette.primary.main};
        `,
      },
    }),
  css`
    padding: 0.5em 1em;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
  `,
  compose(position, layout, space, typography, color, border),
);

Button.displayName = 'Button';

import type { Palette } from '@emotion/react';
import Color from 'color';

export const toAlpha: Palette['toAlpha'] = (color, alpha) => Color(color).alpha(alpha).toString();

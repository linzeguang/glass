export declare module '@emotion/react' {
  export interface PaletteColor {
    main: string;
    relative: string;
  }

  export interface Palette {
    primary: PaletteColor;
    // secondary: PaletteColor;
    toAlpha: (color: string, alpha: number) => string;
  }

  export type PaletteKey = keyof Omit<Palette, 'toAlpha'>;

  export interface Theme {
    palette: Palette;
  }
}

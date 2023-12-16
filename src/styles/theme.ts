import { Theme } from '@emotion/react';

export const baseColors = {
  black: '#222',
  white: '#fCfCff',
  deepGrey: '#797979',
};
export type ColorTypes = typeof baseColors;

export const fontSizes = {
  p: '17px',
  mobile_p: '16px',

  desc: '1.25rem',
  refer: '0.75rem',

  h1: '2.25rem',
  mobile_h1: '1.875rem',
  h2: '1.625rem',
  h3: '1.25rem',

  small: '14px',
  medium: '16px',
  title: '42px',
  subtitle: '20px',
};
export type FontSizeTypes = typeof fontSizes;

export const breakpoints = {
  desktopLarge: '1200px',
  desktop: '1024px',
  tablet: '768px',
  mobile: '576px',
};
export type BreakpointTypes = typeof breakpoints;

const theme: Theme = {
  colors: baseColors,
  fontSizes,
  breakpoints,
};
export default theme;

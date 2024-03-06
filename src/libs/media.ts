import { breakpoints } from '@/styles/theme';

const generateMediaQuery = (breakpoint: string, scaling: 'min' | 'max' = 'min') =>
  `@media screen and (${scaling}-width: ${breakpoint})`;

const generateContainerQuery = (breakpoint: string, scaling: 'min' | 'max' = 'min', containerName?: string) =>
  `@container ${containerName} (${scaling}-width: ${breakpoint})`;

export const minMedia = {
  mobile: generateMediaQuery(breakpoints.mobile),
  tablet: generateMediaQuery(breakpoints.tablet),
  desktop: generateMediaQuery(breakpoints.desktop),
  desktopLarge: generateMediaQuery(breakpoints.desktopLarge),
};

export const maxMedia = {
  mobile: generateMediaQuery(breakpoints.mobile, 'max'),
  tablet: generateMediaQuery(breakpoints.tablet, 'max'),
  desktop: generateMediaQuery(breakpoints.desktop, 'max'),
  desktopLarge: generateMediaQuery(breakpoints.desktopLarge, 'max'),
};

export const minContainer = {
  mobile: (containerName?: string) => generateContainerQuery(breakpoints.mobile, 'min', containerName),
  tablet: (containerName?: string) => generateContainerQuery(breakpoints.tablet, 'min', containerName),
  desktop: (containerName?: string) => generateContainerQuery(breakpoints.desktop, 'min', containerName),
  desktopLarge: (containerName?: string) => generateContainerQuery(breakpoints.desktopLarge, 'min', containerName),
};

export const maxContainer = {
  mobile: (containerName?: string) => generateContainerQuery(breakpoints.mobile, 'max', containerName),
  tablet: (containerName?: string) => generateContainerQuery(breakpoints.tablet, 'max', containerName),
  desktop: (containerName?: string) => generateContainerQuery(breakpoints.desktop, 'max', containerName),
  desktopLarge: (containerName?: string) => generateContainerQuery(breakpoints.desktopLarge, 'max', containerName),
};

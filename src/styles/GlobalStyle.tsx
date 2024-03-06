import { Global, Theme, css } from '@emotion/react';

import { cssCustomProperties } from '@/utils/css';

import theme from './theme';

const GlobalCustomStyle = (theme: Theme) => css`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  :root {
    ${cssCustomProperties(theme.colors)}
  }

  body {
    margin: 0px;
    font-family:
      'Barlow',
      sans-serif,
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Helvetica,
      Arial,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  ::selection {
    background: ${theme.colors.primary};
    color: white;
  }
  ::-moz-selection {
    background: ${theme.colors.primary};
    color: white;
  }

  /* &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.gray['300']};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
    background-clip: padding-box;
  } */
`;

export default function GlobalStyle() {
  return <Global styles={GlobalCustomStyle(theme)} />;
}

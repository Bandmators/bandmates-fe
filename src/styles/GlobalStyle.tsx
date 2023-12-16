import { Global, Theme, css } from '@emotion/react';

import theme from './theme';

const GlobalCustomStyle = (theme: Theme) => css`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  :root {
  }

  body {
    margin: 0px;
  }

  ::selection {
    background: ${theme.colors.primary};
    color: white;
  }
  ::-moz-selection {
    background: ${theme.colors.primary};
    color: white;
  }
`;

export default function GlobalStyle() {
  return <Global styles={GlobalCustomStyle(theme)} />;
}

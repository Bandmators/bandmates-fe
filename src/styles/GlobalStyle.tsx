import { Theme, css } from '@emotion/react';

const GlobalStyle = (theme: Theme) => css`
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

export default GlobalStyle;

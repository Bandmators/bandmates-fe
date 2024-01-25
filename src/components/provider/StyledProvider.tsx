import GlobalStyle from '@/styles/GlobalStyle.tsx';
import theme from '@/styles/theme.ts';
import { ThemeProvider } from '@emotion/react';
import { BMatesProvider } from 'bmates-ui';
import { PropsWithChildren } from 'react';

const StyledProvider = ({ children }: PropsWithChildren) => {
  return (
    <BMatesProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </BMatesProvider>
  );
};
export default StyledProvider;

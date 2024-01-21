import { RenderOptions, render } from '@testing-library/react';
// import { MemoryRouter } from "react-router-dom"
import { ReactElement } from 'react';
import { MemoryRouter, Routes } from 'react-router-dom';

import StyledProvider from '@/components/provider/StyledProvider';

// import {
//     QueryClient,
//     QueryClientProvider,
//     QueryClientConfig,
// } from "@tanstack/react-query"

// export function setupQueryClient(config?: QueryClientConfig | undefined) {
//     if (!config) {
//         return new QueryClient({
//             defaultOptions: {
//                 queries: {
//                     retry: false,
//                 },
//             },
//         })
//     }
//     return new QueryClient(config)
// }

export const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <StyledProvider>
        {/* <QueryClientProvider client={options?.queryClient}> */}
        {children}
        {/* </QueryClientProvider> */}
      </StyledProvider>
    );
  };

  return render(ui, { wrapper: Wrapper, ...options });
};

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';

export { customRender as render };

export const MockRouter = ({ initialPath = '/', children }: { initialPath: string; children: React.ReactNode }) => {
  return (
    <MemoryRouter initialEntries={[initialPath]} initialIndex={0}>
      <Routes>{children}</Routes>
    </MemoryRouter>
  );
};

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import QueryProvider from '@/components/Provider/QueryProvider.tsx';
import StyledProvider from '@/components/Provider/StyledProvider.tsx';

import { router } from '@/routes/index.tsx';

async function enableMocking() {
  if (!import.meta.env.DEV) {
    return;
  }

  const { worker } = await import('./mocks/browser.ts');

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <StyledProvider>
        <QueryProvider>
          <RouterProvider router={router} />
        </QueryProvider>
      </StyledProvider>
    </React.StrictMode>,
  );
});

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import StyledProvider from '@/components/provider/StyledProvider.tsx';

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
        <RouterProvider router={router} />
      </StyledProvider>
    </React.StrictMode>,
  );
});

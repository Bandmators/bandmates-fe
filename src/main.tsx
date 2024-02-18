import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import StyledProvider from '@/components/provider/StyledProvider.tsx';

import Auth from './pages/auth';
import Dashboard from './pages/dashboard';

// import App from './App.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/auth',
    element: <Auth />,
  },
]);

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

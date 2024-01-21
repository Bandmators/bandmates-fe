import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import StyledProvider from '@/components/provider/StyledProvider.tsx';

import App from './App.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/testsuccess',
    element: <p>End</p>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledProvider>
      <RouterProvider router={router} />
    </StyledProvider>
  </React.StrictMode>,
);

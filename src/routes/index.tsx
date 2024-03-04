import { createBrowserRouter } from 'react-router-dom';

import Auth from '@/pages/AuthPage';
import Dashboard from '@/pages/DashboardPage';

export const PATH = {
  ROOT: '/',
  AUTH: {
    SIGNIN: '/auth/signin',
    SIGNUP: '/auth/signup',
  },
  // USER: '/:userId',
  // WORK: '/:userId/:title',
};

export const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <Dashboard />,
  },
  {
    path: PATH.AUTH.SIGNIN,
    element: <Auth />,
  },
]);

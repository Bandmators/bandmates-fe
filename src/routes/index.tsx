import { createBrowserRouter } from 'react-router-dom';

import SigninPage from '@/pages/AuthPage/SigninPage';
import SignupPage from '@/pages/AuthPage/SignupPage';
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
    element: <SigninPage />,
  },
  {
    path: PATH.AUTH.SIGNUP,
    element: <SignupPage />,
  },
]);

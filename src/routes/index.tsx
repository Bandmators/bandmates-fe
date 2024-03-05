import { createBrowserRouter } from 'react-router-dom';

import SigninPage from '@/pages/AuthPage/SigninPage';
import SignupPage from '@/pages/AuthPage/SignupPage';
import Dashboard from '@/pages/DashboardPage';
import WorkPage from '@/pages/WorkPage';

export const PATH = {
  ROOT: '/',

  AUTH: {
    SIGNIN: '/auth/signin',
    SIGNUP: '/auth/signup',
  },

  USER: '/:userId',

  WORK: '/:userId/:title',
  _WORK: {
    EDIT: 'edit',
    SETTING: 'setting',
  },
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
  {
    path: PATH.WORK,
    element: <WorkPage />,
    children: [
      {
        path: 'edit',
        element: <p>Edit</p>,
      },
      {
        path: 'setting',
        element: <p>dsf</p>,
      },
    ],
  },
  {
    path: PATH.USER,
    element: <></>,
  },
  {
    path: '/*',
    element: <div> Not Found </div>,
  },
]);

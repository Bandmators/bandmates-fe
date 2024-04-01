import { createBrowserRouter } from 'react-router-dom';

import SigninPage from '@/pages/AuthPage/SigninPage';
import SignupPage from '@/pages/AuthPage/SignupPage';
import Dashboard from '@/pages/DashboardPage';
import ProfilePage from '@/pages/ProfilePage';
import SettingsPage from '@/pages/SettingsPage';
import WorkPage from '@/pages/WorkPage';
import WorkContainer from '@/pages/WorkPage/WorkContainer';

import { PATH } from './path';

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
        path: '',
        element: <WorkContainer />,
      },
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
    element: <ProfilePage />,
  },
  {
    path: PATH.SETTING,
    element: <SettingsPage />,
  },
  {
    path: '/*',
    element: <div> Not Found </div>,
  },
]);

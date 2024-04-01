import { createBrowserRouter } from 'react-router-dom';

import SigninPage from '@/pages/AuthPage/SigninPage';
import SignupPage from '@/pages/AuthPage/SignupPage';
import Dashboard from '@/pages/DashboardPage';
import ProfilePage from '@/pages/ProfilePage';
import SettingsPage from '@/pages/SettingsPage';
import SettingPasswordContainer from '@/pages/SettingsPage/SettingPasswordContainer';
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
        path: PATH._WORK.EDIT,
        element: <p>Edit</p>,
      },
      {
        path: PATH._WORK.SETTING,
        element: <p>dsf</p>,
      },
    ],
  },
  {
    path: PATH.USER,
    element: <ProfilePage />,
  },
  {
    path: PATH.SETTINGS,
    element: <SettingsPage />,
    children: [
      {
        path: PATH._SETTINGS.PROFILE,
        element: <p>profile</p>,
      },
      {
        path: PATH._SETTINGS.NOTIFICATION,
        element: <p>notification</p>,
      },
      {
        path: PATH._SETTINGS.PASSWORD,
        element: <SettingPasswordContainer />,
      },
      {
        path: PATH._SETTINGS.ACCOUNT,
        element: <p>account</p>,
      },
    ],
  },
  {
    path: '/*',
    element: <div> Not Found </div>,
  },
]);

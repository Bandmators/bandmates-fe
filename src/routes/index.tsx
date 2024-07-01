import { createBrowserRouter } from 'react-router-dom';

import SigninPage from '@/pages/AuthPage/SigninPage';
import SignupPage from '@/pages/AuthPage/SignupPage';
import Dashboard from '@/pages/DashboardPage';
import ProfilePage from '@/pages/ProfilePage';
import SettingsPage from '@/pages/SettingsPage';
import SettingAccountContainer from '@/pages/SettingsPage/SettingAccountContainer';
import SettingNotificationContainer from '@/pages/SettingsPage/SettingNotificationContainer';
import SettingPasswordContainer from '@/pages/SettingsPage/SettingPasswordContainer';
import WorkPage from '@/pages/WorkPage';
import WorkEditPage from '@/pages/WorkPage/WorkEditPage';
import WorkHistoryPage from '@/pages/WorkPage/WorkHistoryPage';
import WorkOverviewPage from '@/pages/WorkPage/WorkOverviewPage';
import WorkSettingPage from '@/pages/WorkPage/WorkSettingPage';

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
        path: PATH._WORK.OVERVIEW,
        element: <WorkOverviewPage />,
      },
      {
        path: PATH._WORK.EDIT,
        element: <WorkEditPage />,
      },
      {
        path: PATH._WORK.HISTORY,
        element: <WorkHistoryPage />,
      },
      {
        path: PATH._WORK.SETTING,
        element: <WorkSettingPage />,
        children: [
          {
            path: PATH._WORK._SETTING.GENERAL,
            element: <p>ge</p>,
          },
          {
            path: PATH._WORK._SETTING.COLLABORATORS,
            element: <p>co</p>,
          },
        ],
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
        element: <SettingNotificationContainer />,
      },
      {
        path: PATH._SETTINGS.PASSWORD,
        element: <SettingPasswordContainer />,
      },
      {
        path: PATH._SETTINGS.ACCOUNT,
        element: <SettingAccountContainer />,
      },
    ],
  },
  {
    path: '/*',
    element: <div> Not Found </div>,
  },
]);

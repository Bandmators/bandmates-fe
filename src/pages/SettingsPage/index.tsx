import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import SettingGrid from '@/components/Grid/SettingGrid';
import { useSidebarStore } from '@/stores/sidebar';

import { ReactComponent as NotificationIcon } from '@/assets/icons/notification.svg';
import { ReactComponent as SecretIcon } from '@/assets/icons/secret.svg';
import { ReactComponent as SettingIcon } from '@/assets/icons/settings.svg';
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg';
import { PATH } from '@/routes/path';

import DashboardLayout from '../Layout/DashboardLayout';
import * as S from './style';

type FilterMenuType = {
  name: string;
  path: string;
  icon: JSX.Element;
};

const filterMenus: FilterMenuType[] = [
  {
    name: 'Profile',
    path: PATH._SETTINGS.PROFILE,
    icon: <UserIcon strokeWidth={1} height={18} className="icon icon-md" />,
  },
  {
    name: 'Notification',
    path: PATH._SETTINGS.NOTIFICATION,
    icon: <NotificationIcon strokeWidth={1} height={18} className="icon icon-md" />,
  },
  {
    name: 'Password',
    path: PATH._SETTINGS.PASSWORD,
    icon: <SecretIcon strokeWidth={1} height={18} className="icon icon-md" />,
  },
  {
    name: 'Account',
    path: PATH._SETTINGS.ACCOUNT,
    icon: <SettingIcon strokeWidth={1} height={18} className="icon icon-md" />,
  },
];

const SettingsPage = () => {
  const { pathname } = useLocation();
  const decodedPathname = decodeURIComponent(pathname);
  const setIsOpen = useSidebarStore(state => state.setIsOpen);

  React.useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const isSelectedMenu = (page: string) => page === decodedPathname.replace(PATH.SETTINGS, '').replace('/', '');

  return (
    <DashboardLayout>
      <DashboardLayout.Container fill>
        <SettingGrid.Menu>
          <S.SettingMenuList>
            {filterMenus.map(m => (
              <S.SettingMenu key={m.name} active={isSelectedMenu(m.path)}>
                <Link to={m.path} className="menu-link">
                  {m.icon} {m.name}
                </Link>
              </S.SettingMenu>
            ))}
          </S.SettingMenuList>
        </SettingGrid.Menu>

        <SettingGrid.Content>
          <Outlet />
        </SettingGrid.Content>
      </DashboardLayout.Container>
    </DashboardLayout>
  );
};
export default SettingsPage;

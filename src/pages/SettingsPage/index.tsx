import { css } from '@emotion/react';
import styled from '@emotion/styled';
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
      <DashboardLayout.Container isFill>
        <SettingGrid.Menu>
          <SettingMenuList>
            {filterMenus.map(m => (
              <SettingMenu key={m.name} active={isSelectedMenu(m.path)}>
                <Link to={m.path} className="menu-link">
                  {m.icon} {m.name}
                </Link>
              </SettingMenu>
            ))}
          </SettingMenuList>
        </SettingGrid.Menu>

        <SettingGrid.Content>
          <Outlet />
        </SettingGrid.Content>
      </DashboardLayout.Container>
    </DashboardLayout>
  );
};
export default SettingsPage;

const SettingMenuList = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
`;
const SettingMenu = styled.li<{ active?: boolean }>`
  padding-left: 1rem;
  margin-bottom: 1.5rem;
  font-weight: 300;
  border-left: 2px solid transparent;
  ${props =>
    props.active
      ? css`
          border-left: 2px solid var(--primary);
          font-weight: 600;
          color: var(--primary);
          .icon {
            stroke-width: 2;
          }
        `
      : css`
          &:hover {
            font-weight: 400;
            .icon {
              stroke-width: 1.5;
            }
          }
        `}
  .menu-link {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { minContainer } from '@/libs/media';
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
  const setIsOpen = useSidebarStore(state => state.setIsOpen);

  React.useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const isSelectedMenu = (page: string) => page === pathname.replace(PATH.SETTINGS, '').replace('/', '');

  return (
    <DashboardLayout>
      <DashboardLayout.Container isFill>
        <ContainerMain>
          <h2>Settings</h2>
          <SettingMenuList>
            {filterMenus.map(m => (
              <SettingMenu key={m.name} active={isSelectedMenu(m.path)}>
                <Link to={m.path} className="menu-link">
                  {m.icon} {m.name}
                </Link>
              </SettingMenu>
            ))}
          </SettingMenuList>
        </ContainerMain>

        <ContainerSub>
          <Outlet />
        </ContainerSub>
      </DashboardLayout.Container>
    </DashboardLayout>
  );
};
export default SettingsPage;

const ContainerMain = styled.div`
  margin-left: 0px;
  flex: 0 0 auto;
  min-width: 100%;
  padding: 1rem;
  ${minContainer.tablet('dashboard-container')} {
    flex: 0 0 14rem;
    min-width: 12rem;
  }
  ${minContainer.desktop('dashboard-container')} {
    flex: 0 0 18rem;
    min-width: 18rem;
  }
  h2 {
    margin-top: 0px;
  }
`;
const ContainerSub = styled.div`
  width: 100%;
  padding: 1rem;
  ${minContainer.tablet('dashboard-container')} {
    width: calc(100% - 16rem);
    margin-left: auto;
  }
  ${minContainer.desktop('dashboard-container')} {
    width: calc(100% - 20rem);
    margin-left: auto;
  }
`;

const SettingMenuList = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
`;
const SettingMenu = styled.li<{ active?: boolean }>`
  padding-left: 1rem;
  margin-top: 1.5rem;
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

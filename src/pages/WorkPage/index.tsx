import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { ReactComponent as HistoryIcon } from '@/assets/icons/clock.svg';
import { ReactComponent as EditIcon } from '@/assets/icons/edit.svg';
import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg';
import { ReactComponent as SettingIcon } from '@/assets/icons/settings.svg';
import DashboardLayout from '@/pages/Layout/DashboardLayout';
import { PATH } from '@/routes/path';

type MenuType = {
  href: string;
  title: 'Overview' | 'Edit' | 'History' | 'Setting';
  icon: React.ReactNode;
};

const WorkPage = () => {
  const { pathname } = useLocation();
  const { userId, title } = useParams();
  const decodedPathname = decodeURIComponent(pathname);
  const menus: MenuType[] = [
    { href: `/${userId}/${title}`, title: 'Overview', icon: <HomeIcon /> },
    { href: `/${userId}/${title}/${PATH._WORK.EDIT}`, title: 'Edit', icon: <EditIcon /> },
    { href: `/${userId}/${title}/${PATH._WORK.HISTORY}`, title: 'History', icon: <HistoryIcon /> },
    { href: `/${userId}/${title}/${PATH._WORK.SETTING}`, title: 'Setting', icon: <SettingIcon /> },
  ];

  const isActive = (menu: MenuType) =>
    menu.title === 'Overview' ? decodedPathname === menu.href : decodedPathname.startsWith(menu.href);

  return (
    <DashboardLayout>
      <WorkNavigation>
        <NavigationMenu>
          {menus.map(menu => (
            <NavigationMenuItem key={menu.title} active={isActive(menu)}>
              <Link to={menu.href}>
                {menu.icon} {menu.title}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenu>
      </WorkNavigation>
      <DashboardLayout.Container>
        <Outlet />
      </DashboardLayout.Container>
    </DashboardLayout>
  );
};
export default WorkPage;

const WorkNavigation = styled.nav`
  width: 100%;
  padding: 1rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray['400']};
`;
const NavigationMenu = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
const NavigationMenuItem = styled.li<{ active?: boolean }>`
  list-style: none;
  svg {
    stroke-width: 1;
    width: 1rem;
    height: 1rem;
    margin-right: 0.25rem;
  }
  a {
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray['100']};
    }
  }
  ${({ active }) =>
    active &&
    css`
      font-weight: 500;
      svg {
        stroke-width: 2;
      }
    `}
`;

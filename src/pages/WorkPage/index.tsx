import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import DashboardLayout from '@/components/layout/DashboardLayout';

import { ReactComponent as HistoryIcon } from '@/assets/icons/clock.svg';
import { ReactComponent as EditIcon } from '@/assets/icons/edit.svg';
import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg';
import { ReactComponent as SettingIcon } from '@/assets/icons/settings.svg';

const WorkPage = () => {
  const { userId, title } = useParams();
  const { pathname } = useLocation();
  const decodedPathname = decodeURIComponent(pathname);
  const menus = [
    { href: `/${userId}/${title}`, title: 'Overview', icon: <HomeIcon height="1rem" /> },
    { href: `/${userId}/${title}/edit`, title: 'Edit', icon: <EditIcon height="1rem" /> },
    { href: `/${userId}/${title}/history`, title: 'History', icon: <HistoryIcon height="1rem" /> },
    { href: `/${userId}/${title}/setting`, title: 'Setting', icon: <SettingIcon height="1rem" /> },
  ];

  return (
    <DashboardLayout>
      <WorkNavigation>
        <NavigationMenu>
          {menus.map(menu => (
            <NavigationMenuItem key={menu.title} active={decodedPathname === menu.href}>
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

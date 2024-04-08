import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { minContainer } from '@/libs/media';
import { useSidebarStore } from '@/stores/sidebar';

import { ReactComponent as SettingIcon } from '@/assets/icons/settings.svg';
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg';
import { PATH } from '@/routes/path';

type FilterMenuType = {
  name: string;
  path: string;
  icon: JSX.Element;
};

const filterMenus: FilterMenuType[] = [
  {
    name: 'General',
    path: PATH._WORK._SETTING.GENERAL,
    icon: <SettingIcon strokeWidth={1} height={18} className="icon icon-md" />,
  },
  {
    name: 'Collaborators',
    path: PATH._WORK._SETTING.COLLABORATORS,
    icon: <UserIcon strokeWidth={1} height={18} className="icon icon-md" />,
  },
];

const WorkSettingContainer = () => {
  const { userId, title } = useParams();
  const { pathname } = useLocation();
  const decodedPathname = decodeURIComponent(pathname);
  const setIsOpen = useSidebarStore(state => state.setIsOpen);

  React.useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const isSelectedMenu = (page: string) =>
    page === decodedPathname.replace(`${userId}/${title}/${PATH._WORK.SETTING}`, '').replaceAll('/', '');

  return (
    <>
      <ContainerMain>
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
    </>
  );
};
export default WorkSettingContainer;

const ContainerMain = styled.div`
  flex: 0 0 auto;
  min-width: 100%;
  margin: 1rem 0rem;
  ${minContainer.tablet('dashboard-container')} {
    flex: 0 0 14rem;
    min-width: 12rem;
  }
  ${minContainer.desktop('dashboard-container')} {
    flex: 0 0 17rem;
    min-width: 17rem;
  }
  h2 {
    margin-top: 0px;
  }
`;
const ContainerSub = styled.div`
  width: 100%;
  padding: 1rem;
  ${minContainer.tablet('dashboard-container')} {
    width: calc(100% - 15rem);
    margin-left: auto;
  }
  ${minContainer.desktop('dashboard-container')} {
    width: calc(100% - 18rem);
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

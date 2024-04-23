// import React from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import SettingGrid from '@/components/Grid/SettingGrid';

// import { useSidebarStore } from '@/stores/sidebar';
import { ReactComponent as SettingIcon } from '@/assets/icons/settings.svg';
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg';
import { PATH } from '@/routes/path';

import * as S from './style';

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

const WorkSettingPage = () => {
  const { userId, title } = useParams();
  const { pathname } = useLocation();
  const decodedPathname = decodeURIComponent(pathname);
  // const setIsOpen = useSidebarStore(state => state.setIsOpen);

  // React.useEffect(() => {
  // setIsOpen(false);
  // }, []);

  const isSelectedMenu = (page: string) =>
    page === decodedPathname.replace(`${userId}/${title}/${PATH._WORK.SETTING}`, '').replaceAll('/', '');

  return (
    <>
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
    </>
  );
};
export default WorkSettingPage;

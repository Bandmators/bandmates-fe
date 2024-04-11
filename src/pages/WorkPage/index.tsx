import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { ReactComponent as HistoryIcon } from '@/assets/icons/clock.svg';
import { ReactComponent as EditIcon } from '@/assets/icons/edit.svg';
import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg';
import { ReactComponent as SettingIcon } from '@/assets/icons/settings.svg';
import DashboardLayout from '@/pages/Layout/DashboardLayout';
import { PATH } from '@/routes/path';

import * as S from './style';

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
      <S.WorkNavigation>
        <S.NavigationMenu>
          {menus.map(menu => (
            <S.NavigationMenuItem key={menu.title} active={isActive(menu)}>
              <Link to={menu.href}>
                {menu.icon} {menu.title}
              </Link>
            </S.NavigationMenuItem>
          ))}
        </S.NavigationMenu>
      </S.WorkNavigation>
      <DashboardLayout.Container>
        <Outlet />
      </DashboardLayout.Container>
    </DashboardLayout>
  );
};
export default WorkPage;

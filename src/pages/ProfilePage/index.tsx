import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';

import ProfileCard from '@/components/Profile/ProfileCard';
import ProfileOverview from '@/components/Profile/ProfileOverview';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { maxContainer, minContainer } from '@/libs/media';
import { UserType } from '@/types/user';

import { ReactComponent as EditIcon } from '@/assets/icons/edit.svg';
import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg';
import { ReactComponent as StarIcon } from '@/assets/icons/star.svg';

type TabType = 'overview' | 'works' | 'stars' | 'followers' | 'followings';
type MenuType = {
  tab: TabType;
  title: string;
  icon: React.ReactNode;
};
type ContentType = {
  [key in TabType]: React.ReactNode;
};

const ProfilePage = () => {
  const { userId } = useParams();
  const [searchParams] = useSearchParams();
  const tab: TabType = decodeURIComponent(searchParams.get('tab') || 'overview') as TabType;
  const [profile, setProfile] = useState<UserType>();
  // const [followers, setFollowers] = useState<number>(0);
  // const [followings, setFollowings] = useState<number>(0);

  const menus: MenuType[] = [
    { tab: `overview`, title: 'Overview', icon: <HomeIcon height="1rem" /> },
    { tab: `works`, title: 'Works', icon: <EditIcon height="1rem" /> },
    { tab: `stars`, title: 'Stars', icon: <StarIcon height="1rem" /> },
  ];
  const contents: ContentType = {
    overview: <ProfileOverview bio={profile?.bio} />,
    works: <></>,
    stars: <></>,
    followers: <></>,
    followings: <></>,
  };

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => {
        setProfile(data.user);
      });
  }, []);

  if (!profile) return <></>;

  return (
    <DashboardLayout>
      <Container>
        <ContainerMain>
          <ProfileCard profile={profile} />
        </ContainerMain>

        <ContainerSub>
          <ProfileNavigation>
            <NavigationMenu>
              {menus.map(menu => (
                <NavigationMenuItem key={menu.title} active={tab === menu.tab}>
                  <Link to={`/${userId}?tab=${menu.tab}`}>
                    {menu.icon} {menu.title}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenu>
          </ProfileNavigation>
          {contents[tab]}
        </ContainerSub>
      </Container>
    </DashboardLayout>
  );
};
export default ProfilePage;

const Container = styled.div`
  flex-direction: column;
  margin: 1rem;
  ${minContainer.tablet('dashboard-container')} {
    margin: 3rem 0rem;
    flex-direction: row;
  }
  ${minContainer.desktop('dashboard-container')} {
    max-width: ${({ theme }) => css`calc(${theme.breakpoints.desktop} - 1rem)`}px;
    margin: 3rem auto;
  }
  display: flex;
`;
const ContainerMain = styled.div`
  flex: 0 0 14rem;
  min-width: 14rem;
  ${maxContainer.tablet('dashboard-container')} {
    margin-left: 0px;
    flex: 0 0 1;
    min-width: 100%;
  }
`;
const ContainerSub = styled.div`
  margin-left: auto;
  width: calc(100% - 15.5rem);
  ${maxContainer.tablet('dashboard-container')} {
    width: 100%;
  }
`;

const ProfileNavigation = styled.nav`
  width: 100%;
  padding: 1rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray['400']};
  margin-bottom: 1rem;
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

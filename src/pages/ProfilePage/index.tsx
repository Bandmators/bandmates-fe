import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';

import ProfileGrid from '@/components/Grid/ProfileGrid';
import ProfileCard from '@/components/Profile/ProfileCard';
import ProfileOverview from '@/components/Profile/ProfileOverview';
import ProfileRelationship from '@/components/Profile/ProfileRelationship';
import ProfileStars from '@/components/Profile/ProfileStars';
import ProfileWorks from '@/components/Profile/ProfileWorks';
import { maxContainer } from '@/libs/media';
import { UserType } from '@/types/user';

import { ReactComponent as EditIcon } from '@/assets/icons/edit.svg';
import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg';
import { ReactComponent as StarIcon } from '@/assets/icons/star.svg';
import DashboardLayout from '@/pages/Layout/DashboardLayout';

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
    works: <ProfileWorks />,
    stars: <ProfileStars />,
    followers: <ProfileRelationship relation="followers" />,
    followings: <ProfileRelationship relation="followings" />,
  };

  useEffect(() => {
    fetch('/api/user/0')
      .then(res => res.json())
      .then(data => {
        setProfile(data.user);
      });
  }, []);

  if (!profile) return <></>;

  return (
    <DashboardLayout>
      <DashboardLayout.Container isFill>
        <ProfileGrid.Profile>
          <ProfileCard profile={profile} />
        </ProfileGrid.Profile>

        <ProfileGrid.Content>
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
          <ProfileContent>{contents[tab]}</ProfileContent>
        </ProfileGrid.Content>
      </DashboardLayout.Container>
    </DashboardLayout>
  );
};
export default ProfilePage;

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
const ProfileContent = styled.div`
  ${maxContainer.tablet('dashboard-container')} {
    margin: 1rem;
  }
`;

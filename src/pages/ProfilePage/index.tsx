import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';

import ProfileGrid from '@/components/Grid/ProfileGrid';
import ProfileCard from '@/components/Profile/ProfileCard';
import ProfileOverview from '@/components/Profile/ProfileOverview';
import ProfileRelationship from '@/components/Profile/ProfileRelationship';
import ProfileStars from '@/components/Profile/ProfileStars';
import ProfileWorks from '@/components/Profile/ProfileWorks';
import { UserType } from '@/types/user';

import { ReactComponent as EditIcon } from '@/assets/icons/edit.svg';
import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg';
import { ReactComponent as StarIcon } from '@/assets/icons/star.svg';
import DashboardLayout from '@/pages/Layout/DashboardLayout';

import * as S from './style';

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
      <DashboardLayout.Container fill>
        <ProfileGrid.Profile>
          <ProfileCard profile={profile} />
        </ProfileGrid.Profile>

        <ProfileGrid.Content>
          <S.ProfileNavigation>
            <S.NavigationMenu>
              {menus.map(menu => (
                <S.NavigationMenuItem key={menu.title} active={tab === menu.tab}>
                  <Link to={`/${userId}?tab=${menu.tab}`}>
                    {menu.icon} {menu.title}
                  </Link>
                </S.NavigationMenuItem>
              ))}
            </S.NavigationMenu>
          </S.ProfileNavigation>
          <S.ProfileContent>{contents[tab]}</S.ProfileContent>
        </ProfileGrid.Content>
      </DashboardLayout.Container>
    </DashboardLayout>
  );
};
export default ProfilePage;

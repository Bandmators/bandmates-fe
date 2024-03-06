import styled from '@emotion/styled';
import { Card } from 'bmates-ui';
import { Link } from 'react-router-dom';

import { UserType } from '@/types/user';

import { ReactComponent as MailIcon } from '@/assets/icons/mail.svg';
import { ReactComponent as LocationIcon } from '@/assets/icons/map-pin.svg';
import { ReactComponent as CPIcon } from '@/assets/icons/phone.svg';

import FollowButton from '../common/Button/FollowButton';

const infoTypeList = ['email', 'cp', 'location'] as const;
type InfoType = (typeof infoTypeList)[number];
type InfoIconType = {
  [key in InfoType]: React.ReactNode;
};
const infoIcon: InfoIconType = {
  email: <MailIcon />,
  cp: <CPIcon />,
  location: <LocationIcon />,
};

const ProfileCard = ({ profile }: { profile: UserType }) => {
  return (
    <Card>
      <ProfileImage src={profile.profile} />
      <ProfileName>{profile.nickname}</ProfileName>
      <ProfileId>@{profile.id}</ProfileId>
      <ProfileDetailList>
        {infoTypeList.map(info => {
          if (Object.keys(profile).includes(info))
            return (
              <ProfileDetailItem key={info}>
                {infoIcon[info]}
                {profile[info]}
              </ProfileDetailItem>
            );
        })}
      </ProfileDetailList>
      <ProfileRelations>
        <ProfileRelationItem to={`/${profile.id}/?tab=followers`}>
          <span className="stress">24K</span> followers
        </ProfileRelationItem>
        ·
        <ProfileRelationItem to={`/${profile.id}/?tab=followings`}>
          <span className="stress">1K</span> followings
        </ProfileRelationItem>
      </ProfileRelations>
      <ProfileTake>
        {/* <SponsorButton /> */}
        <FollowButton />
      </ProfileTake>
    </Card>
  );
};
export default ProfileCard;

const ProfileImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
`;
const ProfileName = styled.h1`
  font-size: 1.5rem;
  margin: 1rem 0px 0px;
`;
const ProfileId = styled.p`
  margin: 0px;
  opacity: 0.6;
`;

const ProfileRelations = styled.div`
  margin: 1.5rem 0rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;
const ProfileRelationItem = styled(Link)`
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  opacity: 0.8;
  .stress {
    font-size: 1rem;
    font-weight: 500;
    opacity: 1;
    margin-right: 0.25rem;
  }
  &:hover {
    opacity: 1;
  }
`;

const ProfileDetailList = styled.ul`
  margin: 1.5rem 0rem;
  padding: 0px;
  opacity: 0.7;
`;
const ProfileDetailItem = styled.li`
  font-size: 0.875rem;
  display: flex;
  margin: 0.75rem 0rem;
  align-items: center;
  list-style: none;
  svg {
    stroke-width: 1;
    height: 1rem;
    margin-right: 0.5rem;
  }
`;

const ProfileTake = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
  justify-content: space-between;
  button {
    flex: 1 0 auto;
  }
`;

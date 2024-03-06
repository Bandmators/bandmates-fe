import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { UserType } from '@/types/user';

import AvatarMention from '../common/Avatar/AvatarMention';
import FollowButton from '../common/Button/FollowButton';

interface ProfileRelationshipProps {
  relation: 'followers' | 'followings';
}

const ProfileRelationship = ({ relation }: ProfileRelationshipProps) => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    fetch(`/api/user/0/${relation}`)
      .then(res => res.json())
      .then(data => {
        setUsers(data[relation]);
      });
  }, [relation]);

  return (
    <AlbumList>
      {users.map(user => (
        <AlbumListItem key={user.id}>
          <AvatarMention userId={user.id} size="lg" />
          <FollowButton />
        </AlbumListItem>
      ))}
    </AlbumList>
  );
};

export default ProfileRelationship;

const AlbumList = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const AlbumListItem = styled.li`
  list-style: none;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray['300']};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

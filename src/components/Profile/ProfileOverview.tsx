import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import AlbumBox from '@/components/Album/AlbumBox';
import Conversation from '@/components/Conversation';
import { AlbumType } from '@/types/album';

interface ProfileOverviewProps {
  bio?: string;
}

const ProfileOverview = ({ bio }: ProfileOverviewProps) => {
  const [popularWorks, setPopularWorks] = useState<AlbumType[]>([]);

  useEffect(() => {
    fetch('/api/recent')
      .then(res => res.json())
      .then(data => {
        setPopularWorks(data.albums);
      });
  }, []);

  return (
    <div>
      <ProfileIntroduce>{bio}</ProfileIntroduce>

      <SubTitle>Popular Works</SubTitle>
      <AlbumList>
        {popularWorks.slice(0, 1).map(album => (
          <AlbumListItem key={album.id}>
            <AlbumBox {...album} />
          </AlbumListItem>
        ))}
      </AlbumList>

      <SubTitle>Visitors</SubTitle>
      <Conversation />
    </div>
  );
};

export default ProfileOverview;

const ProfileIntroduce = styled.div`
  margin: 3rem 0rem;
  font-size: 1.125rem;
  background-color: ${({ theme }) => theme.colors.gray['200']};
  width: 100%;
  padding: 1.25rem;
  border-radius: 0.5rem;
  white-space: pre-line;
`;
const SubTitle = styled.h2`
  font-weight: 500;
  font-size: 1.125rem;
  margin-top: 3rem;
`;

const AlbumList = styled.ul`
  display: flex;
  gap: 1rem;
  margin: 0px;
  padding: 0px;
`;
const AlbumListItem = styled.li`
  list-style: none;
  img {
    width: 8rem;
    height: 8rem;
  }
`;

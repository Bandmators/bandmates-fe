import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import AlbumItem from '@/components/Album/AlbumItem';
import { AlbumType } from '@/types/album';

const ProfileStars = () => {
  const [starWorks, setStarWorks] = useState<AlbumType[]>([]);

  useEffect(() => {
    fetch('/api/user/0/stars')
      .then(res => res.json())
      .then(data => {
        setStarWorks(data.stars);
      });
  }, []);

  return (
    <AlbumList>
      {starWorks.map(album => (
        <AlbumListItem key={album.id}>
          <AlbumItem {...album} />
        </AlbumListItem>
      ))}
    </AlbumList>
  );
};

export default ProfileStars;

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
`;

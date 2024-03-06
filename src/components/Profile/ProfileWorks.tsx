import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import AlbumItem from '@/components/Album/AlbumItem';
import { AlbumType } from '@/types/album';

const ProfileWorks = () => {
  const [popularWorks, setPopularWorks] = useState<AlbumType[]>([]);

  useEffect(() => {
    fetch('/api/user/0/works')
      .then(res => res.json())
      .then(data => {
        setPopularWorks(data.works);
      });
  }, []);

  return (
    <AlbumList>
      {popularWorks.map(album => (
        <AlbumListItem key={album.id}>
          <AlbumItem {...album} />
        </AlbumListItem>
      ))}
    </AlbumList>
  );
};

export default ProfileWorks;

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

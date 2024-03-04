import styled from '@emotion/styled';
import { Button } from 'bmates-ui';
import { Link } from 'react-router-dom';

import StarIcon from '@/assets/icons/star.svg';

interface AlbumProps {
  id: string;
  src: string;
}

const AlbumItem = ({ id, src }: AlbumProps) => {
  return (
    <AlbumItemWrapper>
      <Link to={`/${id}`}>
        <AlbumImage src={src} alt={id} />
      </Link>
      <div>
        <AlbumAuthor>Men's Tear</AlbumAuthor>
        <Link to={`/${id}`}>
          <AlbumTitle>AK47 Grandma</AlbumTitle>
        </Link>
      </div>
      <AlbumStarButton>
        <img src={StarIcon} alt=" " /> Star
      </AlbumStarButton>
    </AlbumItemWrapper>
  );
};
export default AlbumItem;

const AlbumItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AlbumImage = styled.img`
  border-radius: 0.5rem;
  width: 5rem;
  height: 5rem;
  margin-right: 1rem;
`;

const AlbumAuthor = styled.p`
  font-weight: 500;
  margin: 0px 0px 0.5rem;
`;
const AlbumTitle = styled.p`
  margin: 0px;
`;

const AlbumStarButton = styled(Button)`
  margin-left: auto;
`;

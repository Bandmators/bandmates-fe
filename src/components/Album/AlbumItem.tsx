import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import Mention from '@/components/Mention';
import { AlbumType } from '@/types/album';

import StarButton from '../common/Button/StarButton';

const AlbumItem = ({ id, author, src, title }: AlbumType) => {
  return (
    <AlbumItemWrapper>
      <Link to={`/${id}`}>
        <AlbumImage src={src} alt={id} />
      </Link>
      <div>
        <Mention userId={author} />
        <AlbumTitleDivider>/</AlbumTitleDivider>
        <Link to={`/${author}/${title}`}>
          <AlbumTitle>{title}</AlbumTitle>
        </Link>
        <AlbumDesc>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout.
        </AlbumDesc>
      </div>
      <StarButton />
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
const AlbumTitleDivider = styled.span`
  margin: 0px 0.25rem;
  opacity: 0.5;
`;
const AlbumTitle = styled.span`
  font-weight: 600;
  margin: 0px 0px 0.5rem;
`;
const AlbumDesc = styled.p`
  opacity: 0.7;
  margin: 0.5rem 0px 0px;
`;

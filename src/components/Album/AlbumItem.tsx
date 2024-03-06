import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import Mention from '@/components/Mention';
import { AlbumType } from '@/types/album';

import StarButton from '../common/Button/StarButton';

const AlbumItem = ({ id, author, src, title }: AlbumType) => {
  return (
    <AlbumItemWrapper>
      <AlbumImageLink to={`/${id}`}>
        <AlbumImage src={src} alt={id} />
      </AlbumImageLink>
      <div>
        <div>
          <Mention userId={author} />
          <AlbumTitleDivider>/</AlbumTitleDivider>
          <Link to={`/${author}/${title}`}>
            <AlbumTitle>{title}</AlbumTitle>
          </Link>
        </div>
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
  gap: 1rem;
`;
const AlbumImageLink = styled(Link)`
  display: flex;
`;
const AlbumImage = styled.img`
  border-radius: 0.5rem;
  width: 5rem;
  height: 5rem;
`;
const AlbumTitleDivider = styled.span`
  margin: 0px 0.25rem;
  opacity: 0.5;
`;
const AlbumTitle = styled.span`
  font-weight: 600;
  margin: 0px;
`;
const AlbumDesc = styled.p`
  margin: 0.5rem 0px 0px;
  width: 70%;
  line-height: 1;
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: normal;
  opacity: 0.7;
`;

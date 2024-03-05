import styled from '@emotion/styled';
import { Button } from 'bmates-ui';
import { Link } from 'react-router-dom';

import Mention from '@/components/Mention';
import { AlbumType } from '@/types/album';

import { ReactComponent as StarIcon } from '@/assets/icons/star.svg';

const AlbumItem = ({ id, author, src, title }: AlbumType) => {
  return (
    <AlbumItemWrapper>
      <Link to={`/${id}`}>
        <AlbumImage src={src} alt={id} />
      </Link>
      <div>
        <Mention userId={author} />
        <AlbumTitleDivider>/</AlbumTitleDivider>
        <Link to={`/${id}`}>
          <AlbumTitle>{title}</AlbumTitle>
        </Link>
        <AlbumDesc>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout.
        </AlbumDesc>
      </div>
      <AlbumStarButton variant="outline">
        <StarIcon width="16" height="16" strokeWidth="1" /> Star
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

const AlbumStarButton = styled(Button)`
  display: flex;
  gap: 0.5rem;
  margin-left: auto;
`;

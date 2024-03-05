import styled from '@emotion/styled';
import { Button } from 'bmates-ui';

import { ReactComponent as StarIcon } from '@/assets/icons/star.svg';

const StarButton = () => {
  return (
    <AlbumStarButton variant="outline">
      <StarIcon width="16" height="16" strokeWidth="1" /> Star
    </AlbumStarButton>
  );
};
export default StarButton;

const AlbumStarButton = styled(Button)`
  display: flex;
  gap: 0.5rem;
  margin-left: auto;
`;

import styled from '@emotion/styled';
import { Avatar, Card, CardBody, CardDesc, CardHead } from 'bmates-ui';
import { Link } from 'react-router-dom';

import { FeedType } from '@/types/feed';

import AlbumItem from '../Album/AlbumItem';

interface FeedProps {
  feed: FeedType;
}

const Feed = ({ feed }: FeedProps) => {
  return (
    <FeedCard>
      <CardHead>
        <FeedHead>
          <Avatar src="" alt="" />
          <div>
            <FeedUser to="">@{feed.album.author}</FeedUser> <FeedDesc>{feed.album.title}</FeedDesc>
            <CardDesc>{feed.date}</CardDesc>
          </div>
        </FeedHead>
      </CardHead>
      <CardBody>
        <AlbumItem key={feed.id} id={feed.id} src={feed.album.src} />
      </CardBody>
    </FeedCard>
  );
};
export default Feed;

const FeedHead = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const FeedUser = styled(Link)`
  font-weight: 600;
`;

const FeedDesc = styled.span``;

const FeedCard = styled(Card)`
  margin-bottom: 1.5rem;
`;

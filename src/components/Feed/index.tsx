import styled from '@emotion/styled';
import { Avatar, Card, CardBody, CardDesc, CardHead } from 'bmates-ui';

import { FeedType } from '@/types/feed';

import AlbumItem from '../Album/AlbumItem';
import Mention from '../Mention';

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
            <Mention userId={feed.userId} /> <FeedDesc>{feed.act}</FeedDesc>
            <CardDesc>{feed.date}</CardDesc>
          </div>
        </FeedHead>
      </CardHead>
      <CardBody>
        <AlbumItem key={feed.id} {...feed.album} />
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

const FeedDesc = styled.span``;

const FeedCard = styled(Card)`
  margin-bottom: 1.5rem;
`;

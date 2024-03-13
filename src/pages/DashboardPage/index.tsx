import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import AlbumBox from '@/components/Album/AlbumBox';
import Feed from '@/components/Feed';
import { AlbumType } from '@/types/album';
import { FeedType } from '@/types/feed';

import DashboardLayout from '@/pages/Layout/DashboardLayout';

const Dashboard = () => {
  const [feeds, setFeeds] = useState<FeedType[]>([]);
  const [recentlyViewAlbums, setRecentlyViewAlbums] = useState<AlbumType[]>([]);

  useEffect(() => {
    fetch('/api/feed')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setFeeds(data.feeds);
      });
    fetch('/api/recent')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setRecentlyViewAlbums(data.albums);
      });
  }, []);

  return (
    <DashboardLayout>
      <DashboardLayout.Container>
        <div>
          <div>
            <FeedTitle>Recently viewed</FeedTitle>
            <FeedContent>
              {recentlyViewAlbums.map(album => (
                <AlbumBox key={album.id} {...album} />
              ))}
            </FeedContent>
          </div>
          <div>
            <FeedTitle>Feed</FeedTitle>
            <FeedContent direction="column">
              {feeds.map(feed => (
                <Feed key={feed.id} feed={feed} />
              ))}
            </FeedContent>
          </div>
        </div>
      </DashboardLayout.Container>
    </DashboardLayout>
  );
};
export default Dashboard;

const FeedTitle = styled.h2``;
const FeedContent = styled.div<{ direction?: 'row' | 'column' }>`
  display: flex;
  gap: 1rem;
  ${({ direction }) =>
    direction &&
    css`
      flex-direction: ${direction};
    `}
`;

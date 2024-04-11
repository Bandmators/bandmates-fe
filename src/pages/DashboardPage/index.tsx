import { useEffect, useState } from 'react';

import AlbumBox from '@/components/Album/AlbumBox';
import Feed from '@/components/Feed';
import { AlbumType } from '@/types/album';
import { FeedType } from '@/types/feed';

import DashboardLayout from '@/pages/Layout/DashboardLayout';

import * as S from './style';

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
            <S.FeedTitle>Recently viewed</S.FeedTitle>
            <S.FeedContent>
              {recentlyViewAlbums.map(album => (
                <AlbumBox key={album.id} {...album} />
              ))}
            </S.FeedContent>
          </div>
          <div>
            <S.FeedTitle>Feed</S.FeedTitle>
            <S.FeedContent direction="column">
              {feeds.map(feed => (
                <Feed key={feed.id} feed={feed} />
              ))}
            </S.FeedContent>
          </div>
        </div>
      </DashboardLayout.Container>
    </DashboardLayout>
  );
};
export default Dashboard;

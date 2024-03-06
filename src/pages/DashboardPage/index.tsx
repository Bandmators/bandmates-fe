import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Button, Form, Input, InputDesc, InputGroup, Label, Textarea } from 'bmates-ui';
import { useEffect, useState } from 'react';

import AlbumBox from '@/components/Album/AlbumBox';
import Feed from '@/components/Feed';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { AlbumType } from '@/types/album';
import { FeedType } from '@/types/feed';

const Dashboard = () => {
  const [count, setCount] = useState(0);
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
      <div className="card">
        <Button onClick={() => setCount(count => count + 1)}>count is {count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Form redirect="testsuccess">
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="email" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="bio" />
          <InputDesc>You can @mention other users to link to them.</InputDesc>
        </InputGroup>
        <Button type="submit">Save</Button>
      </Form>
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

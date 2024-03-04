import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  Button,
  Card,
  CardBody,
  CardDesc,
  CardHead,
  CardTitle,
  Form,
  Input,
  InputDesc,
  InputGroup,
  Label,
  Textarea,
} from 'bmates-ui';
import { useEffect, useState } from 'react';

import Album from '@/components/Album/AlbumBox';
import AlbumItem from '@/components/Album/AlbumItem';
import DashboardLayout from '@/components/layout/DashboardLayout';

// import Button from '@/components/common/button';
// import Form from '@/components/common/form';
// import Input, { InputDesc, InputGroup } from '@/components/common/input';
// import Label from '@/components/common/label';
// import Textarea from '@/components/common/textarea';

const Dashboard = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState();

  const recentlyViewAlbums = [
    {
      id: '1',
      src: 'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
    },
    {
      id: '2',
      src: 'https://fastly.picsum.photos/id/132/200/200.jpg?hmac=meVrCoOURNB7iKK3Mv-yuRrvxvXgv4h2vIRLM4sKwK4',
    },
    {
      id: '3',
      src: 'https://fastly.picsum.photos/id/254/200/200.jpg?hmac=wM9u9N0tgdWKFIr8MxBLr8rLoV0JjUUKLk32XFV8agQ',
    },
    {
      id: '4',
      src: 'https://fastly.picsum.photos/id/19/200/200.jpg?hmac=U8dBrPCcPP89QG1EanVOKG3qBsZwAvtCLUrfeXdE0FI',
    },
    {
      id: '5',
      src: 'https://fastly.picsum.photos/id/1064/200/200.jpg?hmac=xUH-ovzKEHg51S8vchfOZNAOcHB6b1TI_HzthmqvcWU',
    },
  ];
  const feeds = [
    {
      title: '@kyechan99 starred a work',
      date: '1 hour ago',
      id: '1',
      src: 'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
    },
    {
      title: '@dygames make a work',
      date: '2 hour ago',
      id: '2',
      src: 'https://fastly.picsum.photos/id/132/200/200.jpg?hmac=meVrCoOURNB7iKK3Mv-yuRrvxvXgv4h2vIRLM4sKwK4',
    },
    {
      title: '@bandmators join a work',
      date: '3 hour ago',
      id: '3',
      src: 'https://fastly.picsum.photos/id/254/200/200.jpg?hmac=wM9u9N0tgdWKFIr8MxBLr8rLoV0JjUUKLk32XFV8agQ',
    },
    {
      title: '@kyechan99 starred a work',
      date: '4 hour ago',
      id: '4',
      src: 'https://fastly.picsum.photos/id/19/200/200.jpg?hmac=U8dBrPCcPP89QG1EanVOKG3qBsZwAvtCLUrfeXdE0FI',
    },
    {
      title: '@dygames starred a work',
      date: '5 hour ago',
      id: '5',
      src: 'https://fastly.picsum.photos/id/1064/200/200.jpg?hmac=xUH-ovzKEHg51S8vchfOZNAOcHB6b1TI_HzthmqvcWU',
    },
  ];

  useEffect(() => {
    fetch('/aaa')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <DashboardLayout>
      <div>
        <FeedTitle>Recently viewed</FeedTitle>
        <FeedContent>
          {recentlyViewAlbums.map(album => (
            <Album key={album.id} {...album} />
          ))}
        </FeedContent>
      </div>
      <div>
        <FeedTitle>Feed</FeedTitle>
        <FeedContent direction="column">
          {feeds.map(feed => (
            <Card>
              <CardHead>
                <CardTitle>{feed.title}</CardTitle>
                <CardDesc>{feed.date}</CardDesc>
              </CardHead>
              <CardBody>
                <AlbumItem key={feed.id} id={feed.id} src={feed.src} />
              </CardBody>
            </Card>
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
      DATA: {JSON.stringify(data)}
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

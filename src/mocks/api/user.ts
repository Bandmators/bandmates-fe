import { HttpResponse, http } from 'msw';

import { AlbumDataList } from '../data/albumData';
import { UserDataList } from '../data/userData';

const handler = [
  http.get('/api/user/:userId', () => {
    return HttpResponse.json(
      {
        user: UserDataList[0],
        followers: 24033,
        followings: 34,
        bands: ['Guitar', 'Piano'],
      },
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }),

  http.get('/api/user/:userId/followers', () => {
    return HttpResponse.json({
      followers: UserDataList,
    });
  }),

  http.get('/api/user/:userId/followings', () => {
    return HttpResponse.json({
      followings: UserDataList.reverse(),
    });
  }),

  http.get('/api/user/:userId/stars', () => {
    return HttpResponse.json({
      stars: AlbumDataList,
    });
  }),

  http.get('/api/user/:userId/works', () => {
    return HttpResponse.json({
      works: AlbumDataList.reverse(),
    });
  }),
];
export default handler;

import { HttpResponse, http } from 'msw';

import { UserDataList } from '../data/userData';

const handler = [
  http.get('/api/user', () => {
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
];
export default handler;

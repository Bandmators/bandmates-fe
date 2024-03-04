import { HttpResponse, http } from 'msw';

import { AlbumDataList } from '../data/albumData';
import { FeedDataList } from '../data/feedData';

const handler = [
  http.get('/api/recent', () => {
    return HttpResponse.json(
      {
        albums: AlbumDataList,
      },
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }),

  http.get('/api/feed', () => {
    return HttpResponse.json({
      feeds: FeedDataList,
    });
  }),
];
export default handler;

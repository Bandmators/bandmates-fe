import { HttpResponse, http } from 'msw';

import { AlbumDataList } from '../data/albumData';

const handler = [
  http.get('/api/work', () => {
    return HttpResponse.json(
      {
        work: {
          album: AlbumDataList[0],
          readme: `Hello Everyone!
            
            We need Vocal.
            Somebody help us.`,
        },
        mates: ['kyechan99', 'dygames'],
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

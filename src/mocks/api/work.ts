import { HttpResponse, http } from 'msw';

import { AlbumDataList } from '../data/albumData';
import { UserDataList } from '../data/userData';

const handler = [
  http.get('/api/work', () => {
    return HttpResponse.json(
      {
        work: {
          album: AlbumDataList[0],
          readme: `Hello Everyone!
            
            We need Vocal.
            Somebody help us.`,
          bands: ['Guitar', 'Piano'],
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

  http.get('/api/work/0', () => {
    return HttpResponse.json(
      {
        work: {
          album: AlbumDataList[0],
          readme: `Hello Everyone!
            
            We need Vocal.
            Somebody help us.`,
          bands: ['Guitar', 'Piano'],
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

  http.get('/api/work/0/history', () => {
    return HttpResponse.json(
      {
        histories: [
          {
            uid: '5225',
            user: UserDataList[0],
            content: 'Upload Voice',
            createdAt: new Date(),
          },
          {
            uid: '1231',
            user: UserDataList[0],
            content: 'Add Guitar',
            createdAt: new Date('2024-04-01'),
          },
          {
            uid: '3123',
            user: UserDataList[1],
            content: 'Sample History Something',
            createdAt: new Date('2024-03-22'),
          },
          {
            uid: '1013',
            user: UserDataList[0],
            content: 'Init',
            createdAt: new Date('2024-01-30'),
          },
        ],
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

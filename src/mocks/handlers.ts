import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get('/resource', () => {
    return HttpResponse.json(
      {
        user: {
          id: 'abc-123',
          name: 'John Maverick',
        },
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

import { createProxyMiddleware } from 'http-proxy-middleware';

export default app => {
  app.use(
    '/github',
    createProxyMiddleware({
      target: 'https://github.com',
      pathRewrite: {
        '^/github': '',
      },
    }),
  );
  app.use(
    '/s3',
    createProxyMiddleware({
      target: 'https://baggun.s3.ap-northeast-2.amazonaws.com',
      pathRewrite: {
        '^/s3': '',
      },
    }),
  );
};

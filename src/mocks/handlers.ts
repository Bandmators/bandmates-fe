import feedHandlers from './api/feed';
import userHandlers from './api/user';
import workHandlers from './api/work';

export const handlers = [...feedHandlers, ...workHandlers, ...userHandlers];

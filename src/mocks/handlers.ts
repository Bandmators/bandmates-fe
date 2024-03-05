import feedHandlers from './api/feed';
import workHandlers from './api/work';

export const handlers = [...feedHandlers, ...workHandlers];

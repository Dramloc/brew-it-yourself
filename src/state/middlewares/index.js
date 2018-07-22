import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

export const middlewares = [thunk, apiMiddleware];

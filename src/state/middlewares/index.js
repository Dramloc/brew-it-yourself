import thunk from 'redux-thunk';
import { fetchMiddleware } from './fetch';

export const middlewares = [thunk, fetchMiddleware];

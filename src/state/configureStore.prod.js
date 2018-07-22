import { applyMiddleware, createStore } from 'redux';
import { middlewares } from './middlewares';
import { rootReducer } from './rootReducer';

const configureStore = (preloadedState = {}) =>
	createStore(rootReducer, preloadedState, applyMiddleware(...middlewares));

export default configureStore;
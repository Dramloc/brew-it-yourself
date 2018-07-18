import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { middlewares } from './middlewares';
import { rootReducer } from './rootReducer';

const configureStore = (preloadedState = {}) =>
	createStore(
		rootReducer,
		preloadedState,
		compose(
			applyMiddleware(...middlewares, createLogger()),
			typeof window !== 'undefined' &&
				window.__REDUX_DEVTOOLS_EXTENSION__ &&
				window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);

export default configureStore;

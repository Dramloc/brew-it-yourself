import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';

const configureStore = (preloadedState = {}) =>
	createStore(
		rootReducer,
		preloadedState,
		compose(
			applyMiddleware(thunk, createLogger()),
			typeof window !== 'undefined' &&
				window.__REDUX_DEVTOOLS_EXTENSION__ &&
				window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);

export default configureStore;

import { routerReducer } from 'preact-router-redux';
import { combineReducers } from 'redux';
import { getMetadataReducer } from './metadata';

export const rootReducer = combineReducers({
	routing: routerReducer,
	recipes: getMetadataReducer({ baseType: 'FETCH_RECIPES' })
});

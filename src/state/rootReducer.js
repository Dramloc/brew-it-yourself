import { routerReducer } from 'preact-router-redux';
import { combineReducers } from 'redux';
import { recipesReducer } from './recipes/recipesReducer';

export const rootReducer = combineReducers({
	routing: routerReducer,
	recipes: recipesReducer
});

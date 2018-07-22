import { combineReducers } from 'redux';
import { reducer as recipes } from './ducks/recipes/reducers';

export const rootReducer = combineReducers({
	recipes
});

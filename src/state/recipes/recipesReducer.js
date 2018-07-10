import { getMetadataReducer } from '../metadata/getMetadataReducer';
import { RECIPES_FAILURE, RECIPES_REQUEST, RECIPES_SUCCESS } from './types';

export const recipesReducer = getMetadataReducer({
	types: [RECIPES_REQUEST, RECIPES_SUCCESS, RECIPES_FAILURE]
});

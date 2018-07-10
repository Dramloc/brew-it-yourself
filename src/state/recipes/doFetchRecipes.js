import { getMetadataFetch } from '../metadata/getMetadataFetch';
import { RECIPES_FAILURE, RECIPES_REQUEST, RECIPES_SUCCESS } from './types';

const API_URL = 'https://api.punkapi.com/v2/beers';
const doFetch = getMetadataFetch({
	types: [RECIPES_REQUEST, RECIPES_SUCCESS, RECIPES_FAILURE]
});

export const doFetchRecipes = () => doFetch(API_URL);

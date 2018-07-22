import { Recipes } from './schemas';
import { FETCH_DETAILS_REQUEST, FETCH_LIST_REQUEST } from './types';

const API_URL = 'https://api.punkapi.com/v2/beers';

export const doFetchList = () => ({
	type: FETCH_LIST_REQUEST,
	meta: { url: API_URL, schema: Recipes }
});

export const doFetchDetails = id => ({
	type: FETCH_DETAILS_REQUEST,
	// FIXME: mock API returns array when fetching by id, schema should probably be `Recipe`, not `Recipes`
	meta: { url: `${API_URL}/${id}`, schema: Recipes }
});

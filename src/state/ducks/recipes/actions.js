import { normalize } from 'normalizr';
import { getJSON, RSAA } from 'redux-api-middleware';
import { Recipes } from './schemas';
import { selectDetailsHydratedResult, selectListHydratedResult } from './selectors';
import {
	FETCH_DETAILS_FAILURE,
	FETCH_DETAILS_REQUEST,
	FETCH_DETAILS_SUCCESS,
	FETCH_LIST_FAILURE,
	FETCH_LIST_REQUEST,
	FETCH_LIST_SUCCESS
} from './types';

const API_ENDPOINT = 'https://api.punkapi.com/v2/beers';

export const doFetchList = () => ({
	[RSAA]: {
		endpoint: API_ENDPOINT,
		method: 'GET',
		types: [
			FETCH_LIST_REQUEST,
			{
				type: FETCH_LIST_SUCCESS,
				payload: (action, state, res) => getJSON(res).then(json => normalize(json, Recipes))
			},
			FETCH_LIST_FAILURE
		],
		bailout: state => selectListHydratedResult(state)
	}
});

export const doFetchDetails = id => ({
	[RSAA]: {
		endpoint: `${API_ENDPOINT}/${id}`,
		method: 'GET',
		types: [
			FETCH_DETAILS_REQUEST,
			{
				type: FETCH_DETAILS_SUCCESS,
				payload: (action, state, res) => getJSON(res).then(json => normalize(json, Recipes))
			},
			FETCH_DETAILS_FAILURE
		],
		bailout: state => selectDetailsHydratedResult(state)
	}
});

import fetch from 'isomorphic-fetch';
import { RECIPES_FAILURE, RECIPES_REQUEST, RECIPES_SUCCESS } from './types';

const API_URL = 'https://api.punkapi.com/v2/beers';

export const doFetchRecipes = () => async dispatch => {
	dispatch({ type: RECIPES_REQUEST });
	try {
		const response = await fetch(API_URL);
		const recipes = await response.json();
		dispatch({ type: RECIPES_SUCCESS, payload: recipes });
	}
	catch (error) {
		dispatch({ type: RECIPES_FAILURE, payload: error });
	}
};

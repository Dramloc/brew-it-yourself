import fetch from 'isomorphic-fetch';

const API_URL = 'https://api.punkapi.com/v2/beers';

export const doFetchRecipes = () => async dispatch => {
	dispatch({ type: 'FETCH_RECIPES_STARTED' });
	try {
		const response = await fetch(API_URL);
		const recipes = await response.json();
		dispatch({ type: 'FETCH_RECIPES_SUCCEEDED', payload: recipes });
	}
	catch (error) {
		dispatch({ type: 'FETCH_RECIPES_FAILED', payload: error });
	}
};

import fetch from 'isomorphic-fetch';

const API_URL = 'https://api.punkapi.com/v2/beers';

export const doFetchRecipes = (options = {}) => dispatch => {
	dispatch({ type: 'FETCH_RECIPES_STARTED' });
	return fetch(API_URL, options)
		.then(response => response.json())
		.then(recipes => dispatch({ type: 'FETCH_RECIPES_SUCCEEDED', payload: recipes }))
		.catch(error => dispatch({ type: 'FETCH_RECIPES_FAILED', payload: error }));
};

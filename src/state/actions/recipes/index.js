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

const shouldFetchRecipes = state => {
	const { recipes } = state;
	if (!recipes) {
		return true;
	}
	if (recipes.fetching) {
		return false;
	}
	if (!recipes.result) {
		return true;
	}
	if (Date.now() - recipes.lastFetch > 10000) {
		return true;
	}
	return false;
};

export const doFetchRecipesIfNeeded = () => async (dispatch, getState) => {
	if (shouldFetchRecipes(getState())) {
		return dispatch(doFetchRecipes());
	}
};

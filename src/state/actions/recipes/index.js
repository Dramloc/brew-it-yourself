import fetch from 'isomorphic-fetch';
import { compose } from 'redux';
import { selectRecipes } from '../../selectors/recipes';
import { shouldFetchMetadata } from '../metadata';

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

const shouldFetchRecipes = compose(
	shouldFetchMetadata({ cacheDuration: 60 * 1000 }),
	selectRecipes
);

export const doFetchRecipesIfNeeded = () => async (dispatch, getState) => {
	if (shouldFetchRecipes(getState())) {
		return dispatch(doFetchRecipes());
	}
};

import { compose } from 'redux';
import { shouldFetchMetadata } from '../metadata/shouldFetchMetadata';
import { doFetchRecipes } from './doFetchRecipes';
import { selectRecipes } from './selectRecipes';

const shouldFetchRecipes = compose(
	shouldFetchMetadata({ cacheDuration: 60 * 1000 }),
	selectRecipes
);

export const doFetchRecipesIfNeeded = () => async (dispatch, getState) => {
	if (shouldFetchRecipes(getState())) {
		return dispatch(doFetchRecipes());
	}
};

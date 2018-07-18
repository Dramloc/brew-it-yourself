import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';
import { Recipes } from './schemas';

export const selectState = state => state.recipes;
export const selectEntities = createSelector(selectState, state => state.entities);

// FIXME: DRY
export const selectList = createSelector(selectState, state => state.list);
export const selectListResult = createSelector(selectList, state => state.result);
export const selectListFetching = createSelector(selectList, state => state.fetching);
export const selectListHydratedResult = createSelector(
	selectListResult,
	selectEntities,
	(result, entities) => denormalize(result, Recipes, entities)
);

export const selectDetails = createSelector(selectState, state => state.details);
export const selectDetailsResult = createSelector(selectDetails, state => state.result);
export const selectDetailsFetching = createSelector(selectDetails, state => state.fetching);
export const selectDetailsHydratedResult = createSelector(
	selectDetailsResult,
	selectEntities,
	(result, entities) => {
		// FIXME: mock API returns array when fetching by id, result whould probably contain only one entity on real API
		// FIXME: `Recipe` should be used instead of `Recipes`
		// FIXME: denormalized response should be returned directly
		const recipes = denormalize(result, Recipes, entities);
		return recipes ? recipes[0] : recipes;
	}
);

import { combineReducers } from 'redux';
import { createEntityReducer } from '../../utils/createEntityReducer';
import { createMetadataReducer } from '../../utils/createMetadataReducer';
import {
	FETCH_DETAILS_FAILURE,
	FETCH_DETAILS_REQUEST,
	FETCH_DETAILS_SUCCESS,
	FETCH_LIST_FAILURE,
	FETCH_LIST_REQUEST,
	FETCH_LIST_SUCCESS,
	SELECT_DETAILS
} from './types';

const entities = createEntityReducer({ recipes: {} })({
	schemaByType: {
		[FETCH_LIST_SUCCESS]: 'recipes',
		[FETCH_DETAILS_SUCCESS]: 'recipes'
	}
})();

const list = createMetadataReducer({
	types: [FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_FAILURE]
})();

const details = createMetadataReducer({
	types: [FETCH_DETAILS_REQUEST, FETCH_DETAILS_SUCCESS, FETCH_DETAILS_FAILURE]
})({
	[SELECT_DETAILS]: (state, action) => ({ ...state, result: action.payload })
});

export const reducer = combineReducers({
	entities,
	list,
	details
});

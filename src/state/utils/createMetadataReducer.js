import { createReducer } from './createReducer';

export const createMetadataReducer = ({
	types: [requestType, successType, failureType],
	normalized = true
}) => {
	const initialState = {
		result: null,
		lastError: null,
		error: null,
		lastFetch: null,
		fetching: false
	};

	return createReducer(initialState)({
		[requestType]: state => ({
			...state,
			fetching: true
		}),
		// if successful we store our data, store the lastFetch timestamp, clear out any errors and set fetching to false
		[successType]: (state, action) => ({
			...state,
			// FIXME: compose reducer instead of using option?
			result: normalized ? action.payload.result : action.payload,
			lastFetch: Date.now(),
			error: null,
			lastError: null,
			fetching: false
		}),
		// we still want to leave existing data intact as well as "last fetch" which would let us determine if the data is stale or not
		[failureType]: (state, action) => ({
			...state,
			lastError: Date.now(),
			error: action.payload,
			fetching: false
		})
	});
};

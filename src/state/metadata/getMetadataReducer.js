export const getMetadataReducer = ({ baseType }) => {
	const START = `${baseType}_STARTED`;
	const SUCCESS = `${baseType}_SUCCEEDED`;
	const ERROR = `${baseType}_FAILED`;

	const initialState = {
		result: null,
		lastError: null,
		error: null,
		lastFetch: null,
		fetching: false
	};

	// here we're returning our customized reducer
	return (state = initialState, action) => {
		if (action.type === START) {
			return {
				...state,
				fetching: true
			};
		}
		if (action.type === SUCCESS) {
			// if successful we store our data
			// store the lastFetch timestamp
			// clear out any errors
			// and set fetching to false
			return {
				...state,
				result: action.payload,
				lastFetch: Date.now(),
				error: null,
				lastError: null,
				fetching: false
			};
		}
		if (action.type === ERROR) {
			// we still want to leave existing
			// data intact as well as "last fetch"
			// which would let us determine if the
			// data is stale or not
			return {
				...state,
				lastError: Date.now(),
				error: action.payload,
				fetching: false
			};
		}

		return state;
	};
};

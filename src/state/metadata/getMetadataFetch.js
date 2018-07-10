import fetch from 'isomorphic-fetch';

export const getMetadataFetch = ({ types }) => {
	const [requestType, successType, failureType] = types;
	return (input, init) => async dispatch => {
		dispatch({ type: requestType });
		try {
			const response = await fetch(input, init);
			const metadata = await response.json();
			dispatch({ type: successType, payload: metadata });
		}
		catch (error) {
			dispatch({ type: failureType, payload: error });
		}
	};
};

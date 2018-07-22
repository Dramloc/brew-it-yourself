import fetch from 'isomorphic-fetch';
import { normalize } from 'normalizr';

// Intercept action if type matches this pattern (i.e.: FETCH_RECIPES_REQUEST)
const REQUEST_PATTERN = /(.*)_REQUEST$/;
const SUCCESS_SUFFIX = '_SUCCESS';
const FAILURE_SUFFIX = '_FAILURE';

const isStatusSuccessful = status => status >= 200 && status < 300;

// FIXME: move to another middleware?
const transformResponse = (response, as) => {
	if (!as) {
		return response;
	}
	try {
		return response[as]();
	}
	catch (error) {
		return response;
	}
};

// FIXME: should be moved to another middleware
const normalizeResponse = (response, schema) => {
	if (!schema) {
		return response;
	}
	return normalize(response, schema);
};

const handleResponse = async (response, baseType, schema, as) => {
	const transformedResponse = await transformResponse(response, as);

	if (isStatusSuccessful(response.status)) {
		return {
			type: `${baseType}${SUCCESS_SUFFIX}`,
			payload: normalizeResponse(transformedResponse, schema)
		};
	}
	return handleError(transformedResponse, baseType);
};

const handleError = (error, baseType) => ({
	type: `${baseType}${FAILURE_SUFFIX}`,
	payload: error
});

export const fetchMiddleware = dispatch => next => async action => {
	if (action.meta === undefined) {
		return next(action);
	}
	const matched = action.type.match(REQUEST_PATTERN);
	if (matched === null) {
		return next(action);
	}
	const baseType = matched[1];
	const { url, options, schema, as = 'json' } = action.meta;

	// FIXME: only fetch if required. Add a middleware before this one?
	next(action);
	try {
		const response = await fetch(url, options);
		return next(await handleResponse(response, baseType, schema, as));
	}
	catch (error) {
		return next(handleError(error, baseType));
	}
};

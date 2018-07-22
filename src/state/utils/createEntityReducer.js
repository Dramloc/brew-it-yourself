import { createReducer } from './createReducer';

const mergeEntities = schema => (state, action) => ({
	...state,
	[schema]: {
		...state[schema],
		...action.payload.entities[schema]
	}
});

export const createEntityReducer = initialState => ({ schemaByType }) => {
	const handlers = Object.entries(schemaByType).reduce((handlers, [type, schema]) => {
		handlers[type] = mergeEntities(schema);
		return handlers;
	}, {});
	return (actionHandlers = {}) =>
		createReducer(initialState)({
			...handlers,
			...actionHandlers
		});
};

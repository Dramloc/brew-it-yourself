import { getMetadataReducer } from '../metadata/getMetadataReducer';

export const recipesReducer = getMetadataReducer({ baseType: 'FETCH_RECIPES' });

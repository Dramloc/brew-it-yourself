import { schema } from 'normalizr';

export const Recipe = new schema.Entity('recipes');
export const Recipes = new schema.Array(Recipe);

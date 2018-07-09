import cx from 'classnames';
import { RecipeListItem } from './Item';
import style from './style.scss';

export function RecipeList({ recipes, className, ...props }) {
	return (
		<ul className={cx(style.RecipeList, className)} {...props}>
			{recipes && recipes.map(recipe => <RecipeListItem key={recipe.id} recipe={recipe} />)}
		</ul>
	);
}

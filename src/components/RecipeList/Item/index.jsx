import cx from 'classnames';
import { Link } from 'preact-router';
import style from './style.scss';

const Image = ({ src, alt, ...props }) => (
	<div className={cx(style.RecipeListItem_Image)} {...props}>
		<img src={src} alt={alt} />
	</div>
);

const Text = props => <span className={style.RecipeListItem_Text} {...props} />;

export const RecipeListItem = ({ recipe, className, ...props }) => (
	<li className={cx(style.RecipeListItem, className)} {...props}>
		<Link href={`/recipes/${recipe.id}`}>
			<Image src={`https://placeimg.com/720/405/beer/${recipe.id % 10}`} alt={recipe.name} />
			<Text title={recipe.name}>{recipe.name}</Text>
		</Link>
	</li>
);

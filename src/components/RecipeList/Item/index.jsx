import cx from 'classnames';
import style from './style.scss';

function Image({ src, alt, ...props }) {
	return (
		<div className={cx(style.RecipeListItem_Image)} {...props}>
			<img src={src} alt={alt} />
		</div>
	);
}

function Text(props) {
	return <span className={style.RecipeListItem_Text} {...props} />;
}

export function RecipeListItem({ recipe, className, ...props }) {
	return (
		<li className={cx(style.RecipeListItem, className)} {...props}>
			<a href={`/recipes/${recipe.id}`}>
				<Image src={`https://placeimg.com/720/405/beer/${recipe.id % 10}`} alt={recipe.name} />
				<Text title={recipe.name}>{recipe.name}</Text>
			</a>
		</li>
	);
}

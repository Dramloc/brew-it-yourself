import cx from 'classnames';
import style from './style.scss';
import itemStyle from '../style.scss';

function ImagePlaceholder() {
	return <div className={cx(itemStyle.RecipeListItem_Image, style.Placeholder_Image)} />;
}

function TextPlaceholder() {
	return <span className={cx(itemStyle.RecipeListItem_Text, style.Placeholder_Text)} />;
}

export function Placeholder({ className, ...props }) {
	return (
		<li className={cx(itemStyle.RecipeListItem, className)} {...props}>
			<ImagePlaceholder />
			<TextPlaceholder />
		</li>
	);
}

import cx from 'classnames';
import itemStyle from '../style.scss';
import style from './style.scss';

const ImagePlaceholder = () => (
	<div className={cx(itemStyle.RecipeListItem_Image, style.Placeholder_Image)} />
);

const TextPlaceholder = () => (
	<span className={cx(itemStyle.RecipeListItem_Text, style.Placeholder_Text)} />
);

export const Placeholder = ({ className, ...props }) => (
	<li className={cx(itemStyle.RecipeListItem, className)} {...props}>
		<ImagePlaceholder />
		<TextPlaceholder />
	</li>
);

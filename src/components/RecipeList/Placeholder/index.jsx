import cx from 'classnames';
import { Placeholder as ItemPlaceholder } from '../Item/Placeholder';
import style from '../style.scss';

export function Placeholder({ count, className, ...props }) {
	const placeholders = Array(...{ length: count });
	return (
		<ul className={cx(style.RecipeList, className)} {...props}>
			{placeholders.map((_, index) => (
				<ItemPlaceholder style={{ animationDelay: `${-index * 225}ms` }} />
			))}
		</ul>
	);
}

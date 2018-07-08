import cx from 'classnames';
import style from './style';

export const Page = ({ className, ...props }) => (
	<main className={cx(style.Page, className)} {...props} />
);

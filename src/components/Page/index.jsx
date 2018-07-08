import cx from 'classnames';
import style from './style';

export function Page({ className, ...props }) {
	return <main className={cx(style.Page, className)} {...props} />;
}

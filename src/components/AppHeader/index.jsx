import { Link } from 'preact-router/match';
import manifest from '../../manifest.json';
import style from './style';

const AppHeaderLink = props => (
	<Link
		className={style.AppNavigation_Link}
		activeClassName={style.AppNavigation_Link__active}
		{...props}
	/>
);

export const AppHeader = () => (
	<header className={style.AppNavigation}>
		<h1>{manifest.name}</h1>
		<nav>
			<AppHeaderLink href="/">
				<span>Recipes</span>
			</AppHeaderLink>
		</nav>
	</header>
);

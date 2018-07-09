import { Link } from 'preact-router/match';
import logo from '../../assets/images/logo.png';
import manifest from '../../manifest.json';
import style from './style';

function AppHeaderLink(props) {
	return (
		<Link
			className={style.AppHeader_Link}
			activeClassName={style.AppHeader_Link__active}
			{...props}
		/>
	);
}

export function AppHeader() {
	return (
		<header className={style.AppHeader}>
			<div>
				<img src={logo} alt="The Brew It Yourself logo: hand drawn hops" />
				<h1>{manifest.name}</h1>
				<nav>
					<AppHeaderLink href="/">
						<span>Recipes</span>
					</AppHeaderLink>
					<AppHeaderLink href="/abv-calculator">
						<span>ABV Calculator</span>
					</AppHeaderLink>
				</nav>
			</div>
		</header>
	);
}

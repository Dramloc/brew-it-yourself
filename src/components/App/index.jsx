import Helmet from 'preact-helmet';
import { Router } from 'preact-router';
import manifest from '../../manifest.json';
import ABVCalculator from '../../routes/ABVCalculator';
import Recipes from '../../routes/Recipes';
import { AppHeader } from '../AppHeader';
import style from './style';

export function App() {
	return (
		<div className={style.App}>
			<Helmet
				htmlAttributes={{ lang: 'en' }}
				defaultTitle={manifest.name}
				titleTemplate={`%s – ${manifest.name}`}
				titleAttributes={{ itemprop: 'name' }}
			/>
			<AppHeader />
			<Router>
				<Recipes path="/" />
				<ABVCalculator path="/abv-calculator" />
			</Router>
		</div>
	);
}

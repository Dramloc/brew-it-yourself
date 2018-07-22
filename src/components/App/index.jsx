import Helmet from 'preact-helmet';
import { Provider } from 'preact-redux';
import { Router } from 'preact-router';
import manifest from '../../manifest.json';
import Recipe from '../../routes/Recipe';
import Recipes from '../../routes/Recipes';
import configureStore from '../../state/configureStore';
import { AppHeader } from '../AppHeader';
import style from './style';

const store = configureStore();

export const App = () => (
	<Provider store={store}>
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
				<Recipe path="/recipes/:id" />
			</Router>
		</div>
	</Provider>
);

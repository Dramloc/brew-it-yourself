import Helmet from 'preact-helmet';
import { Provider } from 'preact-redux';
import { Router } from 'preact-router';
import { syncHistoryWithStore } from 'preact-router-redux';
import manifest from '../../manifest.json';
import Recipe from '../../routes/Recipe';
import Recipes from '../../routes/Recipes';
import configureStore from '../../state/configureStore';
import { AppHeader } from '../AppHeader';
import createHistory from './createHistory';
import style from './style';

const store = configureStore();
const history = syncHistoryWithStore(createHistory(), store);

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
			<Router history={history}>
				<Recipes path="/" />
				<Recipe path="/recipes/:id" />
			</Router>
		</div>
	</Provider>
);

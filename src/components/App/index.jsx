import createBrowserHistory from 'history/createBrowserHistory';
import Helmet from 'preact-helmet';
import { Provider } from 'preact-redux';
import { Router } from 'preact-router';
import { syncHistoryWithStore } from 'preact-router-redux';
import manifest from '../../manifest.json';
import Recipes from '../../routes/Recipes';
import configureStore from '../../store/configureStore';
import { AppHeader } from '../AppHeader';
import style from './style';

const store = configureStore();
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store);

export function App() {
	return (
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
				</Router>
			</div>
		</Provider>
	);
}

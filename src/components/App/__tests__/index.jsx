import Helmet from 'preact-helmet';
import render from 'preact-render-spy';
import { App } from '../index';

describe('<App />', () => {
	test('<App /> matches snapshot', () => {
		expect(render(<App />)).toMatchSnapshot();
		expect(Helmet.peek()).toMatchSnapshot();
	});
});

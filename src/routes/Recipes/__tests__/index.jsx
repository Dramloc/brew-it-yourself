import Helmet from 'preact-helmet';
import render from 'preact-render-spy';
import Recipes from '../index';

describe('<Recipes />', () => {
	test('<Recipes /> matches snapshot', () => {
		expect(render(<Recipes />)).toMatchSnapshot();
		expect(Helmet.peek()).toMatchSnapshot();
	});
});

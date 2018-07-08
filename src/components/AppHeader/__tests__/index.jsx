import render from 'preact-render-spy';
import { AppNavigation } from '../index';

describe('<AppNavigation />', () => {
	test('<AppNavigation /> matches snapshot', () => {
		expect(render(<AppNavigation />)).toMatchSnapshot();
	});
});

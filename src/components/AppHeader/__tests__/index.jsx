import render from 'preact-render-spy';
import { AppHeader } from '../index';

describe('<AppHeader />', () => {
	test('<AppHeader /> matches snapshot', () => {
		expect(render(<AppHeader />)).toMatchSnapshot();
	});
});

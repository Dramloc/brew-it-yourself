import render from 'preact-render-spy';
import { Page } from '../index';

describe('<Page />', () => {
	test('<Page /> matches snapshot', () => {
		expect(render(<Page />)).toMatchSnapshot();
	});
});

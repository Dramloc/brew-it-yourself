import Helmet from 'preact-helmet';
import render from 'preact-render-spy';
import App, { rewind } from '../index';

describe('root index.js', () => {
	beforeEach(() => {
		Helmet.canUseDOM = false;
	});

	test('should export <App /> component and Helmet { rewind }', () => {
		expect(App).toBeDefined();
		expect(rewind).toBeDefined();
	});

	test('<App /> matches snapshot', () => {
		expect(render(<App />)).toMatchSnapshot();
		const head = rewind();
		expect(
			Object.values(head)
				.map(value => value.toString())
				.join('\n')
		).toMatchSnapshot();
	});
});

import { Component } from 'preact';
import Helmet from 'preact-helmet';
import { Page } from '../../components/Page';

export default class ABVCalculator extends Component {
	state = {};

	render() {
		return (
			<Page>
				<Helmet title="ABV Calculator" />
				<form>
					<label>Original Gravity</label>
					<input type="text" placeholder="1050" />
					<br />
					<label>Final Gravity</label>
					<input type="text" placeholder="1010" />
					<br />
					<input type="submit" />
				</form>
			</Page>
		);
	}
}

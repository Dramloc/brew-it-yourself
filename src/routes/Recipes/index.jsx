import { Component } from 'preact';
import Helmet from 'preact-helmet';
import fetch from 'isomorphic-fetch';
import { Page } from '../../components/Page';

function RecipeList({ recipes }) {
	return <span>RecipeList</span>;
}

export default class Recipes extends Component {
	state = {
		recipes: null
	};

	fetchRecipes() {
		return fetch('https://api.punkapi.com/v2/beers')
			.then(response => response.json())
			.then(recipes => this.setState({ recipes }));
	}

	componentDidMount() {
		this.fetchRecipes();
	}

	render(_, { recipes }) {
		return (
			<Page>
				<Helmet title="Recipes" />
				<RecipeList recipes={recipes} />
			</Page>
		);
	}
}

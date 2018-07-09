import fetch from 'isomorphic-fetch';
import { Component } from 'preact';
import Helmet from 'preact-helmet';
import { Page } from '../../components/Page';
import { RecipeList } from '../../components/RecipeList';
import { Placeholder as ListPlaceholder } from '../../components/RecipeList/Placeholder';

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
				{!recipes && <ListPlaceholder count={25} />}
				{recipes && <RecipeList recipes={recipes} />}
				</Page>
			);
		}
	}

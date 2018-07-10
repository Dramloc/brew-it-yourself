import { Component } from 'preact';
import Helmet from 'preact-helmet';
import { connect } from 'preact-redux';
import { Page } from '../../components/Page';
import { RecipeList } from '../../components/RecipeList';
import { Placeholder as ListPlaceholder } from '../../components/RecipeList/Placeholder';
import { doFetchRecipesIfNeeded } from '../../state/recipes/doFetchRecipesIfNeeded';
import { selectRecipes } from '../../state/recipes/selectRecipes';

export default connect(
	selectRecipes,
	dispatch => ({
		fetchRecipes: () => dispatch(doFetchRecipesIfNeeded())
	})
)(
	class Recipes extends Component {
		componentDidMount() {
			const { fetchRecipes } = this.props;
			fetchRecipes();
		}

		render({ result, fetching }) {
			return (
				<Page>
					<Helmet title="Recipes" />
					{fetching && <ListPlaceholder count={25} />}
					{result && <RecipeList recipes={result} />}
				</Page>
			);
		}
	}
);

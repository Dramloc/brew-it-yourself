import { Component } from 'preact';
import Helmet from 'preact-helmet';
import { connect } from 'preact-redux';
import { doFetchRecipes } from '../../actions/recipes';
import { Page } from '../../components/Page';
import { RecipeList } from '../../components/RecipeList';
import { Placeholder as ListPlaceholder } from '../../components/RecipeList/Placeholder';

export default connect(
	state => state.recipes,
	dispatch => ({
		fetchRecipes: () => dispatch(doFetchRecipes())
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

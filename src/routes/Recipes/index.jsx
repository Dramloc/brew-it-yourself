import { Component } from 'preact';
import Helmet from 'preact-helmet';
import { connect } from 'preact-redux';
import { bindActionCreators } from 'redux';
import { Page } from '../../components/Page';
import { RecipeList } from '../../components/RecipeList';
import { Placeholder as ListPlaceholder } from '../../components/RecipeList/Placeholder';
import { doFetchList as doFetchRecipesList } from '../../state/ducks/recipes/actions';
import { selectListFetching, selectListHydratedResult } from '../../state/ducks/recipes/selectors';

export class Recipes extends Component {
	componentDidMount() {
		const { doFetchRecipesList } = this.props;
		doFetchRecipesList();
	}

	render({ recipes, fetching }) {
		return (
			<Page>
				<Helmet title="Recipes" />
				{fetching && <ListPlaceholder count={25} />}
				{recipes && <RecipeList recipes={recipes} />}
			</Page>
		);
	}
}

export default connect(
	state => ({
		recipes: selectListHydratedResult(state),
		fetching: selectListFetching(state)
	}),
	dispatch => bindActionCreators({ doFetchRecipesList }, dispatch)
)(Recipes);

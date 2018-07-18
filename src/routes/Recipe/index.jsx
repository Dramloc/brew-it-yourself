import { Component } from 'preact';
import Helmet from 'preact-helmet';
import { connect } from 'preact-redux';
import { bindActionCreators } from 'redux';
import { Page } from '../../components/Page';
import { RecipeListItem } from '../../components/RecipeList/Item';
import { Placeholder as RecipeListItemPlaceholder } from '../../components/RecipeList/Item/Placeholder';
import { doFetchDetails } from '../../state/ducks/recipes/actions';
import {
	selectDetailsFetching,
	selectDetailsHydratedResult
} from '../../state/ducks/recipes/selectors';

export class Recipe extends Component {
	componentDidMount() {
		const { id, doFetchDetails } = this.props;
		doFetchDetails(id);
	}

	render({ recipe, fetching }) {
		return (
			<Page>
				<Helmet title="Recipe" />
				{fetching && <RecipeListItemPlaceholder />}
				{recipe && <RecipeListItem recipe={recipe} />}
			</Page>
		);
	}
}

export default connect(
	state => ({
		recipe: selectDetailsHydratedResult(state),
		fetching: selectDetailsFetching(state)
	}),
	dispatch => bindActionCreators({ doFetchDetails }, dispatch)
)(Recipe);

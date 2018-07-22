import Helmet from 'preact-helmet';
import { connect } from 'preact-redux';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { Page } from '../../components/Page';
import { RecipeListItem } from '../../components/RecipeList/Item';
import { Placeholder as RecipeListItemPlaceholder } from '../../components/RecipeList/Item/Placeholder';
import { doFetchDetails, doSelectDetails } from '../../state/ducks/recipes/actions';
import {
	selectDetailsFetching,
	selectDetailsHydratedResult
} from '../../state/ducks/recipes/selectors';

const Recipe = ({ recipe, fetching }) => (
	<Page>
		<Helmet title="Recipe" />
		{fetching && <RecipeListItemPlaceholder />}
		{recipe && <RecipeListItem recipe={recipe} />}
	</Page>
);

export default compose(
	connect(
		state => ({
			recipe: selectDetailsHydratedResult(state),
			fetching: selectDetailsFetching(state)
		}),
		dispatch => bindActionCreators({ doFetchDetails, doSelectDetails }, dispatch)
	),
	lifecycle({
		componentDidMount(props) {
			const { id, doFetchDetails, doSelectDetails } = this.props;
			doSelectDetails(id);
			doFetchDetails(id);
		}
	})
)(Recipe);

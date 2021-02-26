import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { isCollectionFetchingSelector } from '../../redux/shop/shop.selectors'
import WithSpinner from '../WithSpinner/WithSpinner'
import CollectionsOverview from './CollectionsOverview'

const mapStateToProps = createStructuredSelector({
  isLoading: isCollectionFetchingSelector,
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer

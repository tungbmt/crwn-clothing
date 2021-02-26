import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import WithSpinner from '../../components/WithSpinner/WithSpinner'
import { isCollectionFetchedSelector } from '../../redux/shop/shop.selectors'
import CollectionPage from './CollectionPage'

const mapStateToProps = createStructuredSelector({
  isLoading: state => !isCollectionFetchedSelector(state),
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage)

export default CollectionPageContainer

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview'
import WithSpinner from '../../components/WithSpinner/WithSpinner'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import {
  isCollectionFetchedSelector,
  isCollectionFetchingSelector,
} from '../../redux/shop/shop.selectors'
import CollectionPage from '../CollectionPage/CollectionPage'
import './ShopPage.scss'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props
    fetchCollectionsStartAsync()
  }

  render() {
    const { match, isCollectionFetched, isCollectionFetching } = this.props

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionFetched}
              {...props}
            />
          )}
        />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: isCollectionFetchingSelector,
  isCollectionFetched: isCollectionFetchedSelector,
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)

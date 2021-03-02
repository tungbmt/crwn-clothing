import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview'
import Spinner from '../../components/Spinner/Spinner'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import CollectionPage from '../CollectionPage/CollectionPage'
import './ShopPage.scss'

const ShopPage = ({ match }) => {
  const dispatch = useDispatch()
  const isCollectionsOverviewLoading = useSelector(
    state => state.shop.isFetching
  )
  const isCollectionsLoaded = useSelector(state => !!state.shop.collections)

  useEffect(() => {
    dispatch(fetchCollectionsStart())
  }, [dispatch])

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={() =>
          isCollectionsOverviewLoading ? <Spinner /> : <CollectionsOverview />
        }
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={() => (!isCollectionsLoaded ? <Spinner /> : <CollectionPage />)}
      />
    </div>
  )
}

export default ShopPage

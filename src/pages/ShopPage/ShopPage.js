import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverviewContainer'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import CollectionPageContainer from '../CollectionPage/CollectionPageContainer'
import './ShopPage.scss'

const ShopPage = ({ match }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCollectionsStart())
  }, [dispatch])

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  )
}

export default ShopPage

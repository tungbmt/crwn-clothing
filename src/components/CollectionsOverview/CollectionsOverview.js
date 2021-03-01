import React from 'react'
import { useSelector } from 'react-redux'
import CollectionPreview from '../CollectionPreview/CollectionPreview'
import './CollectionsOverview.scss'

const CollectionsOverview = () => {
  const collections = useSelector(state => state.shop.collections)
  const collectionsForPreview = collections ? Object.values(collections) : []

  return (
    <div className='collections-overview'>
      {collectionsForPreview.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  )
}

export default CollectionsOverview

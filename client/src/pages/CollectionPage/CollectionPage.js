import React from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import CollectionItem from '../../components/CollectionItem/CollectionItem'
import './CollectionPage.scss'

const CollectionPage = () => {
  const match = useRouteMatch('/shop/:collectionId')

  const collection = useSelector(
    state => state.shop?.collections[match.params.collectionId]
  )

  const { title, items } = collection
  return (
    <div className='collection-page'>
      <h2 className='title'>{title.toUpperCase()}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default CollectionPage

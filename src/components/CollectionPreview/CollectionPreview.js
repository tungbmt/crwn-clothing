import React from 'react'
import CollectionItem from '../CollectionItem/CollectionItem'
import './CollectionPreview.scss'

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((_, index) => index < 4)
        .map(({ id, ...otherProps }) => (
          <CollectionItem key={id} {...otherProps} />
        ))}
    </div>
  </div>
)

export default CollectionPreview

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { shopCollectionsSelector } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../CollectionPreview/CollectionPreview'
import './CollectionsOverview.scss'

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: shopCollectionsSelector,
})

export default connect(mapStateToProps)(CollectionsOverview)

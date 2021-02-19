import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'
import { shopCollectionsSelector } from '../../redux/shop/shop.selectors'
import './ShopPage.scss'

const ShopPage = ({ collections }) => (
  <div className='shop-page'>
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: shopCollectionsSelector,
})

export default connect(mapStateToProps)(ShopPage)

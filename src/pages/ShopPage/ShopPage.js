import React, { Component } from 'react'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'
import SHOP_DATA from './data'
import './ShopPage.scss'

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  }

  render() {
    const { collections } = this.state
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    )
  }
}

export default ShopPage

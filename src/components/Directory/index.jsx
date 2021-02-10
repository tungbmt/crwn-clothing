import React, { Component } from 'react'
import MenuItem from '../MenuItem'
import './Directory.scss'

class Directory extends Component {
  state = {
    sections: [
      {
        title: 'hats',
        imageUrl: '/images/hats.png',
        id: 1,
        linkUrl: 'shop/hats',
      },
      {
        title: 'jackets',
        imageUrl: '/images/jackets.png',
        id: 2,
        linkUrl: 'shop/jackets',
      },
      {
        title: 'sneakers',
        imageUrl: '/images/sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers',
      },
      {
        title: 'women',
        imageUrl: '/images/women.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/women',
      },
      {
        title: 'mens',
        imageUrl: '/images/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens',
      },
    ],
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, id, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    )
  }
}

export default Directory

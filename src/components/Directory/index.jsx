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
        title: 'men',
        imageUrl: '/images/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/men',
      },
    ],
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...props }) => (
          <MenuItem key={id} {...props} />
        ))}
      </div>
    )
  }
}

export default Directory

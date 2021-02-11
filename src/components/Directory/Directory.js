import React, { Component } from 'react'
import MenuItem from '../MenuItem/MenuItem'
import SECTION_DATA from './data'
import './Directory.scss'

class Directory extends Component {
  state = {
    sections: SECTION_DATA,
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    )
  }
}

export default Directory

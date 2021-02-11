import React, { Component } from 'react'
import MenuItem from '../MenuItem'
import SECTION_DATA from './data'
import './Directory.scss'

class Directory extends Component {
  state = {
    sections: SECTION_DATA,
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    )
  }
}

export default Directory

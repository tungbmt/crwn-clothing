import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { directorySectionsSelector } from '../../redux/directory/directory.selectors'
import MenuItem from '../MenuItem/MenuItem'
import './Directory.scss'

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: directorySectionsSelector,
})

export default connect(mapStateToProps)(Directory)

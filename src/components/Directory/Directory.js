import React from 'react'
import { useSelector } from 'react-redux'
import MenuItem from '../MenuItem/MenuItem'
import './Directory.scss'

const Directory = () => {
  const sections = useSelector(state => state.directory.sections)

  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  )
}

export default Directory

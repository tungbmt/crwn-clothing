import React from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import './MenuItem.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const match = useRouteMatch()
  const history = useHistory()

  return (
    <div
      className={`menu-item ${size || ''}`.trim()}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem

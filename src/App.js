import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/shop'>
          <ShopPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App

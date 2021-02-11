import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'

import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import SignInPage from './pages/SignInPage/SignInPage'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/shop'>
          <ShopPage />
        </Route>
        <Route exact path='/signin'>
          <SignInPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App

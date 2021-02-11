import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'

import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import SignInPage from './pages/SignInPage/SignInPage'
import { auth } from './firebase/firebase'

class App extends Component {
  state = {
    currentUser: null,
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>
      this.setState({ currentUser: user })
    )
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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
}

export default App

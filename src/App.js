import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import SignInPage from './pages/SignInPage/SignInPage'
import './App.scss'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { createStructuredSelector } from 'reselect'
import { currentUserSelector } from './redux/user/user.selectors'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'

class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    // const { setCurrentUser } = this.props
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignInPage />
            }
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

import React, { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import SignInPage from './pages/SignInPage/SignInPage'
import { useDispatch, useSelector } from 'react-redux'
import { checkUserSession } from './redux/user/user.actions'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'
import './App.scss'

const App = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user.currentUser)

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

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
          render={() => (currentUser ? <Redirect to='/' /> : <SignInPage />)}
        />
      </Switch>
    </div>
  )
}

export default App

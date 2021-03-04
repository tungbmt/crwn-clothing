import React, { lazy, Suspense, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { checkUserSession } from './redux/user/user.actions'
import Spinner from './components/Spinner/Spinner'
import './App.scss'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'))
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage'))
const CheckoutPage = lazy(() => import('./pages/CheckoutPage/CheckoutPage'))

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
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignInPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  )
}

export default App

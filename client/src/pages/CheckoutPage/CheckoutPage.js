import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import StripeCheckoutButton from '../../components/StripeButton/StripeButton'
import './CheckoutPage.scss'

const CheckoutPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const total = cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className='total'> TOTAL: ${total}</div>
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - CVC: 111
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  )
}

export default CheckoutPage

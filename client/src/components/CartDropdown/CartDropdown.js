import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import CartItem from '../CartItem/CartItem'
import CustomButton from '../CustomButton/CustomButton'
import './CartDropdown.scss'

const CartDropdown = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const history = useHistory()
  const dispatch = useDispatch()

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout')
          dispatch(toggleCartHidden())
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
}

export default CartDropdown

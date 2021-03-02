import React from 'react'
import { useDispatch } from 'react-redux'
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from '../../redux/cart/cart.actions'
import './CheckoutItem.scss'

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch()

  const { name, imageUrl, price, quantity } = cartItem
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <div className='name'>{name}</div>
      <div className='quantity'>
        <div className='arrow' onClick={() => dispatch(removeItem(cartItem))}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </div>
      <div className='price'>{price}</div>
      <div
        className='remove-button'
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem

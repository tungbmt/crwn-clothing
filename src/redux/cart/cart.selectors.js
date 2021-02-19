import { createSelector } from 'reselect'

const cartSelector = state => state.cart

export const cartItemsSelector = createSelector(
  [cartSelector],
  cart => cart.cartItems
)

export const cartHiddenSelector = createSelector(
  [cartSelector],
  cart => cart.hidden
)

export const cartItemsCountSelector = createSelector(
  [cartItemsSelector],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
)

export const cartTotalSelector = createSelector(
  [cartItemsSelector],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
)

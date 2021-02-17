export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItems = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  )

  if (existingCartItems) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItems, quantity: cartItem.quantity + 1 }
        : cartItems
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

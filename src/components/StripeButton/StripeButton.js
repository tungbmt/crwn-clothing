import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51INUkrCRxaIwcg9CKbzsn4jaRsL2VzDQcUilWGBczWBJCeF7fOxelG3xWyeAUZ5xuTGlNlSKeEzd2A3KAudPRBnq00TAplAKsJ'

  const onToken = token => {
    console.log(token)
    alert('Payment Successfully')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='/src/assets/crown.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
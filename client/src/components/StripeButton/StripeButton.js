import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51INUkrCRxaIwcg9CKbzsn4jaRsL2VzDQcUilWGBczWBJCeF7fOxelG3xWyeAUZ5xuTGlNlSKeEzd2A3KAudPRBnq00TAplAKsJ'

  const onToken = token => {
    axios
      .post('payment', {
        amount: priceForStripe,
        token,
      })
      .then(response => {
        alert('Payment successful')
      })
      .catch(error => {
        console.log(`Payment error: ${JSON.parse(error)}`)
        alert(
          'There was an issue with your payment. Please sure you use the provided credit cart.'
        )
      })
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='/logo.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton

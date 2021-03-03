require('dotenv').config()
const express = require('express')
const path = require('path')

const { NODE_ENV, PORT = 5000, STRIPE_SECRET_KEY } = process.env

const stripe = require('stripe')(STRIPE_SECRET_KEY)

const middlewares = [express.json(), express.urlencoded({ extended: true })]

const app = express()

app.use(...middlewares)

if (NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

app.listen(PORT, error => {
  if (error) throw error
  console.log(`Server running on port ${PORT}`)
})

app.post('/payment', (req, res) => {
  const { token, amount } = req.body

  const body = {
    source: token.id,
    currency: 'usd',
    amount,
  }

  stripe.charges
    .create(body)
    .then(stripeResponse => {
      res.status(200).send({ success: stripeResponse })
    })
    .catch(stripeError => {
      res.status(500).send({ error: stripeError })
    })
})

const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const dotenv = require('dotenv');
dotenv.config();
const stripe = require('stripe')(process.env.SK_TEST);
app.use(express.static("Public"))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/home.html"))
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/about.html"))
})
app.get('/shop', (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/shop.html"))
})
app.get('/garden', (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/garden.html"))
})
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/contact.html"))
})
app.get('/shopping-cart', (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/shopping-cart.html"))
})
app.get('/testheader', (req, res) => {
  res.sendFile(path.join(__dirname, "./Public/product-page.html"))
})
// This is your test secret API key.

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  console.log(req.body);
  // const session = await stripe.checkout.sessions.create({
  //   line_items: [
  //     {
  //       // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
  //       price: '{{PRICE_ID}}',
  //       quantity: 1,
  //     },
  //   ],
  //   mode: 'payment',
  //   success_url: `${YOUR_DOMAIN}/success.html`,
  //   cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  // });

  // res.redirect(303, session.url);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
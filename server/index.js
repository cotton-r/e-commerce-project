const express = require('express');
const cors = require('cors');
const registerRouter = require('./routes/register');
const productsRouter = require('./routes/products');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use('/register', registerRouter);
app.use('/products', productsRouter);

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'first endpoint is working!'})
});

// start server
app.listen(process.env.PORT || 3002, () => {
  console.log('Server listening')
});
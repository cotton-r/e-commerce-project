const express = require('express');
const cors = require('cors');
const { pool } = require('./db/index');
const registerRouter = require('./routes/register');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'first endpoint is working!'})
});

const getAllProducts = (req, res) => {
  pool.query('SELECT * FROM products ORDER BY product_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows);
  })
};

const getProductsByCategory = (req, res) => {
  pool.query(`SELECT * FROM products WHERE category_name = ${req.query.category_name}`, (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
};

app
 .route('/products')
 // GET endpoint
 .get(getAllProducts)

// start server
app.listen(process.env.PORT || 3002, () => {
  console.log('Server listening')
});
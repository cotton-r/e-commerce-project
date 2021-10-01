const express = require('express');
const pool = require('../db/index');
const productsRouter = express.Router();

// get all products
productsRouter.get('/', (req, res, next) => {
  pool.query('SELECT * FROM products ORDER BY product_id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  });
});
  
// get products by category
productsRouter.get('/:category', (req, res) => {
  pool.query('SELECT * FROM products WHERE category_name = $1 ORDER BY product_id ASC', 
  [req.params.category], 
  (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  });
});

productsRouter.get('/:category/:individualProduct', (req, res) => {
  pool.query('SELECT * FROM products WHERE product_name = $1', [req.params.product_name], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  });
});

module.exports = productsRouter;
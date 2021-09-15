const express = require('express');
const pool = require('../db/index');
const productsRouter = express.Router();

// get all products
productsRouter.get('/', (req, res) => {
  pool.query('SELECT * FROM products ORDER BY product_id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  });
});
  
// get products by category
productsRouter.get('/:category', (req, res) => {
  pool.query(`SELECT * FROM products WHERE category_name = ${req.query.category_name}`, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  });
})

module.exports = productsRouter;
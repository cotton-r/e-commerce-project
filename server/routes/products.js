const express = require('express');
const pool = require('../db/index');
const productsRouter = express.Router();

productsRouter.get('/', async (req, res) => {

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


});

module.exports = productsRouter;


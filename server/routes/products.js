var express = require('express');
var router = express.Router();
var models = require('../models/index');
const path = require('path');

/* get list products */
router.get('/', function (req, res, next) {
  models.Products.findAll({
    include: [{
      model: models.Specs
    }],
    order: [
      ['createdAt', 'ASC']
    ]
  })
    .then((products) => {
      res.json(products)
    })
    .catch(err => {
      res.json({
        error: true,
        message: err
      })
    })
});

/* add new ads */
router.post('/', (req, res) => {
  let { title, rate, description, price, brand, detailProduct, category } = req.body
  let { file } = req.files;
  let filename 
  models.Products.create({
    title,
    rate,
    description,
    price,
    brand,
    detail_product: detailProduct,
    category
  })
    .then(products => res.json(products))
    .catch(err => {
      console.log(err)
      res.json({
        error: true,
        message: err
      })
    })
})

/* find product details */
router.get('/:id', (req, res) => {
  models.Products.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      model: models.Specs
    }]
  })
    .then(products => {
      res.json(products)
    })
    .catch(err => {
      console.log(err);
      res.json({
        error: true,
        message: err
      })
    })
})

/* delete product */
router.delete('/:id', (req, res) => {
  models.Products.destroy({
    returning: true,
    where: {
      id: req.params.id
    }
  })
    .then(product => res.json(product))
    .catch(err => res.json(err))
})

/* Buy a products */
router.put('/buy/:id', (req, res) => {
  const { color, capacity, quantity } = req.body;
  models.Products.findOne({
    where: {
      id: req.params.id
    }
  })
})

module.exports = router;

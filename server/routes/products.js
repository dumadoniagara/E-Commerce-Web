var express = require('express');
var router = express.Router();
var models = require('../models/index');

/* get list products */
router.get('/', function (req, res, next) {
  models.Products.findAll({
    include: [{
      model: models.Specs
    }]
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

module.exports = router;

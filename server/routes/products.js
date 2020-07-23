var express = require('express');
var router = express.Router();
var models = require('../models/index');
const path = require('path');
const server_URL = "http://localhost:3001";

/* get list products */
router.get('/', function (req, res, next) {
  let page = Number(req.header('page')) || 1;
  let limit = Number(req.header('limit')) || 4;
  let offset = (page - 1) * limit;

  console.log('PAGE:', page, 'LIMIT:', limit);

  models.Products.findAll({
    order: [
      ['createdAt', 'ASC']
    ],
    limit,
    offset
  })
    .then(products => {
      let result = products.map(item => ({
        ...item.dataValues,
        image: item.dataValues.image ? server_URL + item.dataValues.image[0] : null
      }))
      res.json(result)
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

  let { title, rate, description, price, brand, detailProduct, category, fileId, color, capacities, stock, size } = req.body;
  let { file } = req.files;
  let filename = `${fileId}-${file.name}`;
  console.log(title, rate, description, price, brand, detailProduct, category, fileId, color.split(','), capacities.split(','), stock, size)

  file.mv(path.join(__dirname, "..", "public", "images", filename), err => {
    if (err) console.log('error file upload:', err);
    else {
      models.Products.create({
        title,
        rate,
        description,
        price,
        brand,
        detail_product: detailProduct,
        category,
        image: [`/images/${filename}`],
        color: color.split(','),
        stock,
        size: size,
        capacities: capacities.split(',')
      })
        .then(products => {
          res.json(products)
        })
        .catch(err => {
          console.log(err)
          res.json({
            error: true,
            message: err
          })
        })
    }
  })
})

/* find product details */
router.get('/:id', (req, res) => {
  models.Products.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(product => {
      console.log(product.dataValues);
      let result = {
        ...product.dataValues,
        image: server_URL + product.dataValues.image[0]
      }
      res.json(result)
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

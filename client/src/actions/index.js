
/* Load Product start */
export const loadProduct = () => {
   return {
      type: 'LOAD_PRODUCT'
   }
}

export const loadProductSuccess = (product) => ({
   type: 'LOAD_PRODUCT_SUCCESS',
   product
})

export const loadProductFail = () => ({
   type: 'LOAD_PRODUCT_FAIL'
})
/* Load Product end */

/* Post Product start */

export const postProduct = ({ title, rate, description, price, brand, detailProduct, category }) => {
   console.log('action post product, title:', title)
   return {
      type: 'POST_PRODUCT',
      title,
      rate,
      description,
      price,
      brand,
      detailProduct,
      category
   }
}

export const postProductRedux = (title, rate, description, price, brand, detailProduct, category) => ({
   type: 'POST_PRODUCT_REDUX',
   title,
   rate,
   description,
   price,
   brand,
   detailProduct,
   category
})

export const postProductSuccess = (product) => ({
   type: 'POST_PRODUCT_SUCCESS',
   product
})

export const postProductFail = () => ({
   type: 'POST_PRODUCT_FAIL'
})



/* Post Product end */



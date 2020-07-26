/* Load Product start */
export const loadProduct = (page = 1) => {
   return {
      type: 'LOAD_PRODUCT',
      page
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
export const postProduct = ({ title, rate, description, price, brand, detailProduct, category, file, color, stock, size, capacities }, history) => {
   let fileId = Date.now();
   return {
      type: 'POST_PRODUCT',
      title,
      rate,
      description,
      price,
      brand,
      detailProduct,
      category,
      file,
      color,
      stock,
      capacities,
      size,
      fileId,
      history
   }
}

export const postProductSuccess = (product) => ({
   type: 'POST_PRODUCT_SUCCESS',
   product
})

export const postProductFail = () => ({
   type: 'POST_PRODUCT_FAIL'
})
/* Post Product end */

/* Load Details Start */
export const loadDetails = (id) => ({
   type: 'LOAD_DETAILS',
   id
})

export const loadDetailsSuccess = (details) => ({
   type: 'LOAD_DETAILS_SUCCESS',
   details
})

export const loadDetailsFail = () => ({
   type: 'LOAD_DETAILS_FAIL'
})

export const resetStateProduct = () => ({
   type: 'RESET_PRODUCT'
})

export const addTestimonial = (testimoni) => ({
   type: 'ADD_TESTIMONIAL',
   testimoni
})

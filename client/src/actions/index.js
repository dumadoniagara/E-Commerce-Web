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

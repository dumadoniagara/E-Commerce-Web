export const loadProduct = () => ({
   type: 'LOAD_COMMENT'
})

export const loadProductSuccess = (product) => ({
   type: 'LOAD_COMMENT_SUCCESS',
   product
})

export const loadProductFail = () => ({
   type: 'LOAD_COMMENT_FAIL'
})

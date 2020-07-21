const product = (state = [], action) => {
   switch (action.type) {
      case 'LOAD_PRODUCT_SUCCESS':
         return action.product.map((item) => ({
            ...item,
            sent: true
         }))
      case 'POST_PRODUCT_FAIL':
      case 'LOAD_PRODUCT_FAIL':
      default:
         return state;
   }
}

export default product;
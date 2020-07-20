const product = (state = [], action) => {
   switch (action.type) {
      case 'LOAD_PRODUCT_SUCCESS':
         return action.product.map((item) => {
            return item;
         })

      case 'LOAD_PRODUCT_FAIL':
      default:
         return state;
   }
}

export default product;
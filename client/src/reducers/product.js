const product = (state = [], action) => {
   switch (action.type) {
      case 'LOAD_PRODUCT_SUCCESS':
         console.log('product berhasil di load di reducer')
         return action.product.map((item) => {
            return item;
         })

      case 'LOAD_PRODUCT_FAIL':
      default:
         return state;
   }
}

export default product;
const product = (state = { numOfPages: 0, rows: [] }, action) => {
   switch (action.type) {
      case 'LOAD_PRODUCT_SUCCESS':
         return {
            ...state,
            numOfPages: action.product.numOfPages,
            rows: [...state.rows,
            ...action.product.result.map((item) => ({
               ...item,
               sent: true
            }))
            ]
         }
      case 'POST_PRODUCT_SUCCESS':
         return {
            ...state,
            rows: [...state.rows,
            {
               ...action.product,
               sent: true
            }
            ]
         }
      case 'RESET_PRODUCT':
         return { numOfPages: 0, rows: [] }
      case 'POST_PRODUCT_FAIL':
      case 'LOAD_PRODUCT_FAIL':
      default:
         return state;
   }
}

export default product; 
const detail = (state = {}, action) => {
   switch (action.type) {
      case 'LOAD_DETAILS_SUCCESS':
         return action.details;
      case 'LOAD_DETAILS_FAIL':
      default:
         return state;
   }
}

export default detail; 
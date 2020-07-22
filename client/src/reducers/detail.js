const detail = (state = [], action) => {
   switch (action.type) {
      case 'LOAD_DETAILS_SUCCESS':
         return console.log('action details di reducer details:', action.details)
      default:
         return state;
   }
}

export default detail;
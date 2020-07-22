const detail = (state = [], action) => {
   switch (action.type) {
      case 'LOAD_DETAILS_SUCCESS':
         return console.log('action details di reducer details:', action.details)
      case 'LOAD_DETAILS_FAIL':
         console.log('load details GATOT -->>')
      default:
         return state;
   }
}

export default detail;
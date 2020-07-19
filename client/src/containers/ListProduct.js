import React, { Component } from 'react';
import CardProduct from './CardProduct';
// import { connect } from 'react-redux';

export default class ListProduct extends Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <div className="container">
            <div className="row">
               {[...Array(10)].map((x, i) => <CardProduct key={i} />)}
            </div>
         </div>
      )
   }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = (dispatch) => ({

// })

// export default connect(
//    mapStateToProps,
//    mapDispatchToProps
// )(ListProduct)
import React, { Component } from 'react';
import CardProduct from './CardProduct';
import { loadProduct } from '../actions/index';
import { connect } from 'react-redux';

class ListProduct extends Component {
   constructor(props) {
      super(props)
   }

   componentDidMount() {
      this.props.loadProduct();
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

const mapStateToProps = (state) => ({
   product: state.product
})

const mapDispatchToProps = (dispatch) => ({
   loadProduct: () => dispatch(loadProduct())
})

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ListProduct)
import React, { Component } from 'react';
import CardProduct from './CardProduct';
import { loadProduct } from '../actions/index';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

class ListProduct extends Component {
   constructor(props) {
      super(props)
      this.state = {
         page: 1,
         hasMore: true
      }
   }

   componentDidMount() {
      this.props.loadProduct();
   }

   render() {
      const products = this.props.product.map((item, index) => {
         return <CardProduct
            key={index}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            brand={item.brand}
            detailProduct={item.detail_product}
            image={item.image}
            vote={item.vote}
            rate={item.rate}
         />
      })
      return (
         <div className="container">
            <div className="row row-cols-1 row-cols-md-4">
               {products}
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
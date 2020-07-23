import React, { Component } from 'react';
import CardProduct from './CardProduct';
import { loadProduct, resetStateProduct } from '../actions/index';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

class ListProduct extends Component {
   constructor(props) {
      super(props)
      this.state = {
         page: 1,
         hasMore: true,
         limit: 4
      }
   }

   componentDidUpdate() {
      console.log(this.state.page);
   }

   componentDidMount() {
      this.props.loadProduct(this.state.page);
   }

   componentWillUnmount() {
      this.props.resetStateProduct();
   }

   fetchMoreData = () => {
      if (this.props.numOfPages >= this.state.page) {
         this.setState(
            state => ({ page: state.page + 1 }),
            () => {
               this.props.loadProduct(this.state.page)
            })
      }
      if (this.props.numOfPages === this.state.page) {
         this.setState({ hasMore: false })
      }
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
         <InfiniteScroll
            dataLength={this.props.product.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={
               <div className="d-flex justify-content-center">
                  <h4>Loading...</h4>
               </div>
            }
            endMessage={
               <h4 className="d-flex justify-content-center">Data dari Backend sudah habis ...</h4>
            }
            scrollThreshold={1}
         >
            <div className="container">
               <div className="row row-cols-1 row-cols-md-4">
                  {products}
               </div>
            </div>
         </InfiniteScroll>
      )
   }
}

const mapStateToProps = (state) => ({
   product: state.product.rows,
   numOfPages: state.product.numOfPages
})

const mapDispatchToProps = (dispatch) => ({
   loadProduct: (page) => dispatch(loadProduct(page)),
   resetStateProduct: () => dispatch(resetStateProduct())
})

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ListProduct)
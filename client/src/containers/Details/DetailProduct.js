import React, { Component } from 'react';
import '../../styles/buy.css';
import { connect } from 'react-redux';
import convertPrice from '../../helpers/convertPrice';
import ReactMarkdown from 'react-markdown';
import Testimoni from './MiniDetails/Testimoni';
import ColorOptions from './MiniDetails/ColorOptions';
import SpecOptions from './MiniDetails/SpecOptions';
import Quantity from './MiniDetails/Quantity';

class DetailProduct extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isDetailTabActive: true,
         color: null,
         capacities: null,
         quantity: 1,
         like: false,
         pcs: 1
      }
   }

   changeTab = (e) => {
      e.preventDefault()
      let { isDetailTabActive } = this.state;
      this.setState({ isDetailTabActive: !isDetailTabActive })
   }

   handleColorChange = (color) => {
      this.setState({ color })
   }

   onIncrement = () => {
      this.setState({ pcs: this.state.pcs + 1 })
   }

   onDecrement = () => {
      this.setState({ pcs: this.state.pcs - 1 })
   }

   render() {

      const { isDetailTabActive } = this.state;
      const { brand, capacities, color, description, stock, detail_product, image, price, rate, testimonials, title, vote } = this.props.detail;
      let colors = color || [];
      let capacity = capacities || [];

      return (
         <div className="container">
            <div className="card mt-5 mb-2">
               <div className="row no-gutters">
                  <div className="col-md-4">
                     <img src={image} className="card-img" alt="gambar product" />
                  </div>

                  <div className="col-md-8">
                     <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6>Brand {brand} <small className="text-muted">vote ({!vote ? 0 : vote})</small></h6>
                        <p className="card-text"><small className="text-muted">PRICE</small></p>
                        <h5 style={{ marginTop: "-15px" }}>{convertPrice(price)}</h5>

                        <ColorOptions
                           colors={colors}
                           activeColor={this.state.color}
                        />

                        <SpecOptions
                           capacity={capacity}
                           activeCapacities={this.state.capacities}
                        />

                        <Quantity
                           stock={stock}
                           onIncrement={this.onIncrement}
                           onDecrement={this.onDecrement}
                           pcs={this.state.pcs}
                        />

                        <button type="button" className="btn btn-outline-info mt-2 btn-block">Buy item <i className="fa fa-cart-arrow-down fa-lg mx-2"></i></button>
                     </div>
                  </div>
               </div>
            </div>

            <div className="card">
               <div className="container">
                  <div className="col-md-12 product-info">
                     <ul className="nav nav-tabs">
                        <li className="nav-item" onClick={this.changeTab}>
                           <a className={isDetailTabActive ? "nav-link active" : "nav-link"} href="#">Product Detail</a>
                        </li>
                        <li className="nav-item" onClick={this.changeTab}>
                           <a className={!isDetailTabActive ? "nav-link active" : "nav-link"} href="#">Testimonial</a>
                        </li>
                     </ul>
                  </div>

                  <div className="row p-4">
                     {isDetailTabActive ? (<ReactMarkdown source={detail_product} />) : (<Testimoni testimoni={brand} />)}
                  </div>

               </div>
            </div>
         </div>
      )
   }
}

const mapStateToProps = (state) => ({
   detail: state.detail
})

export default connect(
   mapStateToProps,
   null
)(DetailProduct)
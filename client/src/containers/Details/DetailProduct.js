import React, { Component } from 'react';
import '../../styles/buy.css';
import { connect } from 'react-redux';
import convertPrice from '../../helpers/convertPrice';
import ReactMarkdown from 'react-markdown';
import Testimoni from './MiniDetails/Testimoni';
import ColorOptions from './MiniDetails/ColorOptions';
import SpecOptions from './MiniDetails/SpecOptions';
import Quantity from './MiniDetails/Quantity';
import BuyModal from './MiniDetails/BuyModal';

class DetailProduct extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isDetailTabActive: true,
         color: null,
         capacities: null,
         quantity: 1,
         like: false,
         pcs: 1,
         activeColor: null,
         activeCapacity: null,
         showModal: false
      }
   }


   changeTab = (e) => {
      e.preventDefault()
      let { isDetailTabActive } = this.state;
      this.setState({ isDetailTabActive: !isDetailTabActive })
   }

   onIncrement = () => {
      this.setState({ pcs: this.state.pcs + 1 })
   }

   onDecrement = () => {
      this.setState({ pcs: this.state.pcs - 1 })
   }

   handleActiveColor = (color) => {
      this.setState({ activeColor: color })
   }

   handleActiveCapacity = (capacity) => {
      this.setState({ activeCapacity: capacity })
   }

   toggleModal = () => {
      console.log('TEST TOGGLE MODAL')
      this.setState({ showModal: !this.state.showModal })
   }

   render() {

      const { isDetailTabActive } = this.state;
      const { brand, capacities, color, description, id, category, stock, detail_product, image, price, rate, testimonials, title, vote } = this.props.detail;
      let colors = color || [];
      let capacity = capacities || [];

      return (
         <div className="container">
            <div className="card mt-5 mb-2">
               <div className="row no-gutters">
                  <div className="col-md-4">
                     <img src={image} className="card-img" alt="gambar product" />
                  </div>

                  <div className="col-md-6 offset-md-1">
                     <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6>Brand {brand} <small className="text-muted">vote ({!vote ? 0 : vote})</small></h6>
                        <p className="card-text"><small className="text-muted">PRICE</small></p>
                        <h5 style={{ marginTop: "-15px" }}>{convertPrice(price)}</h5>

                        <ColorOptions
                           colors={colors}
                           activeColor={this.state.activeColor}
                           onChange={this.handleActiveColor}
                        />

                        <SpecOptions
                           capacity={capacity}
                           activeCapacity={this.state.activeCapacity}
                           onChange={this.handleActiveCapacity}
                        />

                        <Quantity
                           stock={stock}
                           onIncrement={this.onIncrement}
                           onDecrement={this.onDecrement}
                           pcs={this.state.pcs}
                        />
                        <button type="button" onClick={this.toggleModal} className="btn btn-outline-info mt-2 btn-block">Buy item <i className="fa fa-cart-arrow-down fa-lg mx-2"></i></button>
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
                     {isDetailTabActive ? (<ReactMarkdown source={detail_product} />) : (<Testimoni testimoni={testimonials} />)}
                  </div>

               </div>
            </div>

            {/* Buy Modal triggered by buy button */}
            <BuyModal
               title={title}
               category={category}
               color={this.state.activeColor}
               capacity={this.state.activeCapacity}
               show={this.state.showModal}
               closeModal={this.toggleModal}
               id={id}
            />

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
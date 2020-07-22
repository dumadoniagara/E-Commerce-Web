import React, { Component } from 'react';
import '../../styles/buy.css';
import { connect } from 'react-redux';
import convertPrice from '../../helpers/convertPrice';
import ReactMarkdown from 'react-markdown';
import Testimoni from './Testimoni';

class DetailProduct extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isDetailTabActive: true
      }
   }

   changeTab = (e) => {
      e.preventDefault()
      let { isDetailTabActive } = this.state;
      this.setState({ isDetailTabActive: !isDetailTabActive })
   }

   render() {
      console.log('state detail sekarang:', this.props.detail)
      const { isDetailTabActive } = this.state;

      const { brand, capacities, color, description, detail_product, image, price, rate, testimonials, title, vote } = this.props.detail;
      return (
         <div className="container">
            <div className="card mb-3">
               <div className="row no-gutters">
                  <div className="col-md-4">
                     <img src={image} className="card-img" alt="gambar product" />
                  </div>
                  <div className="col-md-8">
                     <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6>Brand {brand} </h6>
                        <p className="card-text"><small className="text-muted">PRICE</small></p>
                        <h5>{convertPrice(price)}</h5>
                     </div>
                  </div>
               </div>

               <div className="card mt-3">
                  <div className="container-fluid">
                     <div className="col-md-12 product-info">
                        <ul class="nav nav-tabs">
                           <li class="nav-item" onClick={this.changeTab}>
                              <a class={isDetailTabActive ? "nav-link active" : "nav-link"} href="#">Product Detail</a>
                           </li>
                           <li class="nav-item" onClick={this.changeTab}>
                              <a class={!isDetailTabActive ? "nav-link active" : "nav-link"} href="#">Testimonial</a>
                           </li>
                        </ul>
                     </div>
                     <div className="row p-4">
                        {isDetailTabActive ? (<ReactMarkdown source={detail_product} />) : (<Testimoni testimoni={brand} />)}
                     </div>
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
import React, { Component } from 'react';
import { connect } from 'react-redux'
import StarRatings from 'react-star-ratings';
import convertPrice from '../helpers/convertPrice';
import { Link } from 'react-router-dom';
import { loadDetails } from '../actions'

class CardProduct extends Component {

   onDetail = () => {
      console.log(this.props)
      this.props.loadDetails(this.props.id)
   }

   render() {
      return (
         <>
            <div className="col mb-4">
               <div className="card p-2 h-100">
                  <img src={this.props.image ? this.props.image : (process.env.PUBLIC_URL + '/no-image.png')} className="card-img-top my-auto image" />
                  <div className="card-body">
                     <h4 className="card-title">{this.props.title}</h4>
                     <StarRatings
                        rating={this.props.rate}
                        numberOfStars={5}
                        starDimension="20px"
                        starRatedColor="#dc9019"
                        height="10px"
                     />
                     <p className="card-text mt-3">{this.props.description}</p>
                  </div>
                  <h5 className="text-left">{convertPrice(this.props.price)}</h5>
                  <Link to={`/detail/${this.props.id}`} type="button" onClick={this.onDetail} className="btn btn-outline-info">Detail item</Link>
               </div>
            </div>
         </>
      )
   }
}

const mapDispatchToProps = (dispatch) => ({
   loadDetails: (id) => dispatch(loadDetails(id))
})

export default connect(
   null,
   mapDispatchToProps
)(CardProduct)
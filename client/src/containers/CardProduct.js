import React from 'react';
import StarRatings from 'react-star-ratings';
import convertPrice from '../helpers/convertPrice';
import { Link } from 'react-router-dom'

export default function CardProduct(props) {
   return (
      <>
         <div className="col mb-4">
            <div className="card p-2 h-100">
               <img src={props.image ? props.image : (process.env.PUBLIC_URL + '/no-image.png')} className="card-img-top my-auto image" />
               <div className="card-body">
                  <h4 className="card-title">{props.title}</h4>
                  <StarRatings
                     rating={props.rate}
                     numberOfStars={5}
                     starDimension="20px"
                     starRatedColor="#dc9019"
                     height="10px"
                  />
                  <p className="card-text mt-3">{props.description}</p>
               </div>
               <h5 className="text-left">{convertPrice(props.price)}</h5>
               <Link to='/detail' type="button" className="btn btn-outline-info">Detail item</Link>
            </div>
         </div>
      </>
   )
}
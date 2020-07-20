import React from 'react';
import StarRatings from 'react-star-ratings';

export default function CardProduct(props) {
   console.log(props)
   return (
      <div className="col mb-4">
         <div className="card p-2 h-100">
            <img src="https://images.unsplash.com/photo-1587069292172-4a9922adc655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="card-img-top" />
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
            <h5 className="text-left">Rp. {props.price}</h5>
            <a href="#" className="btn btn-outline-info">Detail item</a>
         </div>
      </div>
   )
}
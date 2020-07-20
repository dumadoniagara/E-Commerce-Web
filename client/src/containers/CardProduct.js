import React from 'react'
import RatingStar from '../components/RatingStar';

export default function CardProduct(props) {
   return (
      <div className="col mb-4">
         <div className="card p-2 h-100">
            <img src="https://images.unsplash.com/photo-1587069292172-4a9922adc655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="card-img-top" />
            <div className="card-body">
               <h5 className="card-title">{props.title}</h5>
               <RatingStar />
               <p className="card-text">{props.description}</p>
            </div>
            <h5 className="text-left">Rp. {props.price}</h5>
            <a href="#" className="btn btn-outline-info">Detail item</a>
         </div>
      </div>
   )
}
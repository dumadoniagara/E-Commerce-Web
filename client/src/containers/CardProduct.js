import React from 'react'
import RatingStar from '../components/RatingStar';

export default function CardProduct(props) {
   return (
      <div className="col-md-4 my-3 product-item">
         <div className="card p-2">
            <img src="https://images.unsplash.com/photo-1587069292172-4a9922adc655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="card-img-top" />
            <div className="card-body">
               <h5 className="card-title">Product Title</h5>
               <RatingStar />
               <p className="mb-2 text-muted"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, hic eaque? Iste sunt aperiam eos commodi. Veniam reprehenderit autem doloribus. </p>
               <h6>Rp. 3.990.000,- </h6>
               <a href="#" className="btn btn-outline-info">Detail item</a>
            </div>
         </div>
      </div>
   )
}
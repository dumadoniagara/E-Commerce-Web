import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

export default function Testimoni(props) {
   const { testimoni } = props
   console.log('PROPS TESTIMONI:', testimoni);
   return (
      <div>
         {[...testimoni].map((item, index) => {
            return (
               <div className="row justify-content-between my-3" key={index}>
                  <div className="col-12 col-sm-6 d-flex align-items-center text-left">
                     <b>{item.name}</b>
                  </div>
                  <div className="col-12 col-sm-6 d-flex  justify-content-end">
                     <Rater total={5} rating={item.rate} interactive={false} />
                  </div>
                  <div className="col-12">
                     {item.text}
                  </div>
               </div>

            )
         })}
      </div >
   )
}

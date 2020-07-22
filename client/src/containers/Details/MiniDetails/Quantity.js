import React from 'react'

export default function Quantity(props) {
   let { stock, onIncrement, onDecrement, pcs } = props
   return (
      <div className="form">
         <h6><small className="text-muted">Quantity</small></h6>
         <span className=" my-1">

            {pcs >= 1 &&
               <span className="col-sm">
                  <button
                     onClick={onDecrement}
                     type="button"
                     className="btn btn-outline-danger btn-sm"
                     data-type="minus"
                     data-field="quant[2]"
                  >
                     <div className="fa fa-minus" />
                  </button>
               </span>
            }

            <input
               type="text"
               className="col-2 mx-2"
               style={{ textAlign: "center" }}
               value={pcs}
               readOnly={true}
            />
            {pcs < stock &&
               < span className="col-sm">
                  <button
                     onClick={onIncrement}
                     type="button"
                     className="btn btn-outline-primary btn-sm"
                     data-type="plus"
                     data-field="quant[2]"
                  ><div className="fa fa-plus" />
                  </button>
               </span>
            }
         </span>
      </div >
   )
}

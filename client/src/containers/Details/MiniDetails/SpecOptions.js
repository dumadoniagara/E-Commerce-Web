import React from 'react'

export default function SpecOptions(props) {
   let { capacity, activeCapacity} = props;
   let labelName = 'Choose Capacities';
   let specs = capacity;
   let activeSpec = activeCapacity;
   return (
      <div>
         <div className="my-1 form">
            <h6><small className="text-muted">{labelName}</small></h6>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
               {specs.map((spec, index) => (
                  <label
                     key={index}
                     className={`btn mr-2 btn-secondary btn-sm ${
                        spec === activeSpec ? "active" : ""
                        }`}
                     style={{ backgroudColor: "white" }}
                  >
                     <input
                        type="radio"
                        name="options"
                        checked={spec === activeSpec}
                     />
                     {spec}
                     <i className="fa fa-check text-white"></i>
                  </label>
               ))}
            </div>
         </div>
      </div>
   )
}

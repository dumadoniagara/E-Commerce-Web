import React from 'react'

export default function SpecOptions(props) {
   let { capacity, activeCapacity, onChange } = props;
   let labelName = 'Choose Capacities';
   console.log('ACTIVE CAPACITY:', activeCapacity)
   let specs = capacity;
   return (
      <div>
         <div className="my-1 form">
            <h6><small className="text-muted">{labelName}</small></h6>
            {specs.map((spec, index) => (
               <label
                  key={index}
                  className={`btn mr-2 btn-secondary btn-sm ${
                     spec === activeCapacity ? "active" : ""
                     }`}
                  style={{ backgroudColor: "black" }}
               >
                  {spec}
                  <input
                     type="radio"
                     name="options-spec"
                     checked={spec === activeCapacity}
                     onChange={() => onChange(spec)}
                  />
                  {activeCapacity === spec &&
                     <i className="fa fa-check text-white ml-1"></i>
                  }
               </label>
            ))}
         </div>
      </div>
   )
}

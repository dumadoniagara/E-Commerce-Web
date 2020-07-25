import React from 'react'

export default function ColorOptions(props) {
   const { colors, activeColor, onChange } = props
   console.log('color di function ColorOptions:', colors);
   console.log('Active Color di function ColorOptions:', activeColor);

   return (
      <div>
         <h6><small className="text-muted">Choose Color</small></h6>
         {/* <div className="btn-group btn-group-toggle"
            data-toggle="buttons"
            style={{ width: `${1.1 * colors.length}rem` }}
         > */}
            {colors.map((color, index) => (
               <label
                  key={index}
                  className={`btn mx-1 btn-sm`}
                  style={{ backgroundColor: color }}
               >
                  <input
                     type="radio"
                     name="options"
                     value={color}
                     className="col-2"
                     checked={false}
                     onChange={() => onChange(color)}
                  />
                  <i className="fa fa-check text-white"></i>
               </label>
            ))}
         {/* </div> */}
      </div>
   )
}

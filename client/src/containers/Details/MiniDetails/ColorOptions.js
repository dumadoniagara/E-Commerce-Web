import React from 'react'

export default function ColorOptions(props) {
   const { colors, activeColor, onChange } = props
   console.log('color di function ColorOptions:', colors);
   console.log('Active Color di function ColorOptions:', activeColor);
   console.log(onChange)

   return (
      <div>
         <h6><small className="text-muted">Choose Color</small></h6>
         {colors.map((color, index) => (
            <label
               key={index}
               className={`btn mx-1 btn-sm ${color === activeColor ? "active" : ""}`}
               style={{ backgroundColor: color }}
            >
               <input
                  type="radio"
                  name="options-color"
                  className="col-2"
                  checked={color === activeColor}
                  onChange={() => onChange(color)}
               />
               {activeColor === color &&
                  <i className="fa fa-check text-white ml-1"></i>
               }
            </label>
         ))}
      </div>
   )
}

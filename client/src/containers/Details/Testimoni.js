import React from 'react'

export default function Testimoni(props) {
   console.log('props nya sekarang:', props)
   return (
      <div>
         <div className="card">
            <div className="card-body">
               This is some text within a card body.
               ini isi dari testimoni dengan brand {props.testimoni}
            </div>
         </div>
      </div>
   )
}

import React from 'react'
import Carousel from './Carousel';
import ListProduct from '../containers/ListProduct';

export default function Home(props) {
   return (
      <div className="home">
         <Carousel />
         <ListProduct />
      </div>
   )
}
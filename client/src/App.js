import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ListProduct from './containers/ListProduct';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <ListProduct/>
    </div>
  );
}

export default App;

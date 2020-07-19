import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ListProduct from './containers/ListProduct';
import './styles/app-style.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Carousel />
        <ListProduct />
      </main>
    </div>
  );
}

export default App;

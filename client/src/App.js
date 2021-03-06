import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import './styles/app-style.css';
import Home from './components/Home';
import AddAds from './containers/AddForm/AddAds';
import DetailProduct from './containers/Details/DetailProduct'
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Route exact path='/' component={Home} />
          <Route path='/add' component={AddAds} />
          <Route path='/detail' component={DetailProduct} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

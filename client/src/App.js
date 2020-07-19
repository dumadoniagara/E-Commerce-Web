import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import './styles/app-style.css';
import Home from './components/Home';
import AddAds from './containers/AddAds';

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

        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

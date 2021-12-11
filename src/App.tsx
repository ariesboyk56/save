import React from 'react';
import { Routes, Route } from 'react-router-dom'
import HeadingBar from './components/NavBar'
import Products from './components/Products';
import HomePage from './components/HomePage';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <GlobalStyles>
      <div className='grid wide'>
      <HeadingBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
    </GlobalStyles>
    
  );
}

export default App;

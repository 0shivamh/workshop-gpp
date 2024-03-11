import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './Home';
import Page from './Page';
function App() {
  return (
    <div className="flex items-center p-10">

      <BrowserRouter>
      <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/page' element={<Page/>}/>
 
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

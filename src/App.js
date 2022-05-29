import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Todos los Productos"/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting="En Stock:"/>}/>
            <Route path='/about' element={<h1>About</h1>}/>
          </Routes>
        </BrowserRouter> 
        <ItemDetailContainer />
    </div>
  );
}

export default App;

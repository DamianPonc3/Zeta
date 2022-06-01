import React from 'react'
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
            <Route path='/categoria/:categoryId' element={<ItemListContainer greeting="En Stock:"/>}/>
            <Route path='/detalle/:productId' element={<ItemDetailContainer />}/>
            <Route path='/*' element={<h1>PAGE NOT FOUND ERROR 404</h1>} />
          </Routes>
        </BrowserRouter> 
    </div>
  );
}

export default App;

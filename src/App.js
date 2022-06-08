import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './components/context/CartContext';

const App = () => {
  return (
    <div className="App">
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting="Todos los Productos"/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos filtrados por categoria"/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
              <Route path='/about' element={<h1>About</h1>}/>
              <Route path='/cart' element={<Cart />}/>
              <Route path='*' element={<h1>PAGE NOT FOUND 404</h1>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;


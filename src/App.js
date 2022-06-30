import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import { NotificationProvider } from './Notification/notification';
import Form from "./components/Form/Form"
import Search from "./components/Search/Search"

const App = () => {
  return (
    <div className="App">
        <CartContextProvider>
          <NotificationProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={<ItemListContainer greeting="Todos los Productos"/>}/>
                <Route path='/categoria/:categoryId' element={<ItemListContainer greeting="Productos filtrados por categoria"/>}/>
                <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
                <Route path='/about' element={<h1>About</h1>}/>
                <Route path='/cart' element={<Cart />}/>
                <Route path='/order' element={<Form />}/>
                <Route path='*' element={<h1>PAGE NOT FOUND 404</h1>} />
                <Route path='/search' element={<Search />} />
              </Routes>
            </BrowserRouter>
          </NotificationProvider>
        </CartContextProvider>
    </div>
  );
}

export default App;


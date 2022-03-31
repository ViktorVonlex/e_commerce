import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";


function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">Vayne Skins Shop</a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Routes>
            <Route exact path="/product/:id" element={<ProductScreen/>}></Route>
            <Route exact path="/" element={<HomeScreen/>}></Route>
            <Route exact path="/cart/:id" element={<CartScreen></CartScreen>}></Route>
            
          </Routes>
        </main>
        <footer className="row center">
          All right reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

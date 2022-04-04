import React from "react";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import {useSelector} from "react-redux";


function App() {

  const cart = useSelector((state => state.cart));
  const { cartItems } = cart;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">Vayne Skins Shop</Link>
          </div>
          <div>
            <Link to="/cart">Cart
              {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
              )}</Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route exact path="/product/:id" element={<ProductScreen/>}/>
            <Route exact path="/" element={<HomeScreen/>}/>
            <Route exact path="/cart/:id" element={<CartScreen></CartScreen>}/>
            
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

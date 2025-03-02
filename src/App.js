import './App.css';
import {Home} from "./components/home";
import {Cart} from "./components/cart"
import {ProductDetails} from "./components/product-details"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {CartProvider} from "./components/cartprovider"
import {AuthProvider} from "./components/auth-provider"
import {Login} from "./components/login"
import {Checkout} from "./components/checkout"
const App = () => {
  return (
    <AuthProvider>

    <CartProvider>
      <Router>
        <nav className="p-4 bg-gray-800 text-white flex justify-between">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </CartProvider>
    </AuthProvider>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Category from "./pages/Category";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/category/:category" element={<Category />}/>
      <Route path="/success" element={<OrderSuccess />} />
    </Routes>
  );
}

export default App;
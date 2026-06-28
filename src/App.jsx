import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import CustomOrders from "./pages/CustomOrders";
import OrderGuide from "./pages/OrderGuide";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/custom-orders" element={<CustomOrders />} />
        <Route path="/order-guide" element={<OrderGuide />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
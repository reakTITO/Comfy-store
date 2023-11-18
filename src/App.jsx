import { Navbar } from "./components";
import {
  Home,
  About,
  Products,
  Cart,
  Checkout,
  Orders,
  Login,
  Register,
} from "./pages";
import { Routes, Route } from "react-router";
import Item from "./pages/Item";

const App = () => {
  return (
    <main className="dark:bg-gray-800 h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<Item />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
    </main>
  );
};
export default App;

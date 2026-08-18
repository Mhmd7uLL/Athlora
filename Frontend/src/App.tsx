import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import type { CartItem } from "./types/cart.ts"
import "./App.css";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/footer.tsx";

import Home from "./pages/Home/Home.tsx";
import Cart from "./pages/Cart/Cart.tsx";
import Profile from "./pages/Profile/Profile.tsx";


function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home setCart={setCart} />} />

        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

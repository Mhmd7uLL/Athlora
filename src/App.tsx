import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/footer/footer.tsx";

import Home from "./pages/Home/Home.tsx"
import Cart from "./pages/Cart/Cart.tsx"

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route />
        <Route />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

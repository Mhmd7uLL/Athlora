import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar.tsx";
import Categories from "./components/categories/Categories.tsx";
import Footer from "./components/footer/footer.tsx";

import Home from "./pages/Home/Home.tsx"

function App() {
  return (
    <div>
      <Navbar />
      <Categories />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route />
        <Route />
        <Route />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

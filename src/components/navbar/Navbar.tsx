import { Link } from "react-router-dom";

import cart from "../../assets/navAssets/cart.svg";
import profile from "../../assets/navAssets/profile.svg";

function Navbar() {
  return (
    <nav className="w-full h-30 bg-white">
      <div className="h-full grid grid-cols-3 items-center px-20">
        <div className="flex flex-col">
          <Link to="/">
            <h1 className="text-4xl font-bold">
              <span className="text-blue-500">Ath</span>lora.
            </h1>
            <p className="text-xs">Athletic Lifestyle and Original Apparel</p>
          </Link>
        </div>
        <form className="flex justify-center">
          <input
            type="text"
            className="w-100 bg-gray-100 px-5 py-2 text-lg text-gray-500 rounded-xl"
            placeholder="search"
          />
        </form>
        <div className="flex justify-end gap-5">
          <span>USD | EN</span>
          <Link to="/profile">
            <img src={profile} className="w-6 h-6"></img>
          </Link>
          <Link to="/cart">
            <img src={cart} className="w-6 h-6"></img>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

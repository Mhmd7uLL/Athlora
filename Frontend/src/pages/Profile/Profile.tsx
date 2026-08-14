import { useProfile } from "../../hooks/useProfile";

import Categories from "../../components/categories/Categories";
import Dashboard from "./sideBarMenu/Dashboard";
import Order from "./sideBarMenu/MyOrder";
import Wishlist from "./sideBarMenu/Wishlist";

function Profile() {
  const { active, setActive } = useProfile();

  return (
    <div className="flex justify-center flex-col">
      <Categories />
      <div className="gap-3 bg-gray-200 mt-1">
        <div className="flex flex-row mx-20">
          <div className="flex flex-col w-73 h-180">
            <div className="flex justify-center">
              <div className="bg-white w-61 h-15 my-9">Photo</div>
            </div>
            <div className="px-6 text-xl font-medium mt-5">
              Dashboard/Overview
            </div>
            <div className="w-10 h-1 bg-blue-500 ms-6 mb-5"></div>
            <div className="flex flex-col justify-center gap-1 text-white mb-4">
              <button
                onClick={() => setActive("Dashboard")}
                className={`relative z-10 text-start py-2 px-6 hover:cursor-pointer transition duration-300 rounded-xl ${
                  active === "Dashboard"
                    ? "bg-blue-500 text-white"
                    : "text-black border-gray-200 hover:bg-blue-500 hover:text-white"
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActive("Order")}
                className={`relative z-10 text-start py-2 px-6 hover:cursor-pointer transition duration-300 rounded-xl ${
                  active === "Order"
                    ? "bg-blue-500 text-white"
                    : "text-black border-gray-200 hover:bg-blue-500 hover:text-white"
                }`}
              >
                Orders
              </button>
              <button
                onClick={() => setActive("Wishlist")}
                className={`relative z-10 text-start py-2 px-6 hover:cursor-pointer transition duration-300 rounded-xl ${
                  active === "Wishlist"
                    ? "bg-blue-500 text-white"
                    : "text-black border-gray-200 hover:bg-blue-500 hover:text-white"
                }`}
              >
                Wishlist
              </button>
            </div>
          </div>

          <div className="w-220 h-180">
            {active === "Dashboard" && <Dashboard />}
            {active === "Order" && <Order />}
            {active === "Wishlist" && <Wishlist />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

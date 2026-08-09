import { useProfile } from "../../hooks/useProfile";

import Dashboard from "../Profile/sideBarMenu/dashboardOverview/Dashboard";
import Order from "../Profile/sideBarMenu/dashboardOverview/MyOrder";
import SideCart from "./sideBarMenu/dashboardOverview/SideCart";
import Wishlist from "../Profile/sideBarMenu/dashboardOverview/Wishlist";

function Profile() {
  const { active, setActive } = useProfile();

  return (
    <div className="flex justify-center">
      <div className="flex flex-row gap-3">
        <div className="flex flex-col bg-blue-950 w-73 h-180 rounded-3xl">
          <div className="flex justify-center">
            <div className="bg-white w-61 h-15 my-9">Photo</div>
          </div>
          <div className="px-6 text-white text-xl font-medium mt-5">
            Dashboard/Overview
          </div>
          <div className="w-10 h-1 bg-blue-500 ms-6 mb-5"></div>
          <div className="flex flex-col justify-center gap-1 text-white mb-4">
            <button
              onClick={() => setActive("Dashboard")}
              className={`relative z-10 text-start py-2 px-6 hover:cursor-pointer transition duration-300 ${
                active === "Dashboard"
                  ? "bg-blue-500 text-white"
                  : "text-white border-gray-200 hover:bg-blue-500"
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActive("Wishlist")}
              className={`relative z-10 text-start py-2 px-6 hover:cursor-pointer transition duration-300  ${
                active === "Wishlist"
                  ? "bg-blue-500 text-white"
                  : "text-white border-gray-200 hover:bg-blue-500"
              }`}
            >
              Wishlist
            </button>
            <button
              onClick={() => setActive("Orders")}
              className={`relative z-10 text-start py-2 px-6 hover:cursor-pointer transition duration-300  ${
                active === "Orders"
                  ? "bg-blue-500 text-white"
                  : "text-white border-gray-200 hover:bg-blue-500"
              }`}
            >
              My Orders
            </button>
            <button
              onClick={() => setActive("SideCart")}
              className={`relative z-10 text-start py-2 px-6 hover:cursor-pointer transition duration-300  ${
                active === "SideCart"
                  ? "bg-blue-500 text-white"
                  : "text-white border-gray-200 hover:bg-blue-500"
              }`}
            >
              Cart
            </button>
          </div>

          <div className="px-6 text-white text-xl font-medium mt-5">
            Profile
          </div>
          <div className="w-10 h-1 bg-blue-500 ms-6 mb-5"></div>
          <div className="flex flex-col justify-center gap-1 text-white">
            <button
              onClick={() => setActive("myprofile")}
              className={`relative z-10 text-start py-2 px-6 hover:cursor-pointer transition duration-300  ${
                active === "myprofile"
                  ? "bg-blue-500 text-white"
                  : "text-white border-gray-200 hover:bg-blue-500"
              }`}
            >
              My Profile
            </button>
            <button
              onClick={() => setActive("adress")}
              className={`relative z-10 text-start py-2 px-6 hover:cursor-pointer transition duration-300  ${
                active === "adress"
                  ? "bg-blue-500 text-white"
                  : "text-white border-gray-200 hover:bg-blue-500"
              }`}
            >
              Adresses
            </button>
            <button
              onClick={() => setActive("payment")}
              className={`relative z-10 text-start py-2 px-6 hover:cursor-pointer transition duration-300  ${
                active === "payment"
                  ? "bg-blue-500 text-white"
                  : "text-white border-gray-200 hover:bg-blue-500"
              }`}
            >
              Payment Method
            </button>
          </div>
        </div>

        <div className="w-220 h-180">
          {active === "Dashboard" && <Dashboard />}
          {active === "Orders" && <Order />}
          {active === "Wishlist" && <Wishlist />}
          {active === "SideCart" && <SideCart />}
        </div>
      </div>
    </div>
  );
}

export default Profile;

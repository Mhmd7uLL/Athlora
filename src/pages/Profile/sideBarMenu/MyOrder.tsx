import { useState } from "react";
import pict from "../../../assets/homeAssets/adidasEspana/pict1.webp";
import PopUpOrderDetail from "../../../components/popUpOrderDetail/PopUpOrderDetail";

function MyOrder() {
  const [activeTab, setActiveTab] = useState("all");
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="w-full py-5 px-5 my-2">
      <div className="font-bold text-3xl">
        <h1>My Order</h1>
        <hr></hr>
      </div>
      <div className="mt-4">
        <h1>
          Welcome, Theoo!<br></br>Here's what happening with your account
        </h1>
      </div>
      <div className="my-5">
        <h1 className="text-xl font-medium mb-3">
          All Your Orders Detail is here
        </h1>
        <div className="flex gap-3">
          <button
            onClick={() => setActiveTab("all")}
            className={`relative z-10 text-center py-2 px-3 border hover:cursor-pointer rounded-lg ${
              activeTab === "all"
                ? "bg-blue-500 text-white"
                : "border-blue-500 hover:bg-blue-500"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("pack")}
            className={`relative z-10 text-center py-2 px-3 border hover:cursor-pointer rounded-lg ${
              activeTab === "pack"
                ? "bg-blue-500 text-white"
                : "border-blue-500 hover:bg-blue-500"
            }`}
          >
            Packing
          </button>
          <button
            onClick={() => setActiveTab("ship")}
            className={`relative z-10 text-center py-2 px-3 border hover:cursor-pointer rounded-lg ${
              activeTab === "ship"
                ? "bg-blue-500 text-white"
                : "border-blue-500 hover:bg-blue-500"
            }`}
          >
            Shipping
          </button>
          <button
            onClick={() => setActiveTab("deliver")}
            className={`relative z-10 text-center py-2 px-3 border hover:cursor-pointer rounded-lg ${
              activeTab === "deliver"
                ? "bg-blue-500 text-white"
                : "border-blue-500 hover:bg-blue-500"
            }`}
          >
            Delivering
          </button>
          <button
            onClick={() => setActiveTab("cancel")}
            className={`relative z-10 text-center py-2 px-3 border hover:cursor-pointer rounded-lg ${
              activeTab === "cancel"
                ? "bg-blue-500 text-white"
                : "border-blue-500 hover:bg-blue-500"
            }`}
          >
            Cancelled
          </button>
        </div>
        <div className="mt-3">
          {activeTab === "all" && (
            <div className="bg-blue-950 w-100 px-5 py-3 rounded-lg text-white">
              <div className="flex flex-row justify-between">
                <h1>All Orders</h1>
                <h1>Aug 12, 2026</h1>
              </div>
              <hr className="my-2"></hr>
              <div className="flex flex-row gap-3">
                <img src={pict} className="w-30 h-30"></img>
                <div>
                  <h1 className="mb-3">
                    Adidas Apparel Spanish Home Kit World Cup 2026
                  </h1>
                  <h1>Qty: 1</h1>
                  <p>Size : XL</p>
                  <p>Status : Packing...</p>
                </div>
              </div>
              <hr className="my-2"></hr>
              <div className="flex flex-row justify-between">
                <button
                  onClick={() => setShowDetail(true)}
                  className="hover:cursor-pointer hover:text-blue-500"
                >
                  More Detail
                </button>
              </div>
            </div>
          )}
          {activeTab === "pack" && (
            <div className="bg-blue-950 w-100 px-5 py-3 rounded-lg text-white">
              <div className="flex flex-row justify-between">
                <h1>All Orders</h1>
                <h1>Aug 12, 2026</h1>
              </div>
              <hr className="my-2"></hr>
              <div className="flex flex-row gap-3">
                <img src={pict} className="w-30 h-30"></img>
                <div>
                  <h1 className="mb-3">
                    Adidas Apparel Spanish Home Kit World Cup 2026
                  </h1>
                  <h1>Qty: 1</h1>
                  <p>Size : XL</p>
                  <p>Status : Packing...</p>
                </div>
              </div>
              <hr className="my-2"></hr>
              <div className="flex flex-row justify-between">
                <button
                  onClick={() => setShowDetail(true)}
                  className="hover:cursor-pointer hover:text-blue-500"
                >
                  More Detail
                </button>
              </div>
            </div>
          )}
          {activeTab === "ship" && <div></div>}
          {activeTab === "deliver" && (
            <div className="bg-blue-950 w-60 px-5 py-3 rounded-lg text-white">
              <h1>Delivering</h1>
              <hr className="my-2"></hr>
              <p>12</p>
            </div>
          )}
          {activeTab === "cancel" && (
            <div className="bg-blue-950 w-60 px-5 py-3 rounded-lg text-white">
              <h1>Canceled Order</h1>
              <hr className="my-2"></hr>
              <p>5</p>
            </div>
          )}
        </div>

        {showDetail && (
          <PopUpOrderDetail onClose={() => setShowDetail(false)} />
        )}
      </div>
    </div>
  );
}

export default MyOrder;

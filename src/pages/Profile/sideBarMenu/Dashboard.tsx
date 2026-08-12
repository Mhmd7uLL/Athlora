import { useState } from "react";
import pict from "../../../assets/homeAssets/adidasEspana/pict1.webp";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("totalOrder");

  return (
    <div className="w-full py-5 px-5 my-2">
      <div className="font-bold text-3xl">
        <h1>Dashboard</h1>
        <hr></hr>
      </div>
      <div className="mt-4">
        <h1>
          Welcome, Theoo!<br></br>Here's what happening with your account
        </h1>
      </div>
      <div className="my-5">
        <h1 className="text-xl font-medium mb-3">Quick Stats</h1>
        <div className="flex gap-3">
          <button
            onClick={() => setActiveTab("totalOrder")}
            className={`relative z-10 text-center py-2 px-3 border hover:cursor-pointer rounded-lg ${
              activeTab === "totalOrder"
                ? "bg-blue-500 text-white"
                : "border-blue-500 hover:bg-blue-500 hover:text-white"
            }`}
          >
            Orders
          </button>
          <button
            onClick={() => setActiveTab("pending")}
            className={`relative z-10 text-center py-2 px-3 border hover:cursor-pointer rounded-lg ${
              activeTab === "pending"
                ? "bg-blue-500 text-white"
                : "border-blue-500 hover:bg-blue-500 hover:text-white"
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`relative z-10 text-center py-2 px-3 border hover:cursor-pointer rounded-lg ${
              activeTab === "completed"
                ? "bg-blue-500 text-white"
                : "border-blue-500 hover:bg-blue-500 hover:text-white"
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setActiveTab("review")}
            className={`relative z-10 text-center py-2 px-3 border hover:cursor-pointer rounded-lg ${
              activeTab === "review"
                ? "bg-blue-500 text-white"
                : "border-blue-500 hover:bg-blue-500 hover:text-white"
            }`}
          >
            Reviewed
          </button>
        </div>
        <div className="mt-3">
          {activeTab === "totalOrder" && (
            <div className="bg-white w-60 px-5 py-3 rounded-lg shadow-xl">
              <h1>Total Orders</h1>
              <hr className="my-2"></hr>
              <p>24</p>
            </div>
          )}
          {activeTab === "pending" && (
            <div className="bg-white w-60 px-5 py-3 rounded-lg shadow-xl">
              <h1>Pending Orders</h1>
              <hr className="my-2"></hr>
              <p>2</p>
            </div>
          )}
          {activeTab === "completed" && (
            <div className="bg-white w-60 px-5 py-3 rounded-lg shadow-xl">
              <h1>Complete Orders</h1>
              <hr className="my-2"></hr>
              <p>12</p>
            </div>
          )}
          {activeTab === "review" && (
            <div className="bg-white w-60 px-5 py-3 rounded-lg shadow-xl">
              <h1>Reviewed</h1>
              <hr className="my-2"></hr>
              <p>5</p>
            </div>
          )}
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-xl font-medium mb-3">Recent Order(s)</h1>
        <div className="mt-3">
          <div className="flex flex-row gap-3 bg-white w-100 px-5 py-3 rounded-lg shadow-xl">
            <img src={pict} className="w-30 h-35 rounded-lg"></img>
            <div>
              <h1>Last Order</h1>
              <hr className="my-2"></hr>
              <h1>Adidas Apparel Spanish Home Kit World Cup 2026</h1>
              <p>Size : XL</p>
              <p>Status : Packing...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

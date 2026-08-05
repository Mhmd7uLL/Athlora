import { useState } from "react";

function Home() {
  const [active, setActive] = useState("Men Team");

  return (
    <div>
      <div className="h-120">
        <div className="w-full h-full bg-red-500 flex items-center">
          <div className="h-80 w-80 bg-white ms-50 rounded-3xl">
            <h1 className="text-4xl mt-10 rounded-2xl ms-10 rounded-2xl font-bold">
              New Season!
            </h1>
            <p className="text-2xl font-medium ms-10 rounded-2xl">
              Official Kit
            </p>
            <p className="mt-25 ms-10 rounded-2xl">New look, same elegance</p>
            <button className="ms-10 rounded-2xl my-2 px-5 py-2 bg-indigo-600 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-indigo-700">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-auto">
        <h1 className="flex justify-center text-5xl my-20 font-bold">
          Shop by Player
        </h1>
        <div className="flex flex-row justify-center gap-3 mb-4 rounded-2xl">
          <button
            onClick={() => setActive("Men Team")}
            className={`relative z-10 rounded-2xl h-full rounded-full border py-3 px-5 transition duration-300 hover:cursor-pointer ${
              active === "Men Team"
                ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
                : "text-gray-500 border-gray-200 hover:bg-gray-200"
            }`}
          >
            Men's Team
          </button>
          <div className="flex flex-row justify-center gap-3 mb-10 rounded-2xl">
            <button
              onClick={() => setActive("Women Team")}
              className={`relative z-10 rounded-2xl h-full rounded-full border py-3 px-5 transition duration-300 hover:cursor-pointer ${
                active === "Women Team"
                  ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
                  : "text-gray-500 border-gray-200 hover:bg-gray-200"
              }`}
            >
              Women's Team
            </button>
          </div>
        </div>

        <div>
          {active === "Men Team" && (
            <div className="grid grid-cols-5 gap-4 mx-10 mt-6">
              <div className="bg-gray-300 py-10 rounded-2xl gap-3 flex justify-center pt-50">
                <div className="flex flex-row justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#20 Anonim</div>
                  <button className="rounded-2xl px-5 py-2 bg-indigo-600 inset-shadow-lg rounded-lg text-white hover:cursor-pointer">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-2xl gap-3 flex justify-center pt-50">
                <div className="flex flex-row justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#20 Anonim</div>
                  <button className="rounded-2xl px-5 py-2 bg-indigo-600 inset-shadow-lg rounded-lg text-white hover:cursor-pointer">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-2xl gap-3 flex justify-center pt-50">
                <div className="flex flex-row justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#20 Anonim</div>
                  <button className="rounded-2xl px-5 py-2 bg-indigo-600 inset-shadow-lg rounded-lg text-white hover:cursor-pointer">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-2xl gap-3 flex justify-center pt-50">
                <div className="flex flex-row justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#20 Anonim</div>
                  <button className="rounded-2xl px-5 py-2 bg-indigo-600 inset-shadow-lg rounded-lg text-white hover:cursor-pointer">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-2xl gap-3 flex justify-center pt-50">
                <div className="flex flex-row justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#20 Anonim</div>
                  <button className="rounded-2xl px-5 py-2 bg-indigo-600 inset-shadow-lg rounded-lg text-white hover:cursor-pointer">
                    Shop
                  </button>
                </div>
              </div>
            </div>
          )}
          ;
          {active === "Women Team" && (
            <div className="grid grid-cols-5 gap-4 mx-10 mb-6">
              <div className="bg-gray-300 py-10 rounded-2xl gap-3 flex justify-center pt-50">
                <div className="flex flex-row justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#21 Anonim</div>
                  <button className="rounded-2xl px-5 py-2 bg-indigo-600 inset-shadow-lg rounded-lg text-white hover:cursor-pointer">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-2xl gap-3 flex justify-center pt-50">
                <div className="flex flex-row justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#21 Anonim</div>
                  <button className="rounded-2xl px-5 py-2 bg-indigo-600 inset-shadow-lg rounded-lg text-white hover:cursor-pointer">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-2xl gap-3 flex justify-center pt-50">
                <div className="flex flex-row justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#21 Anonim</div>
                  <button className="rounded-2xl px-5 py-2 bg-indigo-600 inset-shadow-lg rounded-lg text-white hover:cursor-pointer">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-2xl gap-3 flex justify-center pt-50">
                <div className="flex flex-row justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#21 Anonim</div>
                  <button className="rounded-2xl px-5 py-2 bg-indigo-600 inset-shadow-lg rounded-lg text-white hover:cursor-pointer">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-2xl gap-3 flex justify-center pt-50">
                <div className="flex flex-row justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#21 Anonim</div>
                  <button className="rounded-2xl px-5 py-2 bg-indigo-600 inset-shadow-lg rounded-lg text-white hover:cursor-pointer">
                    Shop
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

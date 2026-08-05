import { useState } from "react";
import mainBG from "../../assets/homeAssets/mainBG.webp";

function Home() {
  const [active, setActive] = useState("FC");
  const [activeBrand, setActiveBrand] = useState("Adidas");

  return (
    <div>
      <div className="h-120">
        <div
          className="w-full h-120 flex justify-end items-center bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${mainBG})` }}
        >
          <div className="h-80 w-80 bg-white me-20 rounded-3xl text-end">
            <h1 className="text-4xl mt-10 rounded-2xl me-10 rounded-2xl font-bold">
              New Season!
            </h1>
            <p className="text-2xl font-medium me-10 rounded-2xl">
              Official Kit
            </p>
            <p className="mt-25 me-10 rounded-2xl">New look, same elegance</p>
            <button className="me-10 rounded-2xl my-2 px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-indigo-700">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-auto">
        <h1 className="flex justify-center text-5xl my-10 font-bold">
          Popular Products
        </h1>
      </div>
      <div className="flex flex-row justify-center gap-3 mb-7 rounded-2xl">
        <button
          onClick={() => setActive("FC")}
          className={`relative z-10 rounded-2xl h-full rounded-full border py-3 px-5 transition duration-300 hover:cursor-pointer ${
            active === "FC"
              ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
              : "text-gray-500 border-gray-200 hover:bg-gray-200"
          }`}
        >
          Football Club
        </button>
        <button
          onClick={() => setActive("World Cup")}
          className={`relative z-10 rounded-2xl h-full rounded-full border py-3 px-5 transition duration-300 hover:cursor-pointer ${
            active === "World Cup"
              ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
              : "text-gray-500 border-gray-200 hover:bg-gray-200"
          }`}
        >
          World Cup Edition
        </button>
      </div>

      <div>
        {active === "FC" && (
          <div className="grid grid-cols-5 gap-4 mx-10">
            <div className="bg-gray-300 py-10 rounded-2xl gap-3 flex justify-center pt-50">
              <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                <div className="font-bold">#10 Lamine Yamal</div>
                <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-indigo-700">
                  Shop
                </button>
              </div>
            </div>
            <div className="bg-gray-300 py-10 rounded-2xl gap-3 flex justify-center pt-50">
              <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                <div className="font-bold">#10 Lionel Messi</div>
                <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-indigo-700">
                  Shop
                </button>
              </div>
            </div>
            <div className="bg-gray-300 py-10 rounded-2xl gap-3 flex justify-center pt-50">
              <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                <div className="font-bold">#9 Robert Lewandowski</div>
                <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-indigo-700">
                  Shop
                </button>
              </div>
            </div>
            <div className="bg-gray-300 py-10 rounded-2xl gap-3 flex justify-center pt-50">
              <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                <div className="font-bold">#10 Kylian Mbappe</div>
                <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-indigo-700">
                  Shop
                </button>
              </div>
            </div>
            <div className="bg-gray-300 py-10 rounded-2xl gap-3 flex justify-center pt-50">
              <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                <div className="font-bold">#7 Vinicius Junior</div>
                <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-indigo-700">
                  Shop
                </button>
              </div>
            </div>
          </div>
        )}
        {active === "World Cup" && (
          <div className="grid grid-cols-5 gap-4 mx-10">
            <div className="bg-gray-300 py-10 rounded-2xl gap-3 flex justify-center pt-50">
              <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                <div className="font-bold">#11 Michael Olise</div>
                <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-indigo-700">
                  Shop
                </button>
              </div>
            </div>
            <div className="bg-gray-300 py-10 rounded-2xl gap-3 flex justify-center pt-50">
              <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                <div className="font-bold">#10 Lionel Messi</div>
                <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-indigo-700">
                  Shop
                </button>
              </div>
            </div>
            <div className="bg-gray-300 py-10 rounded-2xl gap-3 flex justify-center pt-50">
              <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                <div className="font-bold">#10 Kylian Mbappe</div>
                <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-indigo-700">
                  Shop
                </button>
              </div>
            </div>
            <div className="bg-gray-300 py-10 rounded-2xl gap-3 flex justify-center pt-50">
              <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                <div className="font-bold">#19 Lamine Yamal</div>
                <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-indigo-700">
                  Shop
                </button>
              </div>
            </div>
            <div className="bg-gray-300 py-10 rounded-2xl gap-3 flex justify-center pt-50">
              <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                <div className="font-bold">#5 Jude Bellingham</div>
                <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-indigo-700">
                  Shop
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <h1 className="flex justify-center text-5xl mt-40 mb-20 font-bold">
          Make it Yours!
        </h1>
        <div className="flex flex-row justify-center gap-3 mb-7 rounded-2xl">
          <button
            onClick={() => setActiveBrand("Adidas")}
            className={`relative z-10 rounded-2xl h-full rounded-full border py-3 px-5 transition duration-300 hover:cursor-pointer ${
              activeBrand === "Adidas"
                ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
                : "text-gray-500 border-gray-200 hover:bg-gray-200"
            }`}
          >
            Adidas
          </button>
          <button
            onClick={() => setActiveBrand("Nike")}
            className={`relative z-10 rounded-2xl h-full rounded-full border py-3 px-5 transition duration-300 hover:cursor-pointer ${
              activeBrand === "Nike"
                ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
                : "text-gray-500 border-gray-200 hover:bg-gray-200"
            }`}
          >
            Nike
          </button>
          <button
            onClick={() => setActiveBrand("Puma")}
            className={`relative z-10 rounded-2xl h-full rounded-full border py-3 px-5 transition duration-300 hover:cursor-pointer ${
              activeBrand === "Puma"
                ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
                : "text-gray-500 border-gray-200 hover:bg-gray-200"
            }`}
          >
            Puma
          </button>
          <button
            onClick={() => setActiveBrand("UnderArmour")}
            className={`relative z-10 rounded-2xl h-full rounded-full border py-3 px-5 transition duration-300 hover:cursor-pointer ${
              activeBrand === "UnderArmour"
                ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
                : "text-gray-500 border-gray-200 hover:bg-gray-200"
            }`}
          >
            Under Armour
          </button>
          <button
            onClick={() => setActiveBrand("NewBalance")}
            className={`relative z-10 rounded-2xl h-full rounded-full border py-3 px-5 transition duration-300 hover:cursor-pointer ${
              activeBrand === "NewBalance"
                ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
                : "text-gray-500 border-gray-200 hover:bg-gray-200"
            }`}
          >
            New Balance
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

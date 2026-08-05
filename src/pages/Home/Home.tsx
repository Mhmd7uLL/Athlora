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
          <div className="h-80 w-80 text-white bg-white/10 backdrop-blur-xl me-18 rounded-3xl transition duration-300 text-end shadow-2xl hover:shadow-blue-500/50">
            <h1 className="text-6xl mt-10 rounded-2xl me-10 rounded-2xl font-bold">
              New<br></br>Season!
            </h1>
            <p className="mt-10 me-10 rounded-2xl">New look, same elegance</p>
            <button className="mt-2 me-10 rounded-2xl mb-10 px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-indigo-700">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-auto">
        <h1 className="flex justify-center text-5xl my-20 font-bold">
          Popular Products
        </h1>
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
              <div className="bg-gray-300 py-10 rounded-3xl gap-3 flex justify-center pt-50">
                <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#10 Lamine Yamal</div>
                  <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-indigo-700">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-3xl gap-3 flex justify-center pt-50">
                <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#10 Lionel Messi</div>
                  <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-indigo-700">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-3xl gap-3 flex justify-center pt-50">
                <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#9 Robert Lewandowski</div>
                  <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-indigo-700">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-3xl gap-3 flex justify-center pt-50">
                <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#10 Kylian Mbappe</div>
                  <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-indigo-700">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-3xl gap-3 flex justify-center pt-50">
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
              <div className="bg-gray-300 py-10 rounded-3xl gap-3 flex justify-center pt-50">
                <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#11 Michael Olise</div>
                  <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-indigo-700">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-3xl gap-3 flex justify-center pt-50">
                <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#10 Lionel Messi</div>
                  <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-indigo-700">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-3xl gap-3 flex justify-center pt-50">
                <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#10 Kylian Mbappe</div>
                  <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-indigo-700">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-3xl gap-3 flex justify-center pt-50">
                <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#19 Lamine Yamal</div>
                  <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-indigo-700">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-3xl gap-3 flex justify-center pt-50">
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
      </div>

      <div>
        <div className="flex flex-col justify-center text-center mt-40 mb-20">
          <h1 className="text-5xl font-bold">Make it Yours!</h1>
          <p>One of the Popular Brands below</p>
        </div>
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

      <div className="flex flex-row gap-3 justify-center">
        <div className="bg-red-50 w-150 h-180">
          <div></div>
          <div className="flex h-full justify-center items-end gap-10">
            <div className="bg-blue-500 w-20 h-20 gap-3 rounded-xl">ha</div>
            <div className="bg-blue-500 w-20 h-20 gap-3 rounded-xl">ha</div>
            <div className="bg-blue-500 w-20 h-20 gap-3 rounded-xl">ha</div>
            <div className="bg-blue-500 w-20 h-20 gap-3 rounded-xl">ha</div>
            <div className="bg-blue-500 w-20 h-20 gap-3 rounded-xl">ha</div>
          </div>
        </div>

        <div className="w-150 h-180 px-10 flex flex-col">
          <div className="font-bold">
            <h1 className="text-3xl my-5">
              Spanish Home Kit Final World Cup 2026
            </h1>
            <h3 className="text-xl">$ 250</h3>
          </div>

          <hr className="my-5"></hr>

          <div className="font-medium">
            <div className="flex justify-between mb-2 text-md">
              <h3>Size</h3>
              <a href="">Size Guide</a>
            </div>
            <div className="flex gap-3">
              <button className="flex justify-center items-center bg-white w-20 h-10 rounded rounded-4xl border border-gray-300 hover:border-blue-500 hover:bg-blue-100">
                XS
              </button>
              <button className="flex justify-center items-center bg-white w-20 h-10 rounded rounded-4xl border border-gray-300 hover:border-blue-500 hover:bg-blue-100">
                S
              </button>
              <button className="flex justify-center items-center bg-white w-20 h-10 rounded rounded-4xl border border-gray-300 hover:border-blue-500 hover:bg-blue-100">
                M
              </button>
              <button className="flex justify-center items-center bg-white w-20 h-10 rounded rounded-4xl border border-gray-300 hover:border-blue-500 hover:bg-blue-100">
                L
              </button>
              <button className="flex justify-center items-center bg-white w-20 h-10 rounded rounded-4xl border border-gray-300 hover:border-blue-500 hover:bg-blue-100">
                XL
              </button>
            </div>
          </div>

          <hr className="my-7"></hr>

          <div className="font-medium">
            <h3 className="text-md mb-2">Name & Number</h3>
            <div className="flex gap-3">
              <button className="flex justify-center items-center bg-white w-20 h-10 rounded rounded-4xl border border-gray-300 hover:border-blue-500 hover:bg-blue-100">
                None
              </button>
              <button className="flex justify-center items-center bg-white w-20 h-10 rounded rounded-4xl border border-gray-300 hover:border-blue-500 hover:bg-blue-100">
                Player
              </button>
              <button className="flex justify-center items-center bg-white w-20 h-10 rounded rounded-4xl border border-gray-300 hover:border-blue-500 hover:bg-blue-100">
                Custom
              </button>
            </div>
          </div>

          <div className="flex flex-col h-full font-medium">
            <button className="flex justify-center items-center mt-auto bg-blue-500 text-white h-15 w-full rounded-2xl hover:cursor-pointer">Add to cart</button>
            <p>Lorem Ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

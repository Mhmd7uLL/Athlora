import { useHome } from "../../hooks/useHome";
import mainBG from "../../assets/homeAssets/mainBG.webp";
import DropdownP from "../../components/dropdownPlayer/DropdownP";

function Home() {
  const {
    active,
    activeBrand,
    activeSize,
    activeNumName,
    setActive,
    setActiveBrand,
    setActiveSize,
    setActiveNumName,
  } = useHome();

  return (
    <div>
      <div className="h-120 bg-blue-950 mt-1">
        <div
          className="w-full h-120 flex justify-end items-center bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${mainBG})` }}
        >
          <div className="h-80 w-80 text-white bg-white/10 backdrop-blur-xl me-18 rounded-3xl transition duration-300 text-end shadow-2xl hover:shadow-blue-500/50">
            <h1 className="text-6xl mt-10 rounded-2xl me-10 rounded-2xl font-bold">
              New<br></br>Season!
            </h1>
            <p className="mt-10 me-10 rounded-2xl">New look, same elegance</p>
            <button className="mt-2 me-10 rounded-2xl mb-10 px-5 py-2 bg-blue-500 inset-shadow-lg border border-blue-500 rounded-lg text-white hover:cursor-pointer hover:bg-blue-950 hover:border-blue-500">
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
                  <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-blue-950 transition duration-300">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-3xl gap-3 flex justify-center pt-50">
                <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#10 Lionel Messi</div>
                  <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-blue-950 transition duration-300">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-3xl gap-3 flex justify-center pt-50">
                <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#9 Robert Lewandowski</div>
                  <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-blue-950 transition duration-300">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-3xl gap-3 flex justify-center pt-50">
                <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#10 Kylian Mbappe</div>
                  <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-blue-950 transition duration-300">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-3xl gap-3 flex justify-center pt-50">
                <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#7 Vinicius Junior</div>
                  <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-blue-950 transition duration-300">
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
                  <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-blue-950 transition duration-300">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-3xl gap-3 flex justify-center pt-50">
                <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#10 Lionel Messi</div>
                  <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-blue-950 transition duration-300">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-3xl gap-3 flex justify-center pt-50">
                <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#10 Kylian Mbappe</div>
                  <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-blue-950 transition duration-300">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-3xl gap-3 flex justify-center pt-50">
                <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#19 Lamine Yamal</div>
                  <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-blue-950 transition duration-300">
                    Shop
                  </button>
                </div>
              </div>
              <div className="bg-gray-300 py-10 rounded-3xl gap-3 flex justify-center pt-50">
                <div className="flex flex-col justify-center bg-white w-55 rounded-lg items-center gap-2 py-3">
                  <div className="font-bold">#5 Jude Bellingham</div>
                  <button className="rounded-2xl px-5 py-2 bg-blue-500 inset-shadow-lg rounded-lg text-white hover:cursor-pointer hover:bg-blue-950 transition duration-300">
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
        <div className="bg-white w-150 h-180">
          <div></div>
          <div className="flex h-full justify-center items-end gap-10">
            <div className="bg-blue-500 w-30 h-22 gap-3 rounded-xl"></div>
            <div className="bg-blue-500 w-30 h-22 gap-3 rounded-xl"></div>
            <div className="bg-blue-500 w-30 h-22 gap-3 rounded-xl"></div>
            <div className="bg-blue-500 w-30 h-22 gap-3 rounded-xl"></div>
            <div className="bg-blue-500 w-30 h-22 gap-3 rounded-xl"></div>
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
              <button
                onClick={() => setActiveSize("XS")}
                className={`relative z-10 rounded-2xl h-10 rounded-full border w-20 transition duration-300 hover:cursor-pointer ${
                  activeSize === "XS"
                    ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
                    : "text-gray-500 border-gray-200 hover:bg-gray-200"
                }`}
              >XS</button>
              <button
                onClick={() => setActiveSize("S")}
                className={`relative z-10 rounded-2xl h-10 rounded-full border w-20 transition duration-300 hover:cursor-pointer ${
                  activeSize === "S"
                    ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
                    : "text-gray-500 border-gray-200 hover:bg-gray-200"
                }`}
              >S</button>
              <button
                onClick={() => setActiveSize("M")}
                className={`relative z-10 rounded-2xl h-10 rounded-full border w-20 transition duration-300 hover:cursor-pointer ${
                  activeSize === "M"
                    ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
                    : "text-gray-500 border-gray-200 hover:bg-gray-200"
                }`}
              >M</button>
              <button
                onClick={() => setActiveSize("L")}
                className={`relative z-10 rounded-2xl h-10 rounded-full border w-20 transition duration-300 hover:cursor-pointer ${
                  activeSize === "L"
                    ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
                    : "text-gray-500 border-gray-200 hover:bg-gray-200"
                }`}
              >L</button>
              <button
                onClick={() => setActiveSize("XL")}
                className={`relative z-10 rounded-2xl h-10 rounded-full border w-20 transition duration-300 hover:cursor-pointer ${
                  activeSize === "XL"
                    ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
                    : "text-gray-500 border-gray-200 hover:bg-gray-200"
                }`}
              >XL</button>
            </div>
          </div>

          <hr className="my-7"></hr>

          <div className="font-medium">
            <h3 className="text-md mb-2">Name & Number</h3>
            <div className="flex gap-3">
              <button
                onClick={() => setActiveNumName("None")}
                className={`relative z-10 rounded-2xl h-10 rounded-full border w-20 transition duration-300 hover:cursor-pointer ${
                  activeNumName === "None"
                    ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
                    : "text-gray-500 border-gray-200 hover:bg-gray-200"
                }`}
              >None</button>
              <button
                onClick={() => setActiveNumName("Player")}
                className={`relative z-10 rounded-2xl h-10 rounded-full border w-35 transition duration-300 hover:cursor-pointer ${
                  activeNumName === "Player"
                    ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
                    : "text-gray-500 border-gray-200 hover:bg-gray-200"
                }`}
              >Select Player</button>
              <button
                onClick={() => setActiveNumName("Custom")}
                className={`relative z-10 rounded-2xl h-10 rounded-full border w-25 transition duration-300 hover:cursor-pointer ${
                  activeNumName === "Custom"
                    ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
                    : "text-gray-500 border-gray-200 hover:bg-gray-200"
                }`}
              >Custom</button>
            </div>
          </div>
          
          <div>
            {activeNumName === "Player" && (
              <DropdownP />
            )}
            {activeNumName === "Custom" && (
              <div>as2u</div>
            )}
          </div>

          <div className="flex flex-col mt-auto font-medium">
            <div className="flex justify-between text-xl">
              <h1>Total</h1>
              <h1>$ 250</h1>
            </div>
            <button className="flex justify-center items-center mt-5 bg-blue-500 text-white h-15 w-full rounded-2xl transition duration-300 hover:cursor-pointer hover:bg-blue-950">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

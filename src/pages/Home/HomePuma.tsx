import { getAdditionalPrice } from "../../utils/additionalPrice/additionalPrice";
import { getTotalPrice } from "../../utils/calculateTotal/calculateTotal";
import { usePuma } from "../../hooks/hooksBrand/usePuma";

import DropdownP from "../../components/dropdownPlayer/DropdownPuma/DropdownP";
import pict1 from "../../assets/homeAssets/pumaPortugal/pict1.jpg";
import pict2 from "../../assets/homeAssets/pumaPortugal/pict2.webp";
import pict3 from "../../assets/homeAssets/pumaPortugal/pict3.webp";
import pict4 from "../../assets/homeAssets/pumaPortugal/pict4.webp";
import pict5 from "../../assets/homeAssets/pumaPortugal/pict5.webp";

function HomePuma() {
  const {
    activeSize,
    activeKit,
    activeNumName,
    customNum,
    setActiveSize,
    setActiveKit,
    setActiveNumName,
    setCustomNum,
  } = usePuma();

  const basePrice = 265;

  const additionalPrice = getAdditionalPrice(activeNumName);
  const totalPrice = getTotalPrice(basePrice, additionalPrice);

  return (
    <div className="flex flex-row gap-3 justify-center">
      <div className="bg-white w-150 h-110">
        <img src={activeKit} className="w-full h-150 mb-8 rounded-3xl"></img>
        <div
          className="flex h-full justify-center gap-10"
          onMouseLeave={() => setActiveKit(pict1)}
        >
          <img
            src={pict1}
            onMouseEnter={() => setActiveKit(pict1)}
            className="bg-blue-500 w-22 h-22 gap-3 rounded-xl hover:cursor-pointer"
          ></img>
          <img
            src={pict2}
            onMouseEnter={() => setActiveKit(pict2)}
            className="bg-blue-500 w-22 h-22 gap-3 rounded-xl hover:cursor-pointer"
          ></img>
          <img
            src={pict3}
            onMouseEnter={() => setActiveKit(pict3)}
            className="bg-blue-500 w-22 h-22 gap-3 rounded-xl hover:cursor-pointer"
          ></img>
          <img
            src={pict4}
            onMouseEnter={() => setActiveKit(pict4)}
            className="bg-blue-500 w-22 h-22 gap-3 rounded-xl hover:cursor-pointer"
          ></img>
          <img
            src={pict5}
            onMouseEnter={() => setActiveKit(pict5)}
            className="bg-blue-500 w-22 h-22 gap-3 rounded-xl hover:cursor-pointer"
          ></img>
        </div>
      </div>

      <div className="w-150 h-180 px-10 flex flex-col">
        <div className="font-bold">
          <h1 className="text-3xl my-5">
            Puma Apparel Portugal Home Kit World Cup 2026
          </h1>
          <h3 className="text-xl">$ {totalPrice}</h3>
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
            >
              XS
            </button>
            <button
              onClick={() => setActiveSize("S")}
              className={`relative z-10 rounded-2xl h-10 rounded-full border w-20 transition duration-300 hover:cursor-pointer ${
                activeSize === "S"
                  ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
                  : "text-gray-500 border-gray-200 hover:bg-gray-200"
              }`}
            >
              S
            </button>
            <button
              onClick={() => setActiveSize("M")}
              className={`relative z-10 rounded-2xl h-10 rounded-full border w-20 transition duration-300 hover:cursor-pointer ${
                activeSize === "M"
                  ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
                  : "text-gray-500 border-gray-200 hover:bg-gray-200"
              }`}
            >
              M
            </button>
            <button
              onClick={() => setActiveSize("L")}
              className={`relative z-10 rounded-2xl h-10 rounded-full border w-20 transition duration-300 hover:cursor-pointer ${
                activeSize === "L"
                  ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
                  : "text-gray-500 border-gray-200 hover:bg-gray-200"
              }`}
            >
              L
            </button>
            <button
              onClick={() => setActiveSize("XL")}
              className={`relative z-10 rounded-2xl h-10 rounded-full border w-20 transition duration-300 hover:cursor-pointer ${
                activeSize === "XL"
                  ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
                  : "text-gray-500 border-gray-200 hover:bg-gray-200"
              }`}
            >
              XL
            </button>
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
            >
              None
            </button>
            <button
              onClick={() => setActiveNumName("Player")}
              className={`relative z-10 rounded-2xl h-10 rounded-full border w-35 transition duration-300 hover:cursor-pointer ${
                activeNumName === "Player"
                  ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
                  : "text-gray-500 border-gray-200 hover:bg-gray-200"
              }`}
            >
              Select Player
            </button>
            <button
              onClick={() => setActiveNumName("Custom")}
              className={`relative z-10 rounded-2xl h-10 rounded-full border w-25 transition duration-300 hover:cursor-pointer ${
                activeNumName === "Custom"
                  ? "bg-blue-100 text-blue-500 border-blue-500 hover:bg-white"
                  : "text-gray-500 border-gray-200 hover:bg-gray-200"
              }`}
            >
              Custom
            </button>
          </div>
        </div>

        <div>
          {activeNumName === "Player" && <DropdownP />}
          {activeNumName === "Custom" && (
            <div className="flex flex-col gap-3">
              <div>
                <form className="mt-5 text-sm">
                  <label>Custom Number + $15 Additional Price</label>
                  <br></br>
                  <input
                    type="number"
                    min={1}
                    max={99}
                    value={customNum}
                    onChange={(e) => {
                      const value = e.target.value;

                      if (value === "") {
                        setCustomNum("");
                        return;
                      }

                      if (Number(value) <= 99) {
                        setCustomNum(Number(value));
                      }
                    }}
                    placeholder="Input Number"
                    className="bg-gray-200 w-100 px-5 py-3 rounded-xl border border-blue-500 font-medium"
                  />
                </form>
              </div>
              <div>
                <form className="mt-5 text-sm">
                  <label>Custom Name + $20 Additional Price</label>
                  <br></br>
                  <input
                    placeholder="Input Name"
                    className="bg-gray-200 w-100 px-5 py-3 rounded-xl border border-blue-500 font-medium"
                  />
                </form>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col mt-auto font-medium">
          <div className="flex justify-between text-xl">
            <h1>Total</h1>
            <h1>$ {totalPrice}</h1>
          </div>
          <button className="flex justify-center items-center mt-5 bg-blue-500 text-white h-15 w-full rounded-2xl transition duration-300 hover:cursor-pointer hover:bg-blue-950">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePuma;

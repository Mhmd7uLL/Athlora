import pict1 from "../../../assets/homeAssets/nikeBrazil/pict1.webp";
import pict2 from "../../../assets/homeAssets/pumaPortugal/pict1.jpg";

function Wishlist() {
  return (
    <div className="w-full py-5 px-5 my-2">
      <div className="font-bold text-3xl">
        <h1>Wishlist</h1>
        <hr></hr>
      </div>
      <div className="my-5">
        <h1 className="text-xl font-medium mb-3">All Your Wishlists</h1>
        <div className="grid grid-cols-5 gap-3">
          <div className="bg-white rounded-lg p-3 shadow-xl">
            <img src={pict1} className="rounded-lg" />
            <div className="text-sm">
              <h1 className="my-2">Nike Brazil Home Kit World Cup 2026</h1>
              <h1 className="mt-3 font-bold text-md mb-1">$ 250</h1>
              <div className="flex flex-row justify-between">
                <button className="bg-blue-500 px-3 py-2 rounded-lg text-white hover:bg-blue-950 hover:cursor-pointer transition duration-300">
                  Add to cart
                </button>
                <button className="font-bold hover:text-red-500">X</button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-xl">
            <img src={pict2} className="rounded-lg" />
            <div className="text-sm">
              <h1 className="my-2">Puma Portugal Home Kit World Cup 2026</h1>
              <h1 className="mt-3 font-bold text-md mb-1">$ 265</h1>
              <div className="flex flex-row justify-between">
                <button className="bg-blue-500 px-3 py-2 rounded-lg text-white hover:bg-blue-950 hover:cursor-pointer transition duration-300">
                  Add to cart
                </button>
                <button className="font-bold hover:text-red-500">X</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;

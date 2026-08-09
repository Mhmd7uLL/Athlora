import { useState } from "react";
import pict1 from "../../assets/homeAssets/adidasEspana/pict1.webp";

function Cart() {
  const [quantity, setQuantity] = useState(1);

  const price = 270;
  const subTotal = price * quantity;

  return (
    <div className="flex justify-center">
      <div className="w-295">
        <h1 className="text-4xl font-bold">All your stuff is here...</h1>

        <div className="flex justify-between gap-3 mt-8">
          <div className="w-190 h-150">
            <div className="grid grid-cols-4">
              <div className="font-medium text-2xl py-2">Your Stuff(s)</div>
              <div className="text-center font-medium text-2xl py-2">Price</div>
              <div className="text-center font-medium text-2xl py-2">
                Quantity(s)
              </div>
              <div className="text-end font-medium text-2xl py-2">Subtotal</div>
            </div>
            <hr className="mb-3 w-full"></hr>
            <div className="grid grid-cols-4 font-medium">
              <div className="flex gap-3 text-start">
                <img src={pict1} className="w-15 h-15 rounded-lg"></img>
                <div>
                  <h1>SPAIN FINAL WORLD CUP JERSEY, L</h1>
                </div>
              </div>
              <div className="text-center">
                <p>${price}</p>
              </div>
              <div className="gap-3">
                <form className="flex flex-row justify-center">
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((quantity) => Math.max(1, quantity - 1))
                    }
                    className="rounded-md bg-blue-500 w-5 h-5 flex items-center justify-center text-white hover:cursor-pointer"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="w-5 h-5 text-center mx-3"
                  ></input>
                  <button
                    type="button"
                    onClick={() => setQuantity((quantity) => quantity + 1)}
                    className="rounded-md bg-blue-500 w-5 h-5 flex items-center justify-center text-white hover:cursor-pointer"
                  >
                    +
                  </button>
                </form>
              </div>
              <div className="text-end">${subTotal}</div>
            </div>
            <div className="flex flex-row justify-between w-full my-5 py-3 border-y-1 font-medium text-lg">
              <h1>ORDER SUBTOTAL</h1>
              <h1>$ {subTotal}</h1>
            </div>
          </div>

          <div className="w-80 h-150">
            <div className="bg-blue-100 px-5 pb-5">
              <h1 className="text-2xl py-2 font-medium">ORDER SUMMARY</h1>
              <hr className="mb-3"></hr>
              <div className="grid grid-cols-2 mt-5 text-gray-500 font-extralight">
                <div>Order Subtotal</div>
                <div className="text-end">$ {subTotal}</div>
                <div>Shipping</div>
                <div className="text-end">$ 0.00</div>
                <div>Sales Tax</div>
                <div className="text-end">$ 0.00</div>
              </div>
              <hr className="bg-gray-100"></hr>
              <div className="flex flex-row justify-between mt-5 font-semibold text-lg">
                <h1>ESTIMATED TOTAL</h1>
                <h1>$ {subTotal}</h1>
              </div>
            </div>
            <button className="bg-blue-500 font-medium w-full mt-5 py-3 rounded-lg text-white hover:bg-blue-950 hover:cursor-pointer transition duration-300">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

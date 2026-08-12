import type { CartItem, Size } from "../../types/cart";

type CartProps = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

function Cart({ cart, setCart }: CartProps) {
  const orderSubtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const increaseQuantity = (id: string, size: Size) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.size === size
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const decreaseQuantity = (id: string, size: Size) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id && item.size === size
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <div className="flex justify-center bg-gray-200">
      <div className="w-295">
        <h1 className="text-4xl font-extrathin mt-10">
          All your stuff is here...
        </h1>
        <div className="flex justify-between gap-3">
          <div className="w-190 h-150">
            <div className="grid grid-cols-4 text-lg font-medium mt-4">
              <div>Your Stuff(s)</div>
              <div className="text-center">Price</div>
              <div className="text-center">Quantity</div>
              <div className="text-end">Subtotal</div>
            </div>
            <hr className="mt-2"></hr>
            {cart.map((item) => {
              const subTotal = item.price * item.quantity;
              return (
                <div key={item.id} className="grid grid-cols-4 font-extrathin mt-3">
                  <div className="flex gap-3 text-start">
                    <img src={item.image} className="w-15 h-15 rounded-lg" />

                    <div className="mb-2">
                      <h1>
                        {item.name}, {item.size}
                      </h1>
                    </div>
                  </div>

                  <div className="text-center">
                    <p>${item.price}</p>
                  </div>

                  <div className="gap-3">
                    <form className="flex flex-row justify-center">
                      <button
                        onClick={() => decreaseQuantity(item.id, item.size)}
                        type="button"
                        className="rounded-md bg-blue-500 w-5 h-5 flex items-center justify-center text-white hover:cursor-pointer"
                      >
                        -
                      </button>

                      <input
                        type="text"
                        value={item.quantity}
                        readOnly
                        className="w-5 h-5 text-center mx-3"
                      />

                      <button
                        onClick={() => increaseQuantity(item.id, item.size)}
                        type="button"
                        className="rounded-md bg-blue-500 w-5 h-5 flex items-center justify-center text-white hover:cursor-pointer"
                      >
                        +
                      </button>
                    </form>
                  </div>

                  <div className="text-end">${subTotal}</div>
                  <hr className="w-190"></hr>
                </div>
              );
            })}
            <div className="flex flex-row border-b-1 justify-between w-full mb-5 py-3 font-medium text-lg">
              <h1>ORDER SUBTOTAL</h1>
              <h1>$ {orderSubtotal}</h1>
            </div>
          </div>

          <div className="w-80 h-150">
            <div className="bg-white px-5 pb-5">
              <h1 className="text-2xl py-2 mt-4 font-medium">ORDER SUMMARY</h1>
              <hr className="mb-3"></hr>
              <div className="grid grid-cols-2 mt-5 text-gray-500 font-extralight">
                <div>Order Subtotal</div>
                <div className="text-end">$ {orderSubtotal}</div>
                <div>Shipping</div>
                <div className="text-end">$ 0.00</div>
                <div>Sales Tax</div>
                <div className="text-end">$ 0.00</div>
              </div>
              <hr className="bg-gray-100"></hr>
              <div className="flex flex-row justify-between mt-5 font-semibold text-lg">
                <h1>ESTIMATED TOTAL</h1>
                <h1>$ {orderSubtotal}</h1>
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

import pict from "../../assets/homeAssets/adidasEspana/pict1.webp";

interface PopUpOrderDetailProps {
  onClose: () => void;
}

function PopUpOrderDetail({ onClose }: PopUpOrderDetailProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-100 rounded-lg bg-white p-5 text-black shadow-xl">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Order Details</h1>

          <button onClick={onClose} className="text-xl hover:text-red-500">
            ✕
          </button>
        </div>

        <hr className="my-3" />

        <div className="flex gap-3">
          <img src={pict} className="h-24 w-24 rounded object-cover" />

          <div>
            <h2 className="font-bold">
              Adidas Apparel Spanish Home Kit World Cup 2026
            </h2>

            <p>Size: XL</p>
            <p>Quantity: 1</p>
            <p>Status: Packing...</p>
          </div>
        </div>

        <hr className="my-3" />

        <div>
          <div className="flex justify-between">
            <p>Order Date</p>
            <p>Aug 12, 2026</p>
          </div>

          <div className="flex justify-between">
            <p>Order ID</p>
            <p>120826ADS-01</p>
          </div>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between font-bold">
          <p>Total</p>
          <p>$ 270</p>
        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full rounded-lg bg-blue-500 py-2 text-white hover:bg-blue-950"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default PopUpOrderDetail;

interface AddProdStatusProps {
    onClose: () => void;
}

function AddProdStatus({ onClose }:AddProdStatusProps) {
  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      <div className="animate-slide-in flex justify-around gap-3 rounded-xl bg-green-500 w-90 py-4 shadow-xl text-white">
        <p className="font-medium">
          Success adding to cart!
        </p>
        <button
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default AddProdStatus;

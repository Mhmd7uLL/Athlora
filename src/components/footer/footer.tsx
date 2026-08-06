function Footer() {
  return (
    <div className="bg-blue-950 w-full h-90">
      <div className="h-full grid grid-cols-4 items-start pt-20 px-20 mt-10">
        <div className="flex flex-col gap-5 w-50">
          <div className="text-white">
            <h1 className="text-4xl font-bold">
              <span className="text-blue-500">Ath</span>lora.
            </h1>
            <p className="text-xs">Athletic Lifestyle and Original Apparel</p>
          </div>
        </div>

        <div className="flex flex-col w-50">
          <h1 className="text-blue-500 text-lg font-bold">Information</h1>
          <div className="flex flex-col gap-3 font-medium text-white text-md">
            <a>How To Order</a>
            <a>Track My Order</a>
            <a>Shipping and Return</a>
            <a>Terms & Conditions</a>
          </div>
        </div>
        <div className="flex flex-col w-50">
          <h1 className="text-blue-500 text-lg font-bold">Need Help?</h1>
          <div className="flex flex-col gap-3 font-medium text-white text-md">
            <a>Servies</a>
            <a>FAQs</a>
            <a>Contact Us</a>
          </div>
        </div>

        <div className="flex flex-col justify-center w-50 h-50 bg-white/10 backdrop-blur-xl rounded-xl text-white">
          <h1 className="font-bold mx-6">
            Become <span className="text-blue-500">Ath</span>lora member and get
            a discount up to 25%
          </h1>
          <button className="px-7 py-2 rounded-xl mx-auto mt-5 bg-blue-500">
            Sign Up Now
          </button>
        </div>
      </div>

      <div className="text-white font-thin flex justify-center mb-10 bg-blue-950 pb-20">
        <h1>
          Copyright @2026 <span className="text-blue-500"> Ath</span>lora Store.
          All Rights Reserved
        </h1>
      </div>
    </div>
  );
}

export default Footer;

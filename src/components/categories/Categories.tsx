function Categories() {
  return (
    <div className="w-full h-10 bg-white ">
      <div className="h-full flex flex-row justify-center gap-20">
        <div className="h-10 w-25 text-center border-b-4 border-white hover:border-indigo-700 hover:text-indigo-700 hover:cursor-pointer">
          <p className="font-medium">Jerseys</p>
        </div>
        <div className="h-10 w-30 text-center border-b-4 border-white hover:border-indigo-700 hover:text-indigo-700 hover:cursor-pointer">
          <p className="font-medium">Shop by Player</p>
        </div>
        <div className="h-10 w-25 text-center border-b-4 border-white hover:border-indigo-700 hover:text-indigo-700 hover:cursor-pointer">
          <p className="font-medium">Training</p>
        </div>
        <div className="h-10 w-25 text-center border-b-4 border-white hover:border-indigo-700 hover:text-indigo-700 hover:cursor-pointer">
          <p className="font-medium">Fashion</p>
        </div>
        <div className="h-10 w-25 text-center border-b-4 border-white hover:border-indigo-700 hover:text-indigo-700 hover:cursor-pointer">
          <p className="font-medium">Accessories</p>
        </div>
        <div className="h-10 w-25 text-center hover:cursor-pointer">
          <p className="font-medium">Sales</p>
        </div>
      </div>
    </div>
  );
}

export default Categories;

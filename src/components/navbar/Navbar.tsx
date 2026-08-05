function Navbar() {
  return (
    <nav className="w-full h-30 bg-white">
      <div className="h-full grid grid-cols-3 items-center px-20">
        <h1 className="text-2xl font-bold">
          <span>Athlora</span><br></br> Store.
        </h1>
        <form className="flex justify-center">
          <input
            type="text"
            className="w-100 bg-gray-100 px-5 py-2 text-lg text-gray-500 rounded-xl"
            placeholder="search"
          />
        </form>
        <div className="flex justify-end gap-5">
          <span>USD | EN</span>
          <span>Profile</span>
          <span>Cart</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

const SearchBar = () => {
  return (
    <div className="bg-transparent shadow-xl   rounded-xl p-6 flex items-center justify-center   gap-4 mt-16 relative z-10">
      
      <input
        type="text"
        placeholder="Location"
        className="border md:w-xl text-black font-semibold p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
      />

      <select className="border p-3 rounded-lg text-black  font-semibold">
        <option  >Property Type</option>
        <option className="text-black">Apartment</option>
        <option className="text-black">Villa</option>
        <option className="text-black">House</option>
      </select>

      <select className="border p-3 rounded-lg text-black font-semibold">
        <option>Max Price</option>
        <option>$500,000</option>
        <option>$1,000,000</option>
        <option>$2,000,000</option>
      </select>

      <button className="bg-blue-600 text-white p-2 rounded-sm font-semibold hover:bg-blue-800 transition">
        Search
      </button>
    </div>
  );
};

export default SearchBar;

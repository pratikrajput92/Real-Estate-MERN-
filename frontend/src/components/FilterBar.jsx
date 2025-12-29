const FilterBar = ({ setFilter }) => {
  return(
    <div className="flex justify-center  flex-wrap gap-4  mt-6 mb-4 ">
       <button onClick={() => setFilter("all")} className="px-4 py-5 border rounded-lg hover:bg-blue-600 hover:text-white transition">ALL</button>

       <button onClick={() => setFilter ("apartment")} className="px-4 py-5 border rounded-lg hover:bg-blue-600 hover:text-white transition">APARTMENT</button>

       <button onClick={() => setFilter ("villa")} className="px-4 py-5 border rounded-lg hover:bg-blue-600 hover:text-white transition">VILLA</button>

       <button onClick={() => setFilter ("house")} className="px-4 py-5 border rounded-lg hover:bg-blue-600 hover:text-white transition">HOUSE</button>   
    </div>

  );
  };

  export default FilterBar;


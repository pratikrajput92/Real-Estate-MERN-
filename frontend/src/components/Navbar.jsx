import  { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";
// import logo from "../assets/logo.png";

const Navbar = () => {


     const [open, setOpen] = useState(false);

  return (
    


    <nav className="fixed top-0 left-0 w-full h-16 md:w-full  bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-3 py-2 flex justify-between items-center">
        <div className="flex items-center justify-center space-x-2 text-xl font-bold text-rose-600 cursor-pointer">
          <img src={logo2} alt="logo" className="w-15 h-10"/>
          {/* <img src={logo} alt="logo" className="w-20 h-[30px]"/> */}
          @pnaGhar
        </div>
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to={"/"} className="hover:text-blue-500 transition cursor-pointer">Home</Link>
          <Link to={"/properties"} className="hover:text-blue-500 transition cursor-pointer">Properties</Link>
          <Link to={"/about"} className="hover:text-blue-500 transition cursor-pointer">About</Link>
          <Link to={"/contact"} className="hover:text-blue-500 transition cursor-pointer">Contact</Link>
        </ul>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav flex w-full mx-auto items-center lg:px-20 px-3 py-4 justify-between absolute text-white z-1">
      <h1 className="text-2xl font-bold ">Platia</h1>

      {/* Desktop Nav */}
      <ul className="lg:flex gap-7 hidden md:hidden">
        <li className="text-[#E07844] text-[18px] ">
          <a href="">Home</a>
        </li>
        <li className="text-white text-[18px] hover:text-[#E07844] transition-all duration-200">
          <a href="">About</a>
        </li>
        <li className="text-white text-[18px] hover:text-[#E07844] transition-all duration-200">
          <a href="">Menu</a>
        </li>
        <li className="text-white text-[18px] hover:text-[#E07844] transition-all duration-200">
          <a href="">Book a Table</a>
        </li>
        <li className="text-white text-[18px] hover:text-[#E07844] transition-all duration-200">
          <a href="">Chefs</a>
        </li>
        <li className="text-white text-[18px] hover:text-[#E07844] transition-all duration-200">
          <a href="">Events</a>
        </li>
        <li className="text-white text-[18px] hover:text-[#E07844] transition-all duration-200">
          <select name="dropdown">
            <option value="Dropdown">Option 1</option>
          </select>
        </li>
        <li className="text-white text-[18px] hover:text-[#E07844] transition-all duration-200">
          <a href="">Contact</a>
        </li>
       
      </ul>

      {/* Mobile Toggle Button */}
      <button className="md:hidden absolute top-4 start-[85%]"  onClick={() => setOpen(!open)}>
        {open ? <X size={28} className="text-black" /> : <Menu size={28} className="ms-3" />}
      </button>

      {/* Mobile Nav */}
      {open && (
        <div className="flex justify-between items-center absolute top-20 rounded-2xl start-5 bg-gray-200 p-5 w-[90%]">
          <ul className="flex flex-col text-center gap-7">
            <li className="text-[#E07844] text-[18px]">
              <a href="">Home</a>
            </li>
            <li className="text-black text-[18px] hover:text-[#E07844] transition-all duration-200">
              <a href="">About</a>
            </li>
            <li className="text-black text-[18px] hover:text-[#E07844] transition-all duration-200">
              <a href="">Menu</a>
            </li>
            <li className="text-black text-[18px] hover:text-[#E07844] transition-all duration-200">
              <a href="">Book a Table</a>
            </li>
            <li className="text-black text-[18px] hover:text-[#E07844] transition-all duration-200">
              <a href="">Chefs</a>
            </li>
            <li className="text-black text-[18px] hover:text-[#E07844] transition-all duration-200">
              <a href="">Events</a>
            </li>
            <li className="text-black text-[18px] hover:text-[#E07844] transition-all duration-200">
              <select name="dropdown">
                <option value="Dropdown">Option 1</option>
              </select>
            </li>
            <li className="text-black text-[18px] hover:text-[#E07844] transition-all duration-200">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

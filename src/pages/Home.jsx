import React from "react";
import assets from "../assets/assets";

function Home() {
  return (
    <div>
      <nav className="nav flex w-full mx-auto items-center px-10 py-6 justify-between absolute text-white z-1">
        <h1 className="text-3xl font-bold ">Platia</h1>
        <ul className="flex gap-7 px-5">
          <li className= "text-[#E07844] text-[18px] hover text-[#E07844]">
            <a href="">Home</a>
          </li>
          <li className= "text-white text-[18px] hover:text-[#E07844]">
            <a href="">About</a>
          </li>
          <li className= "text-white text-[18px] hover:text-[#E07844]">
            <a href="">Menu</a>
          </li>
          <li className= "text-white text-[18px] hover:text-[#E07844]">
            <a href="">Book a Table</a>
          </li>
          <li className= "text-white text-[18px] hover:text-[#E07844]">
            <a href="">Chefs</a>
          </li>
          <li className= "text-white text-[18px] hover:text-[#E07844]">
            <a href="">Events</a>
          </li>
          <li className= "text-white text-[18px] hover:text-[#E07844]">
            <select name="dropdown">
              <option value="Dropdown">Option 1</option>
            </select>
          </li>
          <li className= "text-white text-[18px] hover:text-[#E07844]">
            <a href="">Contact</a>
          </li>

        </ul>
      </nav>
      <section>
        <video
          src={assets.video}
          className="h-[100vh] w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        <div className="absolute flex justify-between h-[90vh] items-center top-10 left-0 px-10 pt-10">
          <div className="w-[50%] flex flex-col gap-5">
            <h1 className="text-[#E07844] text-2xl">EXPERIENCE CULINARY EXCELLENCE</h1>
            <h1 className= "text-5xl font-bold text-white ">Savor Every Moment at Platia</h1>
            <p className="text-[16px] text-white">Indulge in authentic Italian cuisine crafted with passion and the finest ingridients. From traditional recipes passed down through generations to innovate culinary creations, we offer an unforgetable dining experience.</p>
            <div className="flex gap-6">
              <button className="btn bg-amber-600 rounded-3xl text-white p-3 hover:bg-[#d75919]">Book a Table</button>
              <button className="border-white border-2 rounded-3xl text-white p-3 hover:border-[#E07844] hover:text-[#E07844]">View Menu</button>
            </div>
          </div>
          <div className="w-[50%]"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;

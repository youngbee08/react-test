import React from "react";
import assets from "../assets/assets";

function Home() {
  return (
    <div>
      <nav className="nav flex w-full mx-auto items-center px-20 py-6 justify-between absolute text-white z-1">
        <h1 className="text-3xl font-bold ">Platia</h1>
        <ul className="flex gap-7">
          <li className="text-[#E07844] text-[18px] hover text-[#E07844]">
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

        <div className="absolute flex justify-between h-[90vh] top-10 left-0 px-20 pt-10">
          <div className="w-[50%] mt-15 flex flex-col gap-7">
            <h1 className="text-[#E07844] text-2xl">
              EXPERIENCE CULINARY EXCELLENCE
            </h1>
            <h1
              className="text-6xl font-extrabold text-white"
              style={{ fontFamily: "Plus Jakarta" }}
            >
              Savor Every Moment at Platia
            </h1>
            <p className="text-[20px] text-white">
              Indulge in authentic Italian cuisine crafted with passion and the
              finest ingridients. From traditional recipes passed down through
              generations to innovate culinary creations, we offer an
              unforgetable dining experience.
            </p>
            <div className="flex gap-6 w-100 h-auto">
              <button
                className="bg-amber-600 rounded-3xl text-[20px] text-white p-4
                    hover:bg-[#d75919]
                    transition-all duration-200
                    hover:-translate-y-1"
              >
                Book a Table
              </button>

              <button
                className="border-white border-2 rounded-3xl text-[20px] text-white p-4
                    hover:border-[#E07844] hover:text-[#E07844]
                    transition-all duration-200
                    hover:-translate-y-1"
              >
                View Menu
              </button>
            </div>
          </div>
          <div className="w-[50%] mt-10">
            <div className="w-[400px] bg-black/30 h-auto rounded-3xl ms-auto pt-6 px-3">
              <h1 className="text-white text-2xl text-center my-2" style={{fontFamily:"plus"}}>Make a Reservation</h1>
              <form action="" className="grid-cols-2">
                <input className="border-amber-50 border-3 rounded-2xl  mx-2 p-4 w-[45%] my-3 outline-0 text-amber-50 " type="text" placeholder="Your Name" />
                <input className="border-amber-50 border-3 rounded-2xl  mx-2  p-4 w-[45%] my-3 outline-0 text-amber-50 " type="email" placeholder="Your Email" />
                <input className="border-amber-50 border-3 rounded-2xl  mx-2  p-4  w-[45%] outline-0  my-3 text-amber-50 " type="tell" placeholder="Your Phone" />
                <select name="" style={{appearance:"none", WebkitAppearance:"none", backgroundImage:"none"}} className="border-amber-50 border-3 rounded-2xl  mx-2 outline-0 p-4 w-[45%]  my-3 text-amber-50 " id="">
                  <option className="px-3" value="">Guests</option>
                </select>
                <input className="border-amber-50 border-3 rounded-2xl  p-4  my-3 outline-0 mx-2 w-[45%]  text-amber-50 " type="date" placeholder="mm/dd/yyyy" />
                <input className="border-amber-50 border-3 rounded-2xl  p-4  my-3 outline-0 mx-2 w-[45%] text-amber-50 " type="time"/>
                <textarea className="w-[95%] border-amber-50 border-3 rounded-2xl mx-2 my-3 p-4 outline-0 text-amber-50" placeholder="Special requests or Dietary restrictions" id=""></textarea>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

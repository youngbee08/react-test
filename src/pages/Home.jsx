import React from "react";
import assets from "../assets/assets";
import { Menu } from "lucide-react";

function Home() {
  return (
    <div>
    
      <section>
        <video
          src={assets.video}
          className="lg:h-[100vh] h-[200vh] w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full lg:h-full h-[200vh] bg-black/50"></div>

        <div className="absolute flex lg:flex-row flex-col justify-between h-[90vh] top-10 lg:px-20 px-2 pt-7">
          <div className="lg:w-[50%] w-[100%] mt-12 flex flex-col gap-7">
            <h1 className="text-[#E07844] text-[17px]">
              EXPERIENCE CULINARY EXCELLENCE
            </h1>
            <h1
              className="text-6xl font-extrabold text-white"
              style={{ fontFamily: "Plus Jakarta" }}
            >
              Savor Every Moment at Platia
            </h1>
            <p className="text-[18px] text-white w-[90%]" >
              Indulge in authentic Italian cuisine crafted with passion and the
              finest ingridients. From traditional recipes passed down through
              generations to innovate culinary creations, we offer an
              unforgetable dining experience.
            </p>
            <div className="flex lg:flex-row flex-col gap-6 w-100 h-auto">
              <button
                className="bg-amber-600 rounded-2xl lg:w-auto w-[90%] text-[18px] text-white p-4
                    hover:bg-[#d75919]
                    transition-all duration-200
                    hover:-translate-y-1"
              >
                Book a Table
              </button>

              <button
                className="border-white border-2 rounded-2xl lg:width-auto w-[90%] text-[18px] text-white p-4
                    hover:border-[#E07844] hover:text-[#E07844]
                    transition-all duration-200
                    hover:-translate-y-1"
              >
                View Menu
              </button>
            </div>
          </div>
          <div className="lg:w-[50%] w-[100%] mt-3 ">
            <div className="w-[360px] bg-black/30 h-auto rounded-3xl lg:ms-auto  pt-6 px-3">
              <h1 className="text-white text-2xl text-center my-2" style={{fontFamily:"plus"}}>Make a Reservation</h1>
              <form action="" className="grid-cols-2">
                <input className="border-[#9E9D93] border-3 rounded-2xl  mx-2 p-4 w-[45%] my-3 outline-0 text-amber-50 " type="text" placeholder="Your Name" />
                <input className="border-[#9E9D93] border-3 rounded-2xl  mx-2  p-4 w-[45%] my-3 outline-0 text-amber-50 " type="email" placeholder="Your Email" />
                <input className="border-[#9E9D93] border-3 rounded-2xl  mx-2  p-4  w-[45%] outline-0  my-3 text-amber-50 " type="tell" placeholder="Your Phone" />
                <select name="" style={{appearance:"none", WebkitAppearance:"none", backgroundImage:"none"}} className="bborder-[#9E9D93] border-3 rounded-2xl  mx-2 outline-0 p-4 w-[45%]  my-3 text-[#9E9D93] text-[16px] " id="">
                  <option className="px-3 text-[#9E9D93]" value="">Guests</option>
                </select>
                <input className="border-[#9E9D93] border-3 rounded-2xl  py-4 px-3  my-3 outline-0 mx-2 w-[45%]  text-[#9E9D93] " type="date" placeholder="" />
                <input className="border-[#9E9D93] border-3 rounded-2xl  p-4  my-3 outline-0 mx-2 w-[45%] text-[#9E9D93] " type="time"/>
                <textarea className="w-[95%] border-[#9E9D93] border-3 rounded-2xl mx-2 my-3 p-4 outline-0 text-amber-50" placeholder="Special requests or Dietary restrictions" id=""></textarea>
                <button className="btn w-[95%] mx-2 text-white text-[20px] rounded-2xl bg-amber-600 p-4 mb-3  hover:bg-[#d75919]
                    transition-all duration-200
                    hover:-translate-y-1">Reserve Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

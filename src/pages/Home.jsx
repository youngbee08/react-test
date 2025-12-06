import React from "react";
import assets from "../assets/assets";
import { Award, Menu, Trophy } from "lucide-react";
import { useState } from "react";
import { foodData } from "../components/data"; // <-- your data file

function Home() {
  const categories = ["all", "appetizers", "Entrees", "sweet_treats", "Beverages"];
  const [activeTab, setActiveTab] = useState("all");

  const allFoods = [
    ...foodData.appetizers.map((item) => ({ ...item, category: "appetizers" })),
    ...foodData.Entrees.map((item) => ({ ...item, category: "Entrees" })),
    ...foodData.sweet_treats.map((item) => ({ ...item, category: "sweet_treats" })),
    ...foodData.Beverages.map((item) => ({ ...item, category: "Beverages" })),
  ];

  const displayedFood = activeTab === "all" ? allFoods : foodData[activeTab];

  return (
    <div>
      <section id="home">
        <video
          src={assets.video}
          className="lg:h-[100vh] h-[200vh] md:h-[120vh] w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full lg:h-full h-[200vh] md:h-[120vh] bg-black/50"></div>

        <div className="absolute flex lg:flex-row flex-col justify-between h-[90vh] top-10 lg:px-20 px-2 md:px-5 pt-7">
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
            <p className="text-[18px] text-white w-[90%]">
              Indulge in authentic Italian cuisine crafted with passion and the
              finest ingridients. From traditional recipes passed down through
              generations to innovate culinary creations, we offer an
              unforgetable dining experience.
            </p>
            <div className="flex lg:flex-row md:flex-row flex-col gap-6 w-100 h-auto">
              <button
                className="bg-amber-600 rounded-2xl lg:w-auto md:w-auto  w-[90%] text-[18px] text-white p-4
                    hover:bg-[#d75919]
                    transition-all duration-200
                    hover:-translate-y-1"
              >
                Book a Table
              </button>

              <button
                className="border-white border-2 rounded-2xl lg:w-auto md:w-auto  w-[90%] text-[18px] text-white p-4
                    hover:border-[#E07844] hover:text-[#E07844]
                    transition-all duration-200
                    hover:-translate-y-1"
              >
                View Menu
              </button>
            </div>
          </div>
          <div className="lg:w-[39%] w-[100%] lg:mt-0 mt-3 md:mt-20">
            <div className="w-[100%] md:w-[100%] bg-black/30 h-auto rounded-3xl lg:ps-auto  pt-6 ps-3">
              <h1
                className="text-white text-2xl text-center my-2"
                style={{ fontFamily: "plus" }}
              >
                Make a Reservation
              </h1>
              <form action="" className="grid-cols-2">
                <input
                  className="border-[#9E9D93] border-3 rounded-2xl  mx-2 p-4 w-[45%] my-3 outline-0 text-amber-50 "
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="border-[#9E9D93] border-3 rounded-2xl  mx-2  p-4 w-[45%] my-3 outline-0 text-amber-50 "
                  type="email"
                  placeholder="Your Email"
                />
                <input
                  className="border-[#9E9D93] border-3 rounded-2xl  mx-2  p-4  w-[45%] outline-0  my-3 text-amber-50 "
                  type="tel"
                  placeholder="Your Phone"
                />
                <select
                  name=""
                  style={{
                    appearance: "none",
                    WebkitAppearance: "none",
                    backgroundImage: "none",
                  }}
                  className="border-[#9E9D93] border-3 rounded-2xl  mx-2 outline-0 p-4 w-[45%]  my-3 text-[#9E9D93] text-[16px] "
                  id=""
                >
                  <option className="px-3 text-[#9E9D93]" value="">
                    Guests
                  </option>
                </select>
                <input
                  className="border-[#9E9D93] border-3 rounded-2xl  py-4 px-3  my-3 outline-0 mx-2 w-[45%]  text-[#9E9D93] "
                  type="date"
                  placeholder=""
                />
                <input
                  className="border-[#9E9D93] border-3 rounded-2xl  p-4  my-3 outline-0 mx-2 w-[45%] text-[#9E9D93] "
                  type="time"
                />
                <textarea
                  className="w-[95%] border-[#9E9D93] border-3 rounded-2xl mx-2 my-3 p-4 outline-0 text-amber-50"
                  placeholder="Special requests or Dietary restrictions"
                  id=""
                ></textarea>
                <button
                  className="btn w-[95%] mx-2 text-white text-[20px] rounded-2xl bg-amber-600 p-4 mb-3  hover:bg-[#d75919]
                    transition-all duration-200
                    hover:-translate-y-1"
                >
                  Reserve Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="lg:h-[120vh] md:h-auto h-auto bg-[#F8EFEB] py-5 lg:px-20 md:px-5 px-2"
      >
        <h1
          style={{ fontFamily: "Plus Jakarta" }}
          className="text-4xl font-bold text-center my-5"
        >
          About
        </h1>
        <p className="text-center md-text-[17px] mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          assumenda ea reiciendis!
        </p>
        <div className="flex lg:flex-row md:flex-col flex-col relative md:gap-7">
          <div className="lg:w-[50%] md:w-[100%] w-[100%] flex flex-col gap-3">
            <h1
              style={{ fontFamily: "Plus Jakarta" }}
              className="lg:text-3xl md:text-3xl text-4xl font-extrabold my-5"
            >
              Experience our Unique Approach
            </h1>
            <p className="text-[18px] italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              dolore sed repellendus laboriosam repudiandae. Deserunt, numquam
              accusantium
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              maxime velit atque fuga ipsum blanditiis cumque provident et
              accusantium, excepturi officiis autem inventore tempore ut.
            </p>
            <div className="flex flex-col lg:flex-row md:flex-row gap-3 items-center mt-4">
              <div className="flex flex-col gap-3 p-5 bg-white rounded-2xl shadow transition-transform duration-300 hover:scale-105">
                <Award size={"25px"} color="#E07844" />
                <h1 style={{ fontFamily: "Plus Jakarta" }} className="text-2xl">
                  Exceptional Service
                </h1>
                <p className="text-[15px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  nesciunt excepturi adipisci!
                </p>
              </div>
              <div className="flex flex-col gap-3 p-5 bg-white rounded-2xl shadow transition-transform duration-300 hover:scale-105">
                <Trophy size={"25px"} color="#E07844" />
                <h1 style={{ fontFamily: "Plus Jakarta" }} className="text-2xl">
                  Industry Recognition
                </h1>
                <p className="text-[15px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  nesciunt excepturi adipisci!
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] md:w-[100%] w-[100%] grid grid-cols-12 gap-3 lg:p-5 md:p-5 p-1 mt-10 lg:mt-0 md:mt-6">
            <img
              src={assets.showcase3}
              alt=""
              className="lg:rounded-2xl   col-span-6  transition-transform duration-300 hover:scale-105"
            />
            <img
              src={assets.showcase8}
              alt=""
              className="lg:rounded-2xl    col-span-6  transition-transform duration-300 hover:scale-105"
            />
            <img
              src={assets.showcase6}
              alt=""
              className="lg:rounded-2xl   grid col-span-12  transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overlay lg:p-3 md:p-3 p-3 bg-[#E07844] rounded-2xl absolute text-center md:absolute md:top-240 lg:top-85 top-245 end-4 lg:end-20 md:end-20 text-white">
            <h1 className="lg:text-3xl md:text-3xl text-2xl">18</h1>
            <p>Years of Dedication</p>
          </div>
        </div>
      </section>
      
      <section id="menu" className="bg-[#F8EFEB] py-14 px-4 lg:px-20">
        <h1
          style={{ fontFamily: "Plus Jakarta" }}
          className="text-4xl font-bold text-center mb-3"
        >
          Our Menu
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Explore a variety of delicious dishes crafted with passion.
        </p>

        {/* CATEGORY NAV */}
        <nav className="lg:flex lg:justify-center grid-cols-3 md:grid md:grid-cols-5 md:gap-4 gap-20 p-4 md:p-2 mb-12 rounded-4xl bg-white">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`capitalize px-6 py-2 rounded-full transition-all duration-200 transition-transform duration-300 hover:scale-110
        ${
          activeTab === cat
            ? "bg-orange-600 text-white border-orange-600"
            : "border-gray-400 text-gray-700 hover:text-orange-600"
        }
      `}
            >
              {cat === "all"
                ? "All Dishes"
                : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </nav>

        {/* FOOD CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-8">
          {displayedFood.map((item) => (
            <div
              key={`${item.category}-${item.id}`} // use category + id
              className="bg-white shadow-lg h-[350px] rounded-2xl overflow-hidden relative hover:scale-105 duration-200 cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.name}
                className=" w-full h-50 object-cover mb-4"
              />
              <div className="flex flex-col p-5 gap-2">
              <h2 className="font-bold text-xl mb-1">{item.name}</h2>
              <p className="bg-orange-600 absolute top-42 end-6 text-white font-semibold p-3 rounded-3xl">{item.price}</p>
              <p  className="px-3 py-1 bg-green-500 rounded-3xl absolute top-4">{item.tag}</p>
              <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

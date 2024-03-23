import { useEffect, useState } from "react";
import { FaMobileAlt } from "react-icons/fa";
import Navbar from "../components/navbar/Navbar";

const Fratello = () => {
  const [bg, setBG] = useState(1);

  const bg1 = () => {
    setBG(1);
  };

  const bg2 = () => {
    setBG(2);
  };

  const bg3 = () => {
    setBG(3);
  };

  const bg4 = () => {
    setBG(4);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBG((prevBG) => (prevBG === 4 ? 1 : prevBG + 1));
    }, 5000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className={`nav-container w-full bg-cover px-4 md:px-8 ${
          bg === 1
            ? "bg-image1"
            : bg === 2
            ? "bg-image2"
            : bg === 3
            ? "bg-image3"
            : "bg-image4"
        }`}
      >
        <Navbar />
        <div className="hero-section md:max-w-screen-2xl md:mx-auto h-[500px] md:h-[650px] flex flex-col justify-between pb-10">
          <div className="pt-40 text-white">
            <h1 className="text-4xl md:text-6xl md:mb-4 font-bold">
              Fratello Studio
            </h1>
            <p className="text-xl md:text-2xl">
              We build your dream in reality
            </p>
            <button className="w-[200px] bg-transparent hover:bg-white text-white hover:text-black font-bold uppercase py-4 border-2 border-white mt-4 ease-in-out duration-300 rounded">
              Explore Now
            </button>
          </div>
          <ul className="flex items-center space-x-4">
            <li
              className={` text-xl text-bold cursor-pointer hover:text-white ${
                bg === 1 ? "text-white" : "text-slate-600"
              }`}
              onClick={bg1}
            >
              01
            </li>
            <li className="text-slate-600 text-3xl text-bold">-</li>
            <li
              className={` text-xl text-bold cursor-pointer hover:text-white ${
                bg === 2 ? "text-white" : "text-slate-600"
              }`}
              onClick={bg2}
            >
              02
            </li>
            <li className="text-slate-600 text-3xl text-bold">-</li>
            <li
              className={` text-xl text-bold cursor-pointer hover:text-white ${
                bg === 3 ? "text-white" : "text-slate-600"
              }`}
              onClick={bg3}
            >
              03
            </li>
            <li className="text-slate-600 text-3xl text-bold">-</li>
            <li
              className={` text-xl text-bold cursor-pointer hover:text-white ${
                bg === 4 ? "text-white" : "text-slate-600"
              }`}
              onClick={bg4}
            >
              04
            </li>
          </ul>
        </div>
      </div>

      {/* Office Time, Location and Hotline number */}

      <div className="w-full px-4 md:px-8 md:py-4">
        <div className="md:max-w-screen-2xl mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0  justify-between py-4 ">
          {/* Office time */}
          <div className="flex items-center space-x-2">
            <img src="./clock.png" className="w-[48px]" alt="" />
            <div>
              <h3 className="text-xl md:text-2xl mb-1 uppercase font-bold">
                office time
              </h3>
              <p>Sat. to Thurs (10am to 6pm)</p>
            </div>
          </div>

          {/* Office location */}
          <div className="flex items-center space-x-2">
            <img src="./home.png" className="w-[48px]" alt="" />
            <div>
              <h3 className="text-xl md:text-2xl mb-1 uppercase font-bold">
                Our location
              </h3>
              <p>Indira Road, Tejgaon, Dhaka</p>
            </div>
          </div>
          {/* Hotline number */}
          <div className="flex items-center space-x-2">
            <img src="./phone-call.png" className="w-[48px]" alt="" />
            <div>
              <h3 className="text-xl md:text-2xl mb-1 uppercase font-bold">
                Hotline
              </h3>
              <p>+88 01xxx-xxxxxx</p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}

      {/* <div className="w-full bg-[#00000098] pt-[100px] pb-10 ">
            <div className="md:max-w-screen-lg mx-auto">
              <h1 className="text-6xl text-center font-bold mb-10">
              Some Facts About
              </h1>
              <h1 className="text-6xl text-center font-bold">
               Fratello Studios BD
              </h1>
            </div>
      </div> */}

      <div className="w-full  bg-image1 bg-cover">
        <div className="w-full py-[100px] h-full bg-[#00000098] md:px-4">
          {/* <div className="md:max-w-screen-lg mx-auto pb-[100px]">
              <h1 className="text-6xl text-center font-bold mb-10">
              Some Facts About
              </h1>
              <h1 className="text-6xl text-center font-bold">
               Fratello Studios BD
              </h1>
            </div> */}

          {/* stats  */}

          <div className="md:max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            <div className="flex flex-col space-y-8">
              <h2 className="text-white text-3xl md:text-6xl font-bold text-center">
                100+
              </h2>
              <h3 className="text-2xl font-bold text-black uppercase">
                Completed Projects
              </h3>
            </div>
            <div className="flex flex-col space-y-8">
              <h2 className="text-white text-3xl md:text-6xl font-bold text-center">
                200+
              </h2>
              <h3 className="text-2xl font-bold text-black uppercase">
                Satisfied Clients
              </h3>
            </div>
            <div className="flex flex-col space-y-8">
              <h2 className="text-white text-3xl md:text-6xl font-bold text-center">
                20
              </h2>
              <h3 className="text-2xl font-bold text-black uppercase">
                Ongoing Projects
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Our services heading */}
      <div className="w-full py-10">
        <div className="md:max-w-screen-2xl mx-auto flex flex-col items-center space-y-4 px-4 my-[100px]">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            deleniti eaque ipsa! Atque, vel? Impedit ad voluptate recusandae
            pariatur, neque nulla exercitationem dignissimos ipsam
            necessitatibus explicabo nemo modi. Dolorum ipsum maiores
            perferendis ab, repellendus autem vel veritatis. Fugiat vel veniam
            ipsum veritatis ex aliquid ipsa animi magni eveniet, quisquam non?
          </p>
          <div className="w-[200px] h-2 bg-slate-800"></div>
        </div>
        {/* services cards */}

        <div className="md:max-w-screen-2xl mx-auto flex flex-wrap justify-center sm:justify-center md:justify-around lg:justify-between px-4">
          <div className="p-4 border border-slate-500 mb-10 hover:bg-slate-500 hover:text-white ease-in-out duration-300 rounded cursor-pointer">
            <img
              src="./Residential-Interior-Design-services-Dhaka.jpg"
              alt=""
              className="rounded h-[400px] w-[451px]"
            />
            <p className="font-bold uppercase text-center py-4 text-xl">
              Residential Interior Design
            </p>
          </div>
          <div className="p-4 border border-slate-500 mb-10 hover:bg-slate-500 hover:text-white ease-in-out duration-300 rounded cursor-pointer">
            <img
              src="./office-interior.png"
              alt=""
              className="rounded h-[400px] w-[451px]"
            />
            <p className="font-bold uppercase text-center py-4 text-xl">
              Office Interior Design
            </p>
          </div>
          <div className="p-4 border border-slate-500 mb-10 hover:bg-slate-500 hover:text-white ease-in-out duration-300 rounded cursor-pointer">
            <img
              src="./Restaurant-Interior-Design-Services.jpg"
              alt=""
              className="rounded h-[400px] w-[451px]"
            />
            <p className="font-bold uppercase text-center py-4 text-xl">
              Restaurant Interior Design
            </p>
          </div>
          <div className="p-4 border border-slate-500 mb-10 hover:bg-slate-500 hover:text-white ease-in-out duration-300 rounded cursor-pointer">
            <img
              src="./hospital-Interior.jpg"
              alt=""
              className="rounded h-[400px] w-[451px]"
            />
            <p className="font-bold uppercase text-center py-4 text-xl">
              Hospital Interior Design
            </p>
          </div>
          <div className="p-4 border border-slate-500 mb-10 hover:bg-slate-500 hover:text-white ease-in-out duration-300 rounded cursor-pointer">
            <img
              src="./showroom-Interior.jpg"
              alt=""
              className="rounded h-[400px] w-[451px]"
            />
            <p className="font-bold uppercase text-center py-4 text-xl">
              Showroom Interior Design
            </p>
          </div>
          <div className="p-4 border border-slate-500 mb-10 hover:bg-slate-500 hover:text-white ease-in-out duration-300 rounded cursor-pointer">
            <img
              src="./Exterior-Design.jpg"
              alt=""
              className="rounded h-[400px] w-[451px]"
            />
            <p className="font-bold uppercase text-center py-4 text-xl">
              Exterior Design
            </p>
          </div>
        </div>
      </div>

      {/* our clients section */}
      <div className="w-full">
        <div className="md:max-w-screen-2xl mx-auto flex flex-col items-center space-y-4 px-4 my-[100px]">
          <h1 className="text-4xl font-bold">Our Clients</h1>
          <p className="text-xl text-justify">
            We take pride in our clients. We know that our success depends on
            their satisfaction and we work hard to make sure each and every one
            of our clients is happy with the service they receive.
          </p>
          <div className="w-[200px] h-2 bg-slate-800"></div>
          <div className="flex flex-wrap gap-10 items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <img src="./bd-army.png" alt="" className="w-[180px]" />
              <h4 className="text-2xl">Bangladesh Army</h4>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="./baf.png" alt="" className="w-[180px]" />
              <h4 className="text-2xl">Bangladesh Airforce</h4>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="./mes.png" alt="" className="w-[180px]" />
              <h4 className="text-2xl">Military Engineer Services</h4>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="./bd-army.png" alt="" className="w-[180px]" />
              <h4 className="text-2xl">Bangladesh Army</h4>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="./baf.png" alt="" className="w-[180px]" />
              <h4 className="text-2xl">Bangladesh Airforce</h4>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="./mes.png" alt="" className="w-[180px]" />
              <h4 className="text-2xl">Military Engineer Services</h4>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="./bd-army.png" alt="" className="w-[180px]" />
              <h4 className="text-2xl">Bangladesh Army</h4>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="./baf.png" alt="" className="w-[180px]" />
              <h4 className="text-2xl">Bangladesh Airforce</h4>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="./mes.png" alt="" className="w-[180px]" />
              <h4 className="text-2xl">Military Engineer Services</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Our work process */}
      <div className="w-full">
        <div className="md:max-w-screen-2xl mx-auto flex flex-col items-center space-y-4 px-4 my-[100px]">
          <h1 className="text-4xl font-bold">Our Work Process</h1>
          <p className="text-xl text-justify">
            When it comes to interior design, there is no single right or wrong
            way to go about it. However, there are certain steps that should
            always be taken during the process, in order to ensure that the end
            result is a beautiful and functional space.
          </p>
          <div className="w-[200px] h-2 bg-slate-800"></div>
          <div className="flex flex-wrap gap-10 items-center justify-center mt-10">
            <div className="lg:w-[23%] flex flex-col items-center justify-center gap-4">
              <img src="./discuss-with-client-1.png" alt="" />
              <h4 className="text-2xl font-bold">Discuss</h4>
              <div className="w-[120px] h-1 bg-slate-800"></div>
              <p className=" text-justify text-slate-800 font-bold">
                We are very transparent when we discuss with our clients.
              </p>
            </div>
            <div className="lg:w-[23%] flex flex-col items-center justify-center gap-4">
              <img src="./decide.jpg" alt="" />
              <h4 className="text-2xl font-bold">Decide</h4>
              <div className="w-[120px] h-1 bg-slate-800"></div>
              <p className=" text-justify text-slate-800 font-bold">
                After discussion, we collect their requirements and decide &
                execute the designs.
              </p>
            </div>
            <div className="lg:w-[23%] flex flex-col items-center justify-center gap-4">
              <img src="./Design.png" alt="" />
              <h4 className="text-2xl font-bold">Design</h4>
              <div className="w-[120px] h-1 bg-slate-800"></div>
              <p className=" text-justify text-slate-800 font-bold">
                Our highly skilled architects and designers make clients’ dreams
                come true.
              </p>
            </div>
            <div className="lg:w-[23%] flex flex-col items-center justify-center gap-4">
              <img src="./deliver.png" alt="" />
              <h4 className="text-2xl font-bold">Deliver</h4>
              <div className="w-[120px] h-1 bg-slate-800"></div>
              <p className=" text-justify text-slate-800 font-bold">
                With careful execution and design, we deliver a unique and
                stylish living space that fits the needs of our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-image5y">
        <div className="w-full bg-[#00000098]">
          <div className="md:max-w-screen-2xl mx-auto px-4 my-[100px] min-h-[400px] flex flex-col items-center justify-center gap-5">
            <h1 className="text-4xl text-white font-bold text-center">
              Let's Plan Your Interior Design Together!
            </h1>
            <h2 className="flex items-center justify-center text-3xl text-white bg-slate-800 px-2 py-2 cursor-pointer rounded">
              <FaMobileAlt /> +8801xxx-xxxxxx
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fratello;

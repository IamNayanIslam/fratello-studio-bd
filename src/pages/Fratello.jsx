import { useEffect, useState } from "react"
import Navbar from "../components/navbar/Navbar";

const Fratello = () => {

  const [bg, setBG] = useState(1);

  const bg1 = () => {
    setBG(1)
  }

  const bg2 = () => {
    setBG(2)
  }

  const bg3 = () => {
    setBG(3)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setBG((prevBG) => (prevBG === 3 ? 1 : prevBG + 1));
    }, 10000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
      <div className={`nav-container w-full bg-cover px-4 md:px-8 ${bg === 1 ? "bg-image1" : bg === 2 ? "bg-image2" : "bg-image3"}`}>
        <Navbar/>
        <div className="hero-section md:max-w-screen-lg md:mx-auto h-[500px] md:h-[650px] flex flex-col justify-between pb-10">
            <div className="pt-40 text-white">
              <h1 className="text-4xl md:text-6xl md:mb-4 font-bold">Fratello Studio</h1>
              <p className="text-xl md:text-2xl">We build your dream in reality</p>
            </div>
            <ul className="flex items-center space-x-4">
              <li className={` text-3xl text-bold cursor-pointer hover:text-white ${bg === 1 ? "text-white" : "text-slate-600"}` } onClick={bg1}>01</li>
              <li className="text-slate-600 text-3xl text-bold">-</li>
              <li className={` text-3xl text-bold cursor-pointer hover:text-white ${bg === 2 ? "text-white" : "text-slate-600"}` } onClick={bg2}>02</li>
              <li className="text-slate-600 text-3xl text-bold">-</li>
              <li className={` text-3xl text-bold cursor-pointer hover:text-white ${bg === 3 ? "text-white" : "text-slate-600"}` } onClick={bg3}>03</li>
            </ul>
          </div>
      </div>

    {/* Office Time, Location and Hotline number */}

      <div className="w-full px-4 md:px-8 md:py-4">
        <div className="md:max-w-screen-lg mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0  justify-between py-4 ">
          {/* Office time */}
          <div className="flex items-center space-x-2">
            <img src="./clock.png" className="w-[48px]" alt="" />
            <div>
              <h3 className="text-xl md:text-2xl mb-1 uppercase font-bold">office time</h3>
              <p>Sat. to Thurs (10am to 6pm)</p>
            </div>
          </div>

          {/* Office location */}
          <div className="flex items-center space-x-2">
            <img src="./home.png" className="w-[48px]" alt="" />
            <div>
              <h3 className="text-xl md:text-2xl mb-1 uppercase font-bold">Our location</h3>
              <p>Indira Road, Tejgaon, Dhaka</p>
            </div>
          </div>
          {/* Hotline number */}
          <div className="flex items-center space-x-2">
            <img src="./phone-call.png" className="w-[48px]" alt="" />
            <div>
              <h3 className="text-xl md:text-2xl mb-1 uppercase font-bold">Hotline</h3>
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
          

        <div className="md:max-w-screen-lg mx-auto pb-[100px]">
              <h1 className="text-6xl text-center font-bold mb-10">
              Some Facts About
              </h1>
              <h1 className="text-6xl text-center font-bold">
               Fratello Studios BD
              </h1>
            </div>

          {/* stats  */}

          <div className="md:max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            <div className="flex flex-col space-y-8">
                <h2 className="text-white text-3xl md:text-6xl font-bold text-center">100+</h2>
                <h3 className="text-2xl font-bold text-black uppercase">Completed Projects</h3>
              </div>
              <div className="flex flex-col space-y-8">
                <h2 className="text-white text-3xl md:text-6xl font-bold text-center">200+</h2>
                <h3 className="text-2xl font-bold text-black uppercase">Satisfied Clients</h3>
              </div>
              <div className="flex flex-col space-y-8">
                <h2 className="text-white text-3xl md:text-6xl font-bold text-center">20</h2>
                <h3 className="text-2xl font-bold text-black uppercase">Ongoing Projects</h3>
              </div>
          </div>


        </div>
      </div>
    </>

  )
}

export default Fratello
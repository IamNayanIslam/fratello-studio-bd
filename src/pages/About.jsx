import Navbar from "../components/navbar/Navbar";

const About = () => {
  return (
    <>
      <div className="w-full bg-image1 bg-cover bg-center">
        <div className="w-full bg-[#000000b7]">
          <div className="md:max-w-screen-2xl mx-auto">
            <div className="w-full px-4 md:px-8 md:py-4">
              <Navbar />
            </div>
            <div className="flex flex-col gap-4 items-center pb-10">
              <h1 className="text-6xl font-bold uppercase text-white text-center">
                About Us
              </h1>
              <h4 className="text-xl font-bold text-white text-center">
                CREATING BEAUTIFUL INTERIORS IN BANGLADESH SINCE 201X
              </h4>
              <p className="font-bold text-xl text-white text-center">
                Will the next one be yours?
              </p>
              <button className="border border-white text-white md:text-4xl text-2xl py-3 px-4 font-bold  hover:bg-white hover:text-black duration-300 md:mt-10">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:max-w-screen-2xl mx-auto flex flex-col sm:flex-col md:flex-row justify-between items-center my-10 px-4">
        <div className="sm:w-full md:w-1/2 md:mr-4">
          <p className="text-xl text-gray-600 text-justify mb-10">
            <span className="text-green-600 font-bold mr-2">
              Fratello Studio BD
            </span>{" "}
            is a leading Interior & Exterior Design Company in Dhaka,
            Bangladesh. We focus on creating an overall internal environment
            that responds to the human condition.
          </p>
          <p className="text-xl text-gray-600 text-justify mb-10">
            <span className="text-green-600 font-bold mr-2">
              Fratello Studio BD's
            </span>{" "}
            unique perception of the available space renders sophisticated,
            ergonomic, and luxurious design that transforms a house into a home.
            The touch has been extended to a variety of platforms, including
            landscapes, office interiors, villas, communities, retail spaces,
            and even a single room.
          </p>
          <p className="text-xl text-gray-600 text-justify mb-10">
            We have successfully completed around 100 projects all over the
            country, mainly in Dhaka.
          </p>
        </div>
        <div className="bg-about w-full md:w-1/2 md:h-[400px] h-[300px] bg-cover bg-center flex flex-col items-center gap-4 justify-center">
          <h1 className="text-4xl font-bold text-green-600">
            Fratello Studio BD
          </h1>
          <a
            href="tel:+88016160657"
            className="text-2xl bg-green-600 px-4 py-2 rounded text-white hover:bg-green-400 duration-300"
          >
            Call Now
          </a>
        </div>
      </div>
      <div className="md:max-w-screen-2xl mx-auto flex flex-col sm:flex-col md:flex-row justify-between items-center my-10 px-4">
        <div>
          <h1 className="text-6xl text-center mb-20 font-bold">
            Meet Our Founders
          </h1>

          {/* founders profile */}

          <div className="flex justify-between flex-col md:flex-row gap-4">
            <div className="flex flex-col items-center border border-green-600 p-4 rounded">
              <img
                src="./founder-dummy.jpg"
                alt=""
                className="w-[192px] rounded-full"
              />
              <h2 className="text-2xl font-bold text-center py-3">
                Founders Name
              </h2>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem molestiae deserunt illum excepturi iste sunt, nostrum
                ipsam placeat explicabo recusandae inventore praesentium
                accusamus odit ipsa perspiciatis optio incidunt laboriosam
                distinctio nulla. Aspernatur optio culpa odit est vero eveniet
                necessitatibus sunt hic, corrupti id laudantium natus veniam
                perferendis numquam quam ratione?
              </p>
            </div>
            <div className="flex flex-col items-center border border-green-600 p-4 rounded">
              <img
                src="./founder-dummy.jpg"
                alt=""
                className="w-[192px] rounded-full"
              />
              <h2 className="text-2xl font-bold text-center py-3">
                Founders Name
              </h2>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem molestiae deserunt illum excepturi iste sunt, nostrum
                ipsam placeat explicabo recusandae inventore praesentium
                accusamus odit ipsa perspiciatis optio incidunt laboriosam
                distinctio nulla. Aspernatur optio culpa odit est vero eveniet
                necessitatibus sunt hic, corrupti id laudantium natus veniam
                perferendis numquam quam ratione?
              </p>
            </div>
            <div className="flex flex-col items-center border border-green-600 p-4 rounded">
              <img
                src="./founder-dummy.jpg"
                alt=""
                className="w-[192px] rounded-full"
              />
              <h2 className="text-2xl font-bold text-center py-3">
                Founders Name
              </h2>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem molestiae deserunt illum excepturi iste sunt, nostrum
                ipsam placeat explicabo recusandae inventore praesentium
                accusamus odit ipsa perspiciatis optio incidunt laboriosam
                distinctio nulla. Aspernatur optio culpa odit est vero eveniet
                necessitatibus sunt hic, corrupti id laudantium natus veniam
                perferendis numquam quam ratione?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

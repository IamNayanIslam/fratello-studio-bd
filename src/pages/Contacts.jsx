import { useEffect } from "react";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/navbar/Navbar";
import { IoCall } from "react-icons/io5";

const Contacts = () => {
  useEffect(() => {
    document.title = "Contacts || Fratello Studio BD"; // Update the document title
  }, []);
  return (
    <div className="w-full">
      {/* <div className="sticky left-0 top-0 px-6 bg-green-600">
        <h2 className="text-2xl text-center text-white font-bold  w-full py-2">
          <span className="flex justify-center items-center">
            <IoCall /> +8801xxx-xxxxxx
          </span>
        </h2>
      </div> */}
      {/* <div className="w-full px-4 md:px-8 md:py-4">
        <Navbar />
      </div> */}

      {/* Contacts Hero Section */}
      <div className="bg-contacts bg-cover bg-no-repeat bg-center">
        <div className="w-full px-4 md:px-8 md:py-4">
          <Navbar />
        </div>
        <div className="w-full md:min-h-[600px] min-h-[400px] flex flex-col gap-4 items-center justify-center">
          <h1 className="lg:text-6xl md:text-4xl text-2xl text-center font-bold lg:font-normal text-white">
            WANT TO DISCUSS A DESIGN PROJECT?
          </h1>
          <p className="lg:text-2xl font-bold text-white px-4 text-center">
            We’ll be happy to sit with you and help you translate your design
            dream into reality!
          </p>
        </div>
      </div>

      {/* contact area  */}
      <div className="w-full lg:max-w-screen-2xl mx-auto px-6 mt-20 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:gap-1 gap-10 px-2 md:px-0">
          <div className="w-full md:w-1/2">
            <ContactDetails />
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
        <div className="md:mt-20 mt-10">
          <h2 className="mb-10 text-2xl font-bold">
            Our Location on Google Earth
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1024.7269455360035!2d90.38260311589231!3d23.757657624889223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9bdebbb8697%3A0xd1770fe3188842d7!2sStarPath%20DREAM%20STONE!5e0!3m2!1sbn!2sbd!4v1711173259532!5m2!1sbn!2sbd"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[450px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

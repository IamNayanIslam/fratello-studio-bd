const ContactForm = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center">
        SEND US YOUR THOUGHTS HERE
      </h2>
      <p className="text-xl text-center">We would love to hear from you ❤</p>
      <form action="" className="mt-10 mb-10">
        <div className="flex justify-between items-center md:gap-10 gap-2 md:mb-10 mb-4">
          <input
            type="text"
            name="Name"
            placeholder="Your Name*"
            className="border border-black rounded w-1/2 py-2 px-4"
          />
          <input
            type="text"
            name="phone number"
            placeholder="Your Phone Number*"
            className="border border-black rounded appearance-none w-1/2 py-2 px-4"
          />
        </div>
        <input
          type="email"
          placeholder="Your Email Address*"
          className="border border-black rounded w-full md:mb-10 mb-4 py-2 px-4"
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Write your message here*"
          className="border border-black rounded w-full md:mb-10 mb-4 py-2 px-4"
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white font-bold py-3 px-6 rounded"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

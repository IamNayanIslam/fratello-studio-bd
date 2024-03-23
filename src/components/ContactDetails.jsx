import { MdOutlineMail } from "react-icons/md";
import { FcCellPhone } from "react-icons/fc";

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div>
        <h2 className="uppercase text-2xl mb-4">address</h2>
        <p>
          Fratello Studio BD, 78/B, Indira Road, Farmgate, <br /> Tejgaon, Dhaka
          - 1215, Bangladesh{" "}
        </p>
      </div>
      <div>
        <h2 className="uppercase text-2xl mb-4">opening hours</h2>
        <p>
          {" "}
          <span className="font-bold">Saturday to Thursday</span> - 10 am to 6
          pm
        </p>
        <p>
          <span className="font-bold">Friday </span> - Closed
        </p>
      </div>
      <div>
        <h2 className="uppercase text-2xl mb-4">email</h2>
        <p className="flex items-center gap-1">
          <MdOutlineMail />
          fratellostudiobd@gmail.com
        </p>
      </div>
      <div>
        <h2 className="uppercase text-2xl mb-4">Phone</h2>
        <p className="flex items-center gap-1">
          <FcCellPhone />
          01xxx-xxxxxx / 01xxx-xxxxxx
        </p>
      </div>
      <div>
        <h2 className="uppercase text-2xl mb-4">socials</h2>
        <ul className="flex flex-col gap-2">
          <li>
            <a
              href="#"
              className="hover:underline hover:text-gray-600 hover:font-bold duration-300"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:text-gray-600 hover:font-bold duration-300"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:text-gray-600 hover:font-bold duration-300"
            >
              Google
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:text-gray-600 hover:font-bold duration-300"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:text-gray-600 hover:font-bold duration-300"
            >
              YouTube
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;

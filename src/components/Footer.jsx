// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const navigate = useNavigate();
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle Contact click behavior
  const handleContactClick = () => {
    // Close menu if open

    if (location.pathname === "/") {
      // Already on home, just scroll
      scrollToContact();
    } else {
      // Navigate home first, then scroll after load delay
      navigate("/", { replace: false });
      // Wait for navigation to complete and DOM to update (adjust timeout if needed)
      setTimeout(() => {
        scrollToContact();
      }, 300);
    }
  };
  return (
    <footer className="bg-gray-100 text-gray-700 pt-8 pb-4 ">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between gap-10 md:gap-0">
        {/* Left: Logo + Newsletter + Social */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3 mb-8 md:mb-0">
          <img src="/logo.avif" alt="GSAC Logo" className="h-6 md:h-10 mb-6" />
          <form className="w-full  mx-auto md:mx-0 mb-4">
            <label
              htmlFor="newsletter"
              className="block text-md font-semibold mb-2 text-center md:text-left"
            >
              Subscribe for Updates from GSAC Conference
            </label>
            <input
              id="newsletter"
              type="email"
              placeholder="Enter your email here*"
              className="w-full border rounded-lg border-primary  py-2 px-3 mb-3 bg-transparent text-gray-900 placeholder-gray-400"
            />
            <button
              type="submit"
              className="w-full bg-primary text-white text-base py-2   rounded-lg  hover:bg-blue-800 transition-all duration-300 cursor-pointer"
            >
              SUBSCRIBE NOW
            </button>
          </form>
          <div className="flex  gap-5 md:gap-4 mt-2">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 bg-opacity-20 text-primary hover:bg-opacity-40 transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 bg-opacity-20 text-primary hover:bg-opacity-40 transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 bg-opacity-20 text-primary hover:bg-opacity-40 transition"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 bg-opacity-20 text-primary hover:bg-opacity-40 transition"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Center: Quick Links */}
        <div className="w-full md:w-1/3 flex flex-col  items-center">
          <h3 className="text-lg font-bold mb-4 text-primary">Quick Links</h3>
          <ul className="space-y-2 text-base">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/speakers" className="hover:underline">
                Speakers
              </Link>
            </li>
            <li>
              <Link to="/agenda" className="hover:underline">
                Agenda
              </Link>
            </li>
            <li>
              <Link to="/sponsorship" className="hover:underline">
                Sponsorship
              </Link>
            </li>
            <li
              onClick={handleContactClick}
              className="hover:underline cursor-pointer"
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div className="w-full md:w-1/4 flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-4 text-primary">
            Event Information
          </h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="inline-block text-lg text-gray-800" />
              <p className="">12 December 2025 (Friday)</p>
            </div>
            <div className="flex items-center gap-2 ">
              <FaMapMarkerAlt className="inline-block  text-gray-800 text-lg " />
              <p className="">New Delhi</p>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="inline-block  text-gray-800 text-lg " />
              <a
                href="mailto:praveen.sankaran@aviakul.com"
                className="underline text-primary"
              >
                praveen.sankaran@aviakul.com
              </a>
            </div>
            <div className=" flex items-center gap-2">
              <FaPhoneAlt className="inline-block  text-gray-800 text-lg " />
              <p>+91 93463 70858</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 md:mt-2 py-4 bg-primary-light text-primary text-center text-sm">
        ©2024 by{" "}
        <a
          href="http://www.aviakul.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline cursor-pointer"
        >
          Aviakul Private Limited
        </a>
        . All Copyrights reserved.
      </div>
    </footer>
  );
}

import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Speakers", path: "/speakers" },
  { name: "Agenda", path: "/agenda" },
  { name: "Sponsorship", path: "/sponsorship" },
  { name: "Contact", path: "/contact" }, // Special handled below
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll detection for nav background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to contact section if on home page
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle Contact click behavior
  const handleContactClick = () => {
    // Close menu if open
    setOpen(false);

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
    <motion.nav
      className="w-full z-50 fixed top-0"
      animate={{
        backgroundColor: scrolled ? "#ffffff" : "rgba(255,255,255,0)",
        boxShadow: scrolled
          ? "0 2px 10px rgba(0,0,0,0.1)"
          : "0 0px 0px rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-gsacNavy">
          <img src="/logo.avif" alt="GSAC Logo" className="h-6 md:h-10" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) =>
            link.name !== "Contact" ? (
              <Link
                key={link.name}
                to={link.path}
                className="text-primary text-lg hover:text-black transition-colors font-semibold"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={handleContactClick}
                className="text-primary text-lg hover:text-black transition-colors font-semibold bg-transparent border-none cursor-pointer"
              >
                {link.name}
              </button>
            )
          )}
        </nav>

        {/* Register Button */}
        <button className="bg-primary hidden md:block hover:bg-[#154491] text-white py-2 px-8 rounded-md text-lg shadow transition">
          Register Now
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden text-primary text-3xl focus:outline-none"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <AnimatePresence>
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.2 }}
            className="md:hidden  bg-white shadow-black shadow-2xl absolute  right-0 top-0 w-[90%] z-50 h-screen"
          >
            <div className="flex justify-end items-center px-4 py-5 border-b">
              <button
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close menu" : "Open menu"}
                className="md:hidden text-primary text-3xl focus:outline-none "
              >
                {open ? <FaTimes /> : <FaBars />}
              </button>
            </div>
            <ul className="flex flex-col text-lg gap-4 p-4 text-primary">
              {navLinks.map((link) =>
                link.name !== "Contact" ? (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className="block py-2 px-4 rounded hover:bg-gsacGold hover:text-gsacNavy transition-colors font-semibold"
                    >
                      {link.name}
                    </Link>
                  </li>
                ) : (
                  <li key={link.name}>
                    <button
                      onClick={handleContactClick}
                      className="w-full text-left py-2 px-4 rounded hover:bg-gsacGold hover:text-gsacNavy transition-colors font-semibold"
                    >
                      {link.name}
                    </button>
                  </li>
                )
              )}
            </ul>
          </motion.nav>
        </AnimatePresence>
      )}
    </motion.nav>
  );
}

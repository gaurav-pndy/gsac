// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Agenda", path: "/agenda" },
  { name: "Sponsorship", path: "/sponsorship" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-primary text-lg hover:text-black transition-colors font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Register Button */}
        <button className="bg-primary hidden md:block hover:bg-[#154491] text-white py-2 px-8 rounded-md text-lg shadow transition">
          Register Now
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden text-primary text-2xl focus:outline-none"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <nav className="md:hidden bg-white shadow-lg absolute left-0 right-0 top-full z-50">
          <ul className="flex flex-col gap-4 p-4 text-primary">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="block py-2 px-4 rounded hover:bg-gsacGold hover:text-gsacNavy transition-colors font-semibold"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </motion.nav>
  );
}

// src/components/HeroSection.jsx
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center lg:min-h-screen  ">
      <div
        className="absolute inset-0 bg-cover bg-bottom  lg:bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524592714635-d77511a4834d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      {/* Bluish overlay */}
      <div className="absolute inset-0 bg-white/30 mix-blend-multiply"></div>

      {/* Gradient overlay (optional for depth) */}
      <div className="absolute inset-0 bg-gradient-to-b xl:bg-gradient-to-r from-white/90 via-white/60 to-white/50 lg:to-transparent"></div>

      <div className="relative z-20    max-w-screen w-full mx-auto px-4 md:px-6 lg:px-8 xl:px-24 pt-20  lg:pt-24">
        <div>
          <div className=" mb-2 lg:mb-4">
            <span className="inline-block bg-primary text-white px-4 md:px-6 py-2 rounded-full text-sm md:text-md md:font-medium shadow-sm">
              Global Sustainable Aviation Conclave — Chapter 3
            </span>
          </div>
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold lg:leading-20 mb-4 text-gray-900 max-w-5xl">
            Accelerating <br />
            Sustainable Aviation: <br />
            <span className="text-primary">
              Policy. Technology. <br /> Action.
            </span>
          </h1>
          {/* Event details */}
          <div className="flex flex-wrap items-center gap-5 mt-8 mb-8 text-gray-600 font-medium text-lg">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-xl text-primary" />
              12 December 2025 (Friday)
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-xl text-primary" />
              New Delhi
            </div>
          </div>
          {/* CTA Buttons */}
          <div className="flex gap-4 mb-10">
            <button className="bg-primary hover:bg-[#154491] text-white  py-2 px-8 rounded-md text-lg shadow transition">
              Register Now
            </button>
            <button className="border-2 border-primary hover:bg-primary hover:text-white text-primary  py-2 px-8 rounded-md text-lg transition">
              View Agenda
            </button>
          </div>
          {/* Organizer details */}
          {/* <p className="text-gray-700 text-lg font-medium">
            Organized by{" "}
            <span className="text-[#2566b0] font-bold">Aviakul</span>
          </p> */}
        </div>
      </div>
    </section>
  );
}

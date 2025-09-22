// src/components/EventOverviewSection.jsx
import {
  FaComments,
  FaChalkboardTeacher,
  FaFireAlt,
  FaLightbulb,
  FaCog,
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaMapMarkerAlt,
  FaBuilding,
  FaIndustry,
} from "react-icons/fa";

const formatItems = [
  {
    icon: <FaComments className="text-primary w-5 h-5" />,
    text: "Panel Discussions",
  },
  {
    icon: <FaLightbulb className="text-primary w-5 h-5" />,
    text: "Keynote Lecture",
  },
  {
    icon: <FaFireAlt className="text-primary w-5 h-5" />,
    text: "Fireside Chats",
  },
  {
    icon: <FaCog className="text-primary w-5 h-5" />,
    text: "Collaborative Workshops",
  },
  {
    icon: <FaChalkboardTeacher className="text-primary w-5 h-5" />,
    text: "Industry Showcases / Technology Exhibits",
  },
];

const eventDetails = [
  {
    label: "Event Title",
    value: "Global Sustainable Aviation Conclave – Chapter 3",
    icon: <FaUsers className="text-primary w-6 h-6" />,
  },
  {
    label: "Proposed Date",
    value: "12 December 2025 (Friday)",
    icon: <FaCalendarAlt className="text-primary w-6 h-6" />,
  },
  {
    label: "Proposed Duration",
    value: "10:00 AM to 4:00 PM",
    icon: <FaClock className="text-primary w-6 h-6" />,
  },
  {
    label: "Target Audience",
    value:
      "Aviation Industry Professionals, Fuel Experts, Sustainability Experts, Defence Personnel, Science & Technology Students, Enthusiasts, Policy Makers, Government Officials, Bureaucrats, Diplomats etc.",
    icon: <FaUsers className="text-primary w-6 h-6" />,
  },
  {
    label: "Expected Quantity",
    value: "~250 Participants / Delegates / Speakers / Guests",
    icon: <FaUsers className="text-primary w-6 h-6" />,
  },
  {
    label: "Venue",
    value: "To be announced",
    icon: <FaBuilding className="text-primary w-6 h-6" />,
  },
  {
    label: "Hosting Organization",
    value: "Aviakul Group of Companies",
    icon: <FaIndustry className="text-primary w-6 h-6" />,
  },
];

export default function ProposedFormat() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-primary">
          Proposed Format
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Proposed Format */}
        <div className="lg:col-span-5">
          <div className="h-full">
            <div className="space-y-6">
              {formatItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/90 border border-white/50"
                >
                  <div className="flex items-center justify-center rounded-full bg-white shadow-md p-3 group-hover:scale-110 transition-transform duration-300 border-2 border-primary/10">
                    {item.icon}
                  </div>
                  <span className="text-gray-800 font-medium text-lg leading-relaxed pt-1">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Event Overview */}
        <div className="lg:col-span-7">
          <div className="p-4 rounded-lg border border-primary/30 shadow-md">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-semibold text-primary">
                Event Overview
              </h3>
            </div>

            <div className="space-y-1 overflow-hidden rounded-xl">
              {eventDetails.map(({ label, value, icon }, idx) => (
                <div
                  key={label}
                  className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-4 transition-colors rounded-lg duration-200 hover:bg-primary-light/30 ${
                    idx % 2 === 0 ? "bg-blue-50" : "bg-blue-100"
                  }`}
                >
                  <div className="md:col-span-1 flex items-start  gap-3 font-semibold text-primary">
                    <span className="text-primary">{icon}</span>
                    <span>{label}</span>
                  </div>
                  <div className="md:col-span-2 text-gray-800 leading-relaxed ">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

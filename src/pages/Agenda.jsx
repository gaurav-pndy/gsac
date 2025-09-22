// src/pages/Agenda.jsx
import {
  FaCalendarAlt,
  FaUserAlt,
  FaMicrophoneAlt,
  FaUsers,
  FaCoffee,
  FaMoneyCheckAlt,
  FaLightbulb,
  FaAward,
  FaClock,
  FaRegClock,
} from "react-icons/fa";

const agendaItems = [
  {
    no: "1",
    icon: <FaCoffee />,
    topic: "Registration & High Tea",
    session: "09:00 – 10:00 Hrs",
  },
  {
    no: "2",
    icon: <FaUsers />,
    topic: "Opening Ceremony Inaugural Session",
    session: "10:00 – 11:00 Hrs",
    speakers: "Hon’ble Minister(s), Bureaucrats, Officials, Industry Invitees",
  },
  {
    no: "3",
    icon: <FaMicrophoneAlt />,
    topic: "Keynote Lecture 1: Enabling Sustainability through Policy",
    session: "11:00 – 11:15 Hrs",
    speakers: "Bureaucrats, Officials, Industry Invitees [1 Speaker]",
  },
  {
    no: "4",
    icon: <FaUsers />,
    topic: "Panel Discussion 1: Sustainable Aviation Fuel",
    session: "11:15 – 12:30 Hrs",
    speakers:
      "Regulators, Operators, Sustainability Experts, Aviation Professionals [4 Speakers + 1 Moderator]",
  },
  {
    no: "5",
    icon: <FaUsers />,
    topic: "Panel Discussion 2: Building Green Ecosystem (Airports, Infra)",
    session: "12:30 – 13:45 Hrs",
    speakers:
      "Airport Operators, Infrastructure Experts, Sustainability Experts, Aviation Professionals [4 Speakers + 1 Moderator]",
  },
  {
    no: "6",
    icon: <FaCoffee />,
    topic: "Executive Lunch",
    session: "13:45 – 14:45 Hrs",
    speakers: "All Participants",
  },
  {
    no: "7",
    icon: <FaMoneyCheckAlt />,
    topic: "Fireside Chat 1: Financing Sustainable Initiatives",
    session: "14:45 – 15:15 Hrs",
    speakers:
      "Investment Expert, Banking Expert, Finance Expert, Sustainability Expert [1 Speaker + 1 Moderator]",
  },
  {
    no: "8",
    icon: <FaLightbulb />,
    topic: "Keynote Lecture 2: Leveraging cutting edge technologies",
    session: "15:15 – 15:30 Hrs",
    speakers: "Technology Expert [1 Speaker]",
  },
  {
    no: "9",
    icon: <FaAward />,
    topic: "Closing Ceremony Valedictory Session & Sustainable Champion Awards",
    session: "15:30 – 16:15 Hrs",
    speakers: "All Participants",
  },
];

export default function Agenda() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-6 py-16 mt-10 bg-white text-gray-900">
      <h1 className="text-4xl font-bold mb-14 text-primary text-center">
        Preliminary Agenda
      </h1>

      <div className="space-y-8">
        {agendaItems.map(({ no, icon, topic, session, speakers }) => (
          <div
            key={no}
            className="flex flex-col md:flex-row md:items-center  transition duration-300 md:gap-6 group"
          >
            <div className="flex-shrink-0 text-primary mb-4 md:mb-0 md:mr-6 text-5xl group-hover:scale-125 transition-transform duration-300">
              {icon}
            </div>
            <div className="flex-1 bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <p className="flex items-center gap-2 text-lg text-blue-800 font-semibold mb-1">
                <FaRegClock /> {session}
              </p>
              <h3 className="text-xl text-primary md:text-2xl font-semibold mb-1">
                {topic}
              </h3>

              {speakers && (
                <p className="">
                  <span className="text-gray-800 font-medium">
                    Speakers/Guests:{" "}
                  </span>
                  {speakers}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 font-semibold text-center text-gray-600">
        END OF PROGRAM & NETWORKING TEA
      </p>
    </main>
  );
}

// src/pages/Speakers.jsx

const speakers = [
  {
    name: "Capt. John Smith",
    designation: "Chief Pilot, Aviakul Aviation Academy",
    image: "/images/speaker1.jpg", // use your actual image path
  },
  {
    name: "Dr. Jane Doe",
    designation: "Sustainability Expert, Global Aviation Insights",
    image: "/images/speaker2.jpg",
  },
  {
    name: "Mr. Raj Patel",
    designation: "Head of Operations, Aviakul Group",
    image: "/images/speaker3.jpg",
  },
];

export default function Speakers() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 mt-10 bg-white text-gray-900">
      <h1 className="text-4xl font-bold mb-14 text-primary text-center">
        Speakers
      </h1>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {speakers.map(({ name, designation, image }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow-lg"
          >
            <img
              src={image}
              alt={`${name} photo`}
              className="w-40 h-40 object-cover rounded-full mb-5 shadow-md"
            />
            <h3 className="text-xl font-semibold text-primary mb-2 text-center">
              {name}
            </h3>
            <p className="text-gray-700 text-center">{designation}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

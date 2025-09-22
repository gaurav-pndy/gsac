// src/pages/Sponsorship.jsx
import { FaCheckCircle, FaDownload } from "react-icons/fa";

const tiers = [
  {
    name: "Principal",
    amount: "₹8,00,000",
    reserved: true,
    benefits: [
      "Acknowledgement at Opening and Closing of the Conference",
      "Roll-ups stand in the Registration / Conference area",
      "Logo on Press wall",
      "Logo in Registration Arena",
      "Logo in Welcome Banners",
      "Logo in Delegate Bags & Goodies",
      "Final Event Handout Advertising - Back Cover",
      "Company information in the Conference bags (As per agreement)",
      "Branding on Opening Ceremony Conference slide",
      "Logo in Forum Webpage and Newsletters",
      "Logo Projection on Meeting Screens during session breaks",
    ],
  },
  {
    name: "Title",
    amount: "₹5,00,000",
    reserved: false,
    benefits: [
      "Acknowledgement at Opening and Closing of the Conference",
      "Roll-ups stand in the Registration / Conference area",
      "Logo in Registration Arena",
      "Logo in Welcome Banners",
      "Mentioning in the Press campaigns & Advertisements",
      "Final Event Handout Advertising - Last page spread",
      "Company information in the Conference bags (up to 5 pages)",
      "Branding on Opening Ceremony Conference slide",
      "Logo in Forum Webpage and Newsletters",
      "Logo Projection on Meeting Screens during session breaks",
    ],
  },
  {
    name: "Platinum",
    amount: "₹3,00,000",
    reserved: false,
    benefits: [
      "Acknowledgement at Opening and Closing of the Conference",
      "Logo in Welcome Banners",
      "Mentioning in the Press campaigns & Advertisements",
      "Final Event Handout Advertising - Middle Page Spread",
      "Company information in the Conference bags (up to 3 pages)",
      "Branding on Opening Ceremony Conference slide",
      "Logo in Forum Webpage and Newsletters",
    ],
  },
  {
    name: "Golden",
    amount: "₹1,50,000",
    reserved: false,
    benefits: [
      "Acknowledgement at Opening and Closing of the Conference",
      "Logo in Welcome Banners",
      "Final Event Handout Advertising - Half Page Spread",
      "Company information in the Conference bags (up to 2 pages)",
      "Logo in Forum Webpage and Newsletters",
    ],
  },
  {
    name: "Silver",
    amount: "₹75,000",
    reserved: false,
    benefits: [
      "Acknowledgement at Opening and Closing of the Conference",
      "Company information in the Conference bags (1 page)",
      "Logo in Forum Webpage and Newsletters",
    ],
  },
];

export default function Sponsorship() {
  return (
    <main className="max-w-7xl mt-10 mx-auto px-6 py-16 bg-white text-gray-900">
      <h1 className="text-4xl font-bold mb-4 text-primary text-center">
        Sponsorship Packages
      </h1>

      <p className="max-w-3xl mx-auto text-center mb-12 text-lg leading-relaxed">
        You can choose the options suitable for your company and create your own
        individual package, or you can take advantage of our special offers
        presented below:
      </p>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map(({ name, amount, reserved, benefits }) => (
          <div
            key={name}
            className={`border rounded-xl shadow-md p-6 flex flex-col ${
              reserved
                ? "border-red-600 bg-red-50"
                : "border-primary/30 bg-primary-light/30"
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-2 ${
                reserved ? "text-red-700" : "text-primary"
              }`}
            >
              {name} Sponsor
            </h3>
            <p
              className={`font-semibold mb-6 ${
                reserved ? "text-red-700" : "text-primary"
              }`}
            >
              {amount}
              {reserved && " (RESERVED)"}
            </p>
            <ul className="flex-1 space-y-2 text-gray-800">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a
          href="/Sponsorship_Reservation_Form.pdf" // Adjust path as needed
          download
          className="inline-flex items-center gap-2 bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-dark transition"
        >
          <FaDownload />
          Download Sponsorship Reservation Form
        </a>
      </div>
    </main>
  );
}

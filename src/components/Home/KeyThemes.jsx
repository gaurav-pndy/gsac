import {
  FaLeaf,
  FaTree,
  FaDollarSign,
  FaGavel,
  FaRocket,
} from "react-icons/fa";

const themes = [
  {
    icon: FaLeaf,
    title: "Sustainable Aviation Fuel (SAF)",
    points: [
      "Analysing SAF’s role in Aviation Sustainability",
      "The importance of collaboration among governments, airlines, fuel producers, financiers, and civil society in developing a strong SAF ecosystem.",
      "Assessment of India’s feedstock availability, R&D Ecosystem, and production Infrastructure",
      "Developing transparent governance for SAF certification, carbon accounting, and environmental integrity.",
      "Mechanisms for accountability, fair benefit-sharing, and global cooperation in SAF innovation and distribution.",
    ],
  },
  {
    icon: FaTree,
    title: "Building Green Ecosystem",
    points: [
      "Strategies to integrate sustainable landscaping, green spaces, and eco-conscious design in airport expansion projects.",
      "Addressing the absence of a unified framework for measuring carbon emissions across airport operations.",
      "Creating cohesive policies and frameworks for accurate carbon footprint tracking and regulatory compliance.",
      "Integrating Sustainable Aviation Fuel (SAF), eVTOLs, and electric aircraft infrastructure into airport master plans.",
      "Highlighting gaps in wastewater treatment, solid waste segregation, and recycling practices across airports.",
      "Discussing the intermittency of solar and wind energy and the need for robust energy storage solutions.",
      "Assessing airport preparedness to accommodate new aircraft types and energy systems aligned with sustainability goals.",
    ],
  },
  {
    icon: FaRocket,
    title: "Emerging Technological Innovations",
    points: [
      "Challenges in funding development of hydrogen fuel cells, electric propulsion systems, and advanced battery technologies.",
      "Addressing the high upfront costs of adopting digital and green technologies, particularly for small and regional carriers.",
      "Evaluating the readiness of global infrastructure for electric charging stations and liquid hydrogen storage.",
      "Addressing Cybersecurity & Data Privacy Concerns in digital aviation systems.",
      "Upskilling the workforce to operate and maintain emerging technologies.",
      "Discussion on Data-Driven Efficiency vs. Regulation and regulatory barriers to AI and emission reduction tools.",
      "Examining tech readiness and commercial viability of electric aviation globally and in India.",
      "Identifying challenges and investments needed to accelerate digital transformation.",
    ],
  },
  {
    icon: FaDollarSign,
    title: "Investment & Finance for Sustainability",
    points: [
      "Impact of unclear regulatory frameworks on investor confidence.",
      "Opportunities and risks for early adopters of sustainable aviation tech.",
      "Strategies to mobilize funding for SAF, green airports, and clean tech R&D.",
      "Need for stable policy frameworks to attract private investment.",
      "Financing models for net zero transition and inclusive cost-effective approaches.",
      "Insights on aligning with financiers’ priorities.",
      "Role of Sustainability-Linked Financial Instruments such as SLLs and Green Bonds.",
    ],
  },
  {
    icon: FaGavel,
    title: "Policy and Governance",
    points: [
      "Evaluating effectiveness of mandates, incentives, and market mechanisms.",
      "Need for harmonized international certification and transparent emissions tracking.",
      "Frameworks for shared responsibility and collaborative governance among regulators, industry, and civil society.",
    ],
  },
];

export default function KeyThemes() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 bg-white">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-10 text-primary">
        Key Themes & Focus Areas
      </h2>
      <div className="space-y-8">
        {themes.map(({ icon: Icon, title, points }) => (
          <article
            key={title}
            className="p-6  rounded-lg border border-primary/30 shadow-md"
          >
            <div className="flex items-center gap-4 mb-6">
              <Icon className="text-primary text-3xl" />
              <h3 className="text-2xl font-semibold text-primary">{title}</h3>
            </div>
            <ul className="list-disc list-inside text-lg space-y-2 text-gray-800 leading-relaxed">
              {points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

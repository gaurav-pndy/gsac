// src/components/BenefitsObjectivesGrid.jsx
import {
  FaLeaf,
  FaUsers,
  FaNetworkWired,
  FaGlobe,
  FaBalanceScale,
  FaStar,
  FaChartLine,
  FaHandHoldingUsd,
  FaShieldAlt,
  FaChartPie,
  FaHandshake,
  FaSearch,
  FaLightbulb,
  FaTools,
  FaUniversity,
} from "react-icons/fa";

const benefits = [
  "Discover cutting-edge technologies and latest innovations in sustainable aviation, from green aircraft to digital efficiency tools.",
  "Connect with global leaders, policymakers, investors, and industry experts shaping the future of aviation.",
  "Access to mutually collaborative aviation ecosystems with airlines, SAF producers, regulators, and financiers to co-create sustainable solutions.",
  "Gain global insights & trends on international strategies, emerging trends, and best practices in green aviation.",
  "Address the unique growth-sustainability balance in countries like India through shared expertise.",
  "Showcase your leadership in sustainability and gain strategic industry exposure.",
  "Explore Climate-Resilient Financing models and investment opportunities to scale sustainable aviation.",
  "Contribute to aviation alignment with the Paris Agreement and ICAO sustainability targets.",
  "Stay ahead of evolving regulatory frameworks and contribute to discussions aimed at reducing policy fragmentation and enhancing coherence in sustainable aviation governance.",
];

const objectives = [
  "To assess the Global Sustainability Outlook on Aviation by identifying key trends, innovations and best international practices.",
  "To assess India’s readiness to achieve its Net Zero Goals, with a focus on sector – specific challenges, opportunities and policy preparedness.",
  "Foster cross – sector collaboration among industry, academia, to come up with the solutions, Innovations for the bottlenecks present for achieving sustainability in the industry",
  "Analyzing effectiveness of Govt./ international organizations’ initiatives for sustainability",
  "Suggest policy framework, come up with policy recommendations for achieving sustainability",
  "Enhancing awareness among all stakeholders to help achieve industry growth",
  "To evaluate policy pathways, investment opportunities in SAF. To provide a comparative insight from global best practices and in ways India utilizes them to its context.",
  "To address the shortcomings in infrastructure, workforce skills, and technology adoption.",
  "To cater for the challenges and opportunities in SAF Production Infrastructure and Supply Chain.",
  "To highlight the role of military education in nation building and sustainability ethics.",
];

const iconSet = [
  FaLeaf,
  FaUsers,
  FaNetworkWired,
  FaGlobe,
  FaBalanceScale,
  FaStar,
  FaChartLine,
  FaHandHoldingUsd,
  FaShieldAlt,
];

const iconSetObjectives = [
  FaChartPie,
  FaHandshake,
  FaSearch,
  FaLightbulb,
  FaTools,
  FaUniversity,
  FaChartLine,
  FaHandHoldingUsd,
  FaShieldAlt,
  FaBalanceScale,
];

function GridItems({ items, icons, grid }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${grid}  gap-10`}>
      {items.map((text, idx) => {
        const Icon = icons[idx % icons.length];
        return (
          <div
            key={idx}
            className="flex group hover:shadow-lg transition-all duration-300 cursor-pointer items-start gap-4 bg-blue-50 p-4 rounded-lg"
          >
            <div className="flex  items-center justify-center  rounded-lg text-primary self-start">
              <Icon className="text-3xl group-hover:scale-125 transition-all duration-300" />
            </div>
            <p className="text-gray-800 text-lg ">{text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default function Benefits() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 bg-white">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-10 text-primary">
        Benefits
      </h2>
      <GridItems items={benefits} icons={iconSet} grid="md:grid-cols-2" />

      <h2 className="text-3xl md:text-4xl text-center font-bold mt-24 mb-10 text-primary">
        Objectives
      </h2>
      <GridItems
        items={objectives}
        icons={iconSetObjectives}
        grid="md:grid-cols-2"
      />
    </section>
  );
}

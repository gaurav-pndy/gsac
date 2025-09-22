// src/components/ExpectedOutcomesSection.jsx
import {
  FaFileAlt,
  FaGavel,
  FaUsers,
  FaChartLine,
  FaSearch,
  FaCheckCircle,
  FaBalanceScale,
  FaChalkboardTeacher,
  FaComments,
} from "react-icons/fa";

const outcomes = [
  {
    title: "Strategic Conclave Report",
    description:
      "A summary document capturing key insights, innovations, and policy discussions from the event.",
    icon: FaFileAlt,
  },
  {
    title: "Policy Recommendations",
    description:
      "Actionable suggestions addressing regulatory gaps, SAF adoption, and sustainable aviation growth in India and similar economies.",
    icon: FaGavel,
  },
  {
    title: "Collaboration Roadmap",
    description:
      "A framework to foster ongoing partnerships among industry, government, academia, and investors.",
    icon: FaUsers,
  },
  {
    title: "Investment Insights",
    description:
      "Identification of climate-resilient financing models and SAF investment opportunities.",
    icon: FaChartLine,
  },
  {
    title: "Analysis",
    description:
      "Comparative analysis of international success stories and their applicability to India. Discussion-based findings on current gaps and solutions for SAF production and supply chain development.",
    icon: FaSearch,
  },
  {
    title: "Net Zero Readiness Assessment",
    description:
      "Evaluation of India's preparedness, including sectoral challenges and policy pathways.",
    icon: FaCheckCircle,
  },
  {
    title: "Regulatory Review",
    description:
      "Analysis of government and international initiatives with recommendations for greater alignment and impact.",
    icon: FaBalanceScale,
  },
  {
    title: "Capacity Building Plan",
    description:
      "Recommendations for raising awareness and developing workforce skills in sustainable aviation.",
    icon: FaChalkboardTeacher,
  },
  {
    title: "Post-Event Communiqué",
    description:
      "A concise statement capturing key messages and stakeholder commitments for wider dissemination.",
    icon: FaComments,
  },
];

export default function Outcomes() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 bg-white text-gray-900">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-10 text-primary">
        Expected Outcomes and Deliverables
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {outcomes.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="flex flex-col group hover:shadow-lg transition-all duration-300 cursor-pointer items-start gap-4 bg-blue-50 p-4 rounded-lg"
          >
            <div className="flex items-center justify-center gap-3 rounded-lg text-primary self-start">
              <Icon className="text-2xl group-hover:scale-125 transition-all duration-300" />
              <h3 className="text-xl font-semibold ">{title}</h3>
            </div>
            <div>
              <p className="text-gray-800 text-base ">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

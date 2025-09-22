// src/components/ContactSection.jsx

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto  rounded-lg p-4 text-center my-12"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
        For Sponsorship & Speakership opportunities, contact:{" "}
      </h2>

      <p className="text-gray-900 text-2xl font-medium ">
        Mr. Praveen Sankaran
      </p>
      <p className="text-gray-700 mb-6 font-semibold">Convenor</p>
      <p className="mb-1 text-lg">
        Email:{" "}
        <a
          href="mailto:praveen.sankaran@aviakul.com"
          className="text-primary hover:underline"
        >
          praveen.sankaran@aviakul.com
        </a>
      </p>
      <p className="text-lg">
        Mobile:{" "}
        <a href="tel:+919346370858" className="text-primary hover:underline">
          +91 93463 70858
        </a>
      </p>
    </section>
  );
}

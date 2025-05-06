import { useState } from "react";

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
        {
          question: "Wedding Planning",
          answer: "Your wedding is more than just a day – it’s the beginning of a beautiful journey. We specialize in crafting dream weddings that reflect your unique story. From venue selection, theme planning, décor, and entertainment to guest management and logistics, our team handles every detail with perfection. Whether you envision a traditional ceremony or a destination wedding, we bring your vision to life with elegance and flair.",
        },
        {
          question: "Corporate Events",
          answer: "Make a powerful impression with professionally organized corporate events. We manage conferences, seminars, product launches, team-building activities, annual meets, and more. Our focus is on seamless execution, tech integration, and brand alignment to help your company leave a lasting impact on clients, partners, and employees alike.",
        },
        {
          question: "Birthday & Private Parties",
          answer: "Whether it’s a child’s birthday party, a milestone celebration, or a surprise bash, we bring energy, creativity, and fun to your personal gatherings. From themed décor and live entertainment to catering and return gifts, we take care of everything so you can simply enjoy the moment.",
        },
        {
          question: "Cultural & Religious Events",
          answer: "Celebrate your traditions with authenticity and grandeur. From Ganesh Chaturthi and Diwali celebrations to Navratri events and religious ceremonies, we handle planning, décor, and coordination with deep respect for customs and smooth logistical management.",
        },
        {
            question: " Sound, Light & Stage Production",
            answer: "We provide top-tier technical setups for events of any scale. From dynamic stage designs to ambient lighting and crystal-clear sound systems, we ensure that your event is not only seen but felt.",
          },
      ];

  return (
    <section className="w-full max-w-3xl mx-auto pt-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-600  mb-4 font-Tagesschrift ">Services</h2>
        <p className="text-gray-500 mb-12 text-lg font-poppins">Crafting Seamless Experiences with Detail-Driven Event Services.</p>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-gray-800 text-white p-4 rounded-lg mb-3 transition-all duration-300 hover:bg-gray-700"
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-xl">{faq.question}</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-300 ${
                openIndex === index ? "rotate-45" : ""
              }`}
            >
              <path
                d="M12 4V20"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {openIndex === index && (
            <div className="mt-3 text-sm font-poppins text-gray-300">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
      </div>
    </section>
  );
};

export default Services;

"use client";

import { ChevronDown, Plus } from "lucide-react";
import React, { useState } from "react";

const defaultFaqs = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
];

const Faq = ({ faqs = defaultFaqs }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <>
      <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs?.map((faq, index) => (
          <div key={index} className="border border-gray-700">
            <button
              className="flex justify-between items-center w-full p-4 text-left bg-gray-800 hover:bg-gray-700"
              onClick={() => toggleFaq(index)}
            >
              <span className="text-lg">{faq.question}</span>
              {openFaq === index ? (
                <ChevronDown className="h-6 w-6" />
              ) : (
                <Plus className="h-6 w-6" />
              )}
            </button>
            {openFaq === index && (
              <div className="p-4 bg-gray-900">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;

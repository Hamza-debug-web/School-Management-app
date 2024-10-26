'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut optio ea error libero mollitia.",
    date: "2024-01-02",
    color: "bg-sky-100",
  },
  {
    question: "Consectetur adipisicing elit",
    answer:
      "Consectetur adipisicing elit. Labore aut optio ea error libero mollitia, quos asperiores quisquam voluptatem.",
    date: "2024-01-03",
    color: "bg-purple-100",
  },
  {
    question: "Quos asperiores quisquam voluptatem",
    answer:
      "Quos asperiores quisquam voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "2024-01-04",
    color: "bg-yellow-100",
  },
];

export default function Announcement() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-4 rounded-md space-y-6 ">
      <div className="flex items-center justify-between mb-4 ">
        <h1 className="text-xl font-semibold ">Announcement </h1>
        <span className="text-sm text-gray-400">All</span>
      </div>

      <div className="flex flex-col gap-6 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-md transition ${faq.color}`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-4 text-left font-medium hover:no-underline"
            >
              <h2 className="text-lg">{faq.question}</h2>
              <span className="text-xs  bg-white p-1 rounded-md">
                {faq.date}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'max-h-[200px] p-4 pt-0' : 'max-h-0'
              }`}
            >
              <p className="text-sm text-gray-400">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

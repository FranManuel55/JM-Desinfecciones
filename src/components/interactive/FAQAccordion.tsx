'use client';

import { useState } from 'react';

interface FAQ {
  id: string;
  data: {
    question: string;
    order?: number;
  };
  body?: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.id}
            className={`group bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
              isOpen
                ? 'border-secondary-orange/40 shadow-card-hover'
                : 'border-gray-100 shadow-soft hover:border-gray-200'
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
              aria-expanded={isOpen}
            >
              <div className="flex items-start gap-4 pr-4">
                <span
                  className={`flex-shrink-0 mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-display transition-colors ${
                    isOpen
                      ? 'bg-secondary-orange text-white'
                      : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                  }`}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-display font-bold text-gray-900 text-base md:text-lg leading-snug">
                  {faq.data.question}
                </span>
              </div>
              <div
                className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen
                    ? 'bg-secondary-orange text-white rotate-180'
                    : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.6}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pl-[68px] text-gray-600 leading-relaxed text-[15px]">
                  {faq.body}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

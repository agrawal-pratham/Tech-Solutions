import { useState } from "react";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

const faqData = [
  {
    question: "What technology stack do you primarily specialize in?",
    answer:
      "We specialize in modern, high-performance web ecosystems: Next.js (App & Pages Router), React.js, TypeScript, Tailwind CSS on the frontend; and Node.js, Express, Python (FastAPI), PostgreSQL, MongoDB, Redis, and Firebase on the backend. For cloud deployments, we deploy across AWS, Vercel, and Google Cloud.",
  },
  {
    question: "How does the project estimation and development process work?",
    answer:
      "We begin with a complimentary 30-minute discovery call to evaluate your goals, followed by a detailed scope proposal with fixed or milestone-based pricing. Once aligned, we run agile two-week development sprints with live demo links and weekly review calls.",
  },
  {
    question: "Do you sign Non-Disclosure Agreements (NDAs) before discussion?",
    answer:
      "Yes, absolutely. We strictly honor client confidentiality and are glad to execute standard mutual NDAs or your corporate NDA before examining proprietary specifications or codebases.",
  },
  {
    question: "Who owns the intellectual property and code upon completion?",
    answer:
      "You retain 100% full intellectual property and commercial copyright ownership of all custom code, assets, design files, and documentation created for your project upon milestone settlement.",
  },
  {
    question: "What happens after the website or application goes live?",
    answer:
      "Every project includes 30 days of complimentary hyper-care warranty support covering bug fixes, performance tuning, and DNS handover. We also provide monthly retainer maintenance contracts for continuous feature iteration and 24/7 SLA monitoring.",
  },
  {
    question: "Can you take over and refactor an existing legacy codebase?",
    answer:
      "Yes. We frequently conduct code audits, performance profiling, and modernization sprints for existing products—upgrading frameworks, improving Core Web Vitals, and resolving technical debt.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-gray-800 text-primary dark:text-blue-400 mb-3">
            <FiHelpCircle />
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2">
            Everything you need to know about our workflow, technology, and service guarantees.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 dark:border-gray-700/80 rounded-2xl overflow-hidden bg-bg_light/50 dark:bg-gray-800/60 transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4 sm:py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white">
                    {item.question}
                  </span>
                  <FiChevronDown
                    className={`text-gray-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary dark:text-blue-400" : ""
                    }`}
                    size={20}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700/60">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import { FiAward, FiClock, FiCode, FiHeadphones, FiShield, FiTrendingUp } from "react-icons/fi";

const reasons = [
  {
    icon: <FiAward className="text-2xl text-blue-500" />,
    title: "100+ Projects Shipped",
    description: "Proven track record delivering mission-critical applications across fintech, e-commerce, and healthcare.",
  },
  {
    icon: <FiClock className="text-2xl text-emerald-500" />,
    title: "Agile & On-Time Delivery",
    description: "Weekly sprint demos, clear milestone-based invoicing, and transparent progress tracking on Jira / GitHub.",
  },
  {
    icon: <FiShield className="text-2xl text-purple-500" />,
    title: "Enterprise-Grade Security",
    description: "Built-in OWASP compliance, encrypted data transmission, and rigorous code audits prior to deployment.",
  },
  {
    icon: <FiCode className="text-2xl text-amber-500" />,
    title: "Modern, Maintainable Code",
    description: "Clean code principles, strict TypeScript typing, modular architecture, and comprehensive technical documentation.",
  },
  {
    icon: <FiTrendingUp className="text-2xl text-rose-500" />,
    title: "Performance & SEO Optimized",
    description: "Sub-second load times, 95+ Google Lighthouse scores, and structured Schema.org metadata out of the box.",
  },
  {
    icon: <FiHeadphones className="text-2xl text-cyan-500" />,
    title: "Dedicated Post-Launch Support",
    description: "30 days of included hyper-care bug fixes, SLA maintenance contracts, and continuous monitoring.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-bg_light dark:bg-bg_dark text-gray-800 dark:text-gray-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-blue-400">
            Why Partner With Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4">
            Engineered for Precision, Scale & Speed
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            We don’t just write code; we partner closely with your team to solve business problems and deliver measurable ROI.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl text-center border border-gray-100 dark:border-gray-700 shadow-sm">
            <span className="block text-3xl sm:text-4xl font-extrabold text-primary dark:text-blue-500 mb-1">
              99.9%
            </span>
            <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
              Platform Uptime
            </span>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl text-center border border-gray-100 dark:border-gray-700 shadow-sm">
            <span className="block text-3xl sm:text-4xl font-extrabold text-primary dark:text-blue-500 mb-1">
              120+
            </span>
            <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
              Satisfied Clients
            </span>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl text-center border border-gray-100 dark:border-gray-700 shadow-sm">
            <span className="block text-3xl sm:text-4xl font-extrabold text-primary dark:text-blue-500 mb-1">
              4.9/5
            </span>
            <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
              Average Client Rating
            </span>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl text-center border border-gray-100 dark:border-gray-700 shadow-sm">
            <span className="block text-3xl sm:text-4xl font-extrabold text-primary dark:text-blue-500 mb-1">
              24/7
            </span>
            <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
              Critical SLA Monitoring
            </span>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-gray-700 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

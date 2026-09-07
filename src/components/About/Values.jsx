import { Fade, Slide } from "react-awesome-reveal";
import {
  FiAward,
  FiCode,
  FiCompass,
  FiEye,
  FiLock,
  FiShield,
  FiTarget,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const valuesList = [
  {
    icon: <FiCode className="text-blue-500" size={26} />,
    title: "Engineering Excellence & Craft",
    desc: "We refuse to ship sloppy or brittle code. Every function, component, and query is architected for readability, modularity, and maintainability for years to come.",
  },
  {
    icon: <FiLock className="text-emerald-500" size={26} />,
    title: "100% Client IP Ownership",
    desc: "Everything we build belongs entirely to you. You retain full copyright, repository ownership, CI/CD pipeline access, and production secrets from day one.",
  },
  {
    icon: <FiZap className="text-amber-500" size={26} />,
    title: "Sub-Second Speed & SLA Guarantees",
    desc: "Speed is an architectural feature. We guarantee sub-second Lighthouse Core Web Vitals, ultra-fast TTFB, and an enterprise 99.9% production uptime SLA.",
  },
  {
    icon: <FiUsers className="text-purple-500" size={26} />,
    title: "Direct Engineer Collaboration",
    desc: "No game of telephone through layers of non-technical account managers. You brainstorm, review code, and iterate directly with senior systems architects.",
  },
  {
    icon: <FiTarget className="text-rose-500" size={26} />,
    title: "Pragmatic Business ROI",
    desc: "We don't chase flashy buzzwords for the sake of novelty. Every architectural recommendation is strictly grounded in reducing cost, increasing conversion, or speeding time-to-market.",
  },
  {
    icon: <FiShield className="text-indigo-500" size={26} />,
    title: "Zero-Trust Security & Reliability",
    desc: "Enterprise-grade encryption, automated dependency scanning, GDPR/CCPA alignment, and hardened cloud policies protect your platform against real-world vulnerabilities.",
  },
];

const ValuesMission = () => {
  return (
    <section id="values" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Slide duration={800} direction="down" triggerOnce>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 mb-4">
              Foundational Principles
            </span>
          </Slide>
          <Slide duration={900} direction="up" delay={150} triggerOnce>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              Our Values, Mission & Vision
            </h2>
          </Slide>
          <Fade duration={1000} delay={300} triggerOnce>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              The fundamental convictions that govern how we engineer software, respect our clients, and build enduring technology.
            </p>
          </Fade>
        </div>

        {/* Mission & Vision Dual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Slide duration={900} direction="left" triggerOnce>
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-blue-950/30 dark:to-gray-800/80 border border-blue-200/80 dark:border-blue-900/50 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600 text-white mb-6">
                  <FiCompass size={14} />
                  <span>Our Mission</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                  Empowering Growth Through World-Class Engineering
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                  To eliminate technological friction for ambitious companies by delivering resilient, high-speed, and secure web applications. We transform intricate business ideas into high-converting digital realities that withstand the test of scale.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-blue-200/60 dark:border-blue-800/40 text-xs font-semibold text-primary dark:text-blue-400">
                Action-Driven • Outcome-Focused • High Craft
              </div>
            </div>
          </Slide>

          <Slide duration={900} direction="right" triggerOnce>
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50/40 dark:from-purple-950/30 dark:to-gray-800/80 border border-purple-200/80 dark:border-purple-900/50 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-600 text-white mb-6">
                  <FiEye size={14} />
                  <span>Our Vision</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                  Setting the Global Benchmark for Modern Software
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                  To be the world’s most trusted boutique software engineering consultancy—where startups and industry leaders turn when their challenges demand uncompromising speed, aesthetic elegance, and bulletproof architecture.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-purple-200/60 dark:border-purple-800/40 text-xs font-semibold text-purple-600 dark:text-purple-400">
                Craftsmanship • Scalability • Global Standard
              </div>
            </div>
          </Slide>
        </div>

        {/* 6 Core Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {valuesList.map((val, idx) => (
            <Fade key={idx} duration={800} delay={idx * 100} triggerOnce>
              <div className="p-7 sm:p-8 rounded-3xl bg-bg_light dark:bg-gray-800/70 border border-gray-200/80 dark:border-gray-700/80 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm hover:shadow-xl transition-all h-full">
                <div className="p-3.5 rounded-2xl bg-white dark:bg-gray-900 w-fit shadow-sm mb-6">
                  {val.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {val.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesMission;

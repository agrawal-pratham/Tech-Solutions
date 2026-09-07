import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiGlobe,
  FiMail,
  FiMessageSquare,
} from "react-icons/fi";

const CallToAction = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bg_light via-white to-bg_light dark:from-bg_dark dark:via-gray-900 dark:to-bg_dark transition-colors text-center overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <Slide duration={800} direction="down" triggerOnce>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 mb-6 shadow-sm">
            <FiMessageSquare size={14} />
            <span>Initiate Collaboration</span>
          </div>
        </Slide>

        <Slide duration={900} direction="up" delay={150} triggerOnce>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
            Ready to Build Something{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Exceptional Together?
            </span>
          </h2>
        </Slide>

        <Fade duration={1000} delay={300} triggerOnce>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Whether you are scoping a greenfield software product, migrating legacy architecture, or seeking a trusted technical advisory partner, we are ready to help you execute.
          </p>
        </Fade>

        {/* Action Buttons */}
        <Fade duration={900} delay={450} triggerOnce>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-blue-700 text-white font-semibold text-sm rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Schedule Discovery Call
              <FiArrowRight size={16} />
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 font-semibold text-sm rounded-xl transition-all shadow-sm"
            >
              <FiBriefcase size={16} />
              Join Our Engineering Team
            </Link>
          </div>
        </Fade>

        {/* Guarantees & Contact Info */}
        <Fade duration={1000} delay={600} triggerOnce>
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <FiClock className="text-emerald-500" size={16} />
              Rapid Response Within 24 Hours
            </span>
            <span className="flex items-center gap-2">
              <FiCheckCircle className="text-blue-500" size={16} />
              Zero-Obligation Architecture Audit
            </span>
            <span className="flex items-center gap-2">
              <FiGlobe className="text-indigo-500" size={16} />
              Distributed Across Global Timezones
            </span>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default CallToAction;

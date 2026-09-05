import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";
import {
  FiArrowRight,
  FiAward,
  FiCheckCircle,
  FiCode,
  FiCompass,
  FiCpu,
  FiShield,
  FiUsers,
} from "react-icons/fi";

const stats = [
  { label: "Founded", value: "2020", icon: <FiCompass className="text-blue-500" /> },
  { label: "Delivered Projects", value: "120+", icon: <FiCheckCircle className="text-emerald-500" /> },
  { label: "Production SLA", value: "99.9%", icon: <FiShield className="text-indigo-500" /> },
  { label: "Client Retention", value: "94%", icon: <FiAward className="text-amber-500" /> },
];

const HeadlineIntro = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bg_light via-white to-bg_light dark:from-bg_dark dark:via-gray-900 dark:to-bg_dark text-center overflow-hidden transition-colors">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        <Slide duration={800} direction="down" triggerOnce>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 mb-6 shadow-sm">
            <FiCode size={14} />
            <span>Our Identity & Mission</span>
          </div>
        </Slide>

        <Slide duration={900} triggerOnce direction="up" delay={150}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.15] mb-6">
            Pioneering Modern Web Engineering &{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Digital Transformation
            </span>
          </h1>
        </Slide>

        <Fade duration={1000} triggerOnce delay={300}>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Solutions by Pratham Agrawal is a premier digital technology consultancy. We architect, engineer, and scale bespoke web applications, enterprise cloud infrastructure, and AI-enabled automation tools designed to empower high-growth startups and established industry leaders.
          </p>
        </Fade>

        {/* Quick CTAs */}
        <Fade duration={900} triggerOnce delay={450}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold text-sm rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Schedule Discovery Call
              <FiArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 font-semibold text-sm rounded-xl transition-all shadow-sm"
            >
              Explore Capabilities
            </Link>
          </div>
        </Fade>

        {/* Highlight Stats Row */}
        <Fade duration={1000} triggerOnce delay={600}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-gray-200 dark:border-gray-800">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/80 dark:border-gray-700/80 shadow-sm text-center"
              >
                <div className="inline-flex p-2 rounded-xl bg-gray-50 dark:bg-gray-900 mb-2">
                  {item.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-1">
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default HeadlineIntro;

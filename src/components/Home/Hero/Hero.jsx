import { useThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";
import { FiActivity, FiArrowRight, FiCheckCircle, FiCloud, FiCode, FiCpu, FiShield, FiStar } from "react-icons/fi";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const { darkMode } = useThemeContext();

  return (
    <div className="relative pt-32 pb-20 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bg_light via-white to-bg_light dark:from-bg_dark dark:via-gray-900 dark:to-bg_dark overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <Slide triggerOnce direction="down" duration={700}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 mb-6 shadow-sm">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="fill-current text-xs" />
                  ))}
                </div>
                <span>4.9/5 Rating from 120+ Global Clients</span>
              </div>
            </Slide>

            <Slide triggerOnce direction="left" duration={900}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.15] mb-6">
                Engineering Scalable Digital Solutions For{" "}
                <span
                  className="block min-h-[1.2em]"
                  aria-live="polite"
                >
                  <span className="bg-gradient-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    <ReactTyped
                      strings={[
                        "Web Applications",
                        "AI Automations",
                        "Cloud Platforms",
                        "SaaS Scaleups",
                      ]}
                      typeSpeed={80}
                      backSpeed={50}
                      backDelay={1800}
                      loop
                    />
                  </span>
                </span>
              </h1>
            </Slide>

            <Fade triggerOnce duration={1000} delay={200}>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-normal">
                We partner with ambitious startups and modern enterprises to architect, design, and ship production-grade digital software engineered for high speed, security, and measurable ROI.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold text-sm rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Schedule Discovery Call
                  <FiArrowRight size={16} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 font-semibold text-sm rounded-xl transition-all shadow-sm"
                >
                  Explore Capabilities
                </Link>
              </div>

              {/* Badges Row */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-500 dark:text-gray-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <FiCheckCircle className="text-green-500" size={15} />
                  Next.js 14 Enterprise Architecture
                </span>
                <span className="flex items-center gap-1.5">
                  <FiShield className="text-blue-500" size={15} />
                  Full IP Ownership Guaranteed
                </span>
                <span className="flex items-center gap-1.5">
                  <FiActivity className="text-emerald-500" size={15} />
                  99.9% Production SLA
                </span>
              </div>
            </Fade>
          </div>

          {/* Right Column: Custom Interactive Architecture Showcase Card */}
          <div className="lg:col-span-5">
            <Slide triggerOnce direction="right" duration={900}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Floating Top Badge */}
                <div className="absolute -top-4 -right-2 sm:-right-4 z-20 bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-950/60 text-green-600 flex items-center justify-center">
                    <FiActivity size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase font-bold">Global LCP</span>
                    <span className="text-xs font-black text-gray-900 dark:text-white">0.6s Sub-second</span>
                  </div>
                </div>

                {/* Main Product Card Preview */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                  {/* Browser / Window Header */}
                  <div className="px-5 py-3.5 bg-gray-100/80 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-[11px] font-mono font-medium text-gray-500 dark:text-gray-400">
                      production-app.tech-solutions.io
                    </span>
                    <div className="w-4"></div>
                  </div>

                  {/* Window Body */}
                  <div className="p-6 space-y-5">
                    {/* Live Metric Bar */}
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-3 rounded-xl bg-blue-50 dark:bg-gray-900/60 border border-blue-100 dark:border-gray-700">
                        <span className="text-[10px] uppercase font-bold text-gray-400 block">Status</span>
                        <span className="text-xs font-extrabold text-green-600 dark:text-green-400">Healthy (200)</span>
                      </div>
                      <div className="p-3 rounded-xl bg-purple-50 dark:bg-gray-900/60 border border-purple-100 dark:border-gray-700">
                        <span className="text-[10px] uppercase font-bold text-gray-400 block">Uptime</span>
                        <span className="text-xs font-extrabold text-purple-600 dark:text-purple-400">99.99%</span>
                      </div>
                      <div className="p-3 rounded-xl bg-amber-50 dark:bg-gray-900/60 border border-amber-100 dark:border-gray-700">
                        <span className="text-[10px] uppercase font-bold text-gray-400 block">Requests</span>
                        <span className="text-xs font-extrabold text-amber-600 dark:text-amber-400">14.2k / sec</span>
                      </div>
                    </div>

                    {/* Architectural Feature Rows */}
                    <div className="space-y-2.5">
                      <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 flex items-center justify-between border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center">
                            <FiCode size={16} />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-gray-900 dark:text-white">Next.js 14 SSR Engine</h4>
                            <p className="text-[11px] text-gray-500 dark:text-gray-400">Server Actions & Edge Caching</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-300">
                          Active
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 flex items-center justify-between border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-purple-500 text-white flex items-center justify-center">
                            <FiCloud size={16} />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-gray-900 dark:text-white">Multi-Region Cloud DevOps</h4>
                            <p className="text-[11px] text-gray-500 dark:text-gray-400">AWS / Vercel Edge Compute</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-300">
                          Synced
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 flex items-center justify-between border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center">
                            <FiCpu size={16} />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-gray-900 dark:text-white">AI Automation & RAG</h4>
                            <p className="text-[11px] text-gray-500 dark:text-gray-400">LLM Vector Search & Pipelines</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-300">
                          Ready
                        </span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        href="/contact-us"
                        className="w-full flex items-center justify-center gap-2 py-2.5 bg-gray-900 hover:bg-black dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition-colors shadow"
                      >
                        Deploy Your Vision With Us
                        <FiArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

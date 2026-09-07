import Link from "next/link";
import { Slide } from "react-awesome-reveal";
import { FiArrowRight, FiCheckCircle, FiCpu, FiLayers, FiShield } from "react-icons/fi";

const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg_light dark:bg-bg_dark text-gray-800 dark:text-gray-100 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-12 lg:gap-8">
        {/* Left: Illustration / Graphic */}
        <div className="w-full lg:w-5/12">
          <Slide duration={1000} direction="left" triggerOnce>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 sm:p-8">
                <img
                  src="/about.svg"
                  alt="Engineering Collaboration"
                  className="w-full h-auto drop-shadow-sm"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-5 -left-4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-gray-700 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-primary dark:text-blue-400 flex items-center justify-center">
                  <FiCheckCircle size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-900 dark:text-white block">100% On-Time</span>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400">Milestone Track Record</span>
                </div>
              </div>
            </div>
          </Slide>
        </div>

        {/* Right: Authentic Agency Narrative */}
        <div className="w-full lg:w-6/12">
          <Slide duration={1000} direction="right" triggerOnce>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-blue-400">
              Who We Are & What We Do
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4 leading-tight">
              Transforming Complex Technical Challenges Into{" "}
              <span className="text-primary dark:text-blue-500">Competitive Advantages</span>
            </h2>

            <p className="text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              We are a specialized engineering collective founded by Pratham Agrawal. We collaborate directly with founders, product leaders, and enterprise CTOs to architect and ship bespoke web applications, AI copilots, and resilient cloud systems that scale effortlessly.
            </p>

            {/* Differentiators Grid */}
            <div className="space-y-3.5 mb-8">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-primary dark:text-blue-400 mt-0.5">
                  <FiLayers size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">Full-Lifecycle Engineering</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    From initial architecture and Figma design systems to Next.js development and automated CI/CD deployment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 mt-0.5">
                  <FiShield size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">Enterprise Security & High Availability</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    OWASP compliant architectures, automated data encryption, and guaranteed 99.9% uptime SLAs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 mt-0.5">
                  <FiCpu size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">Agile & Transparent Sprints</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Bi-weekly milestone demonstrations, live staging environments, and direct engineer communication.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-md transition-all"
              >
                Read Our Story & Values
                <FiArrowRight size={14} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 font-semibold text-xs rounded-xl transition-colors"
              >
                View Services Catalog
              </Link>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default About;

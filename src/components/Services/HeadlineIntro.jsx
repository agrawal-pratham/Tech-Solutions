import { Fade, Slide } from "react-awesome-reveal";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const HeadlineIntro = () => {
  return (
    <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bg_light via-white to-bg_light dark:from-bg_dark dark:via-gray-900 dark:to-bg_dark text-center overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <Slide duration={800} direction="down" triggerOnce>
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-100 text-primary dark:bg-blue-900/50 dark:text-blue-300 mb-6 shadow-sm">
            <FiCheckCircle className="text-primary dark:text-blue-400" />
            End-To-End Technology Engineering
          </span>
        </Slide>

        <Slide duration={1000} direction="up" triggerOnce>
          <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white tracking-tight mb-6 leading-tight">
            Crafting Exceptional Digital Solutions for{" "}
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h1>
        </Slide>

        <Fade duration={1200} triggerOnce delay={200}>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 font-normal leading-relaxed">
            From lightning-fast web applications to scalable cloud backends and AI-powered workflows, we design, build, and deploy production-grade software engineered to accelerate your growth.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg"
            >
              Request a Free Quote
              <FiArrowRight />
            </Link>
            <a
              href="#core-services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 font-semibold text-sm transition-all shadow-sm"
            >
              Explore All Services
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default HeadlineIntro;

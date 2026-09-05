import { Fade, Slide } from "react-awesome-reveal";
import {
  FiCheck,
  FiCompass,
  FiCpu,
  FiGlobe,
  FiLayers,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

const milestones = [
  {
    year: "2020",
    title: "The Genesis & Core Vision",
    icon: <FiCompass className="text-blue-500" size={20} />,
    tag: "Foundation",
    description:
      "Pratham Agrawal founded the practice with an uncompromising belief: businesses deserve modern, resilient software without legacy bloat. Started with boutique client engineering engagements focusing on ultra-clean code and rapid delivery.",
    highlights: [
      "Bespoke web application architecture",
      "Focus on 100% bespoke code without restrictive templates",
      "Initial client roster across early-stage technology startups",
    ],
  },
  {
    year: "2022",
    title: "Agency Scaling & Enterprise Milestones",
    icon: <FiZap className="text-emerald-500" size={20} />,
    tag: "Expansion",
    description:
      "Formalized as Solutions by Pratham Agrawal. Scaled operations to serve larger distributed teams, enterprise contracts, and mission-critical multi-tenant applications requiring stringent SLA guarantees.",
    highlights: [
      "Transitioned to full-lifecycle software delivery",
      "Achieved 99.9% production uptime SLA commitment",
      "Delivered first cross-border enterprise migration",
    ],
  },
  {
    year: "2023",
    title: "Cloud Infrastructure & Modern Stacks",
    icon: <FiLayers className="text-purple-500" size={20} />,
    tag: "Infrastructure",
    description:
      "Expanded our technical footprint into cloud-native distributed architecture, Docker/Kubernetes container orchestration, Next.js SSR, and modern Headless CMS and API-first ecosystems.",
    highlights: [
      "Deep adoption of Next.js, React, and TypeScript standards",
      "Automated zero-downtime CI/CD deployment pipelines",
      "Launched design system & accessibility initiatives",
    ],
  },
  {
    year: "2024",
    title: "Global Platform Launch & Portfolio Growth",
    icon: <FiGlobe className="text-indigo-500" size={20} />,
    tag: "Global Footprint",
    description:
      "Unveiled the centralized solutions.agrawalpratham.in platform. Surpassed 100+ production deliveries with verified client satisfaction scores averaging 4.9 out of 5 stars.",
    highlights: [
      "Established multi-continental client partnerships",
      "Transparent milestone pricing and fixed-timeline sprints",
      "Comprehensive client code and full IP ownership transfer",
    ],
  },
  {
    year: "2025",
    title: "AI Integration & Workflow Automations",
    icon: <FiCpu className="text-amber-500" size={20} />,
    tag: "AI & Modernization",
    description:
      "Integrated generative AI pipelines, vector database search (RAG), and autonomous internal workflows directly into client software stacks to drive measurable operational efficiencies.",
    highlights: [
      "Production LLM orchestration & semantic search integrations",
      "Intelligent data pipelines & automated analytics",
      "Sub-second edge caching architectures",
    ],
  },
  {
    year: "2026 & Beyond",
    title: "Next-Gen Autonomous Digital Systems",
    icon: <FiTrendingUp className="text-rose-500" size={20} />,
    tag: "The Horizon",
    description:
      "Continuing to pioneer state-of-the-art web applications, real-time collaboration engines, and edge-native platforms that set the benchmark for modern software performance.",
    highlights: [
      "Zero-latency edge computing & real-time reactive apps",
      "Agentic workflow automation solutions",
      "Continued commitment to craft, speed, and client triumph",
    ],
  },
];

const OurStory = () => {
  return (
    <section id="story" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Slide duration={800} direction="down" triggerOnce>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 mb-4">
              Evolution & Heritage
            </span>
          </Slide>
          <Slide duration={900} direction="up" delay={150} triggerOnce>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              Our Journey of Relentless Craft
            </h2>
          </Slide>
          <Fade duration={1000} delay={300} triggerOnce>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              From an ambitious engineering studio to an internationally trusted software consultancy, discover the key milestones that shaped our methodology and standards.
            </p>
          </Fade>
        </div>

        {/* Chronological Timeline Grid */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-rose-500 opacity-30" />

          <div className="space-y-12 lg:space-y-16">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Badge in Center (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-500/40 dark:border-blue-400/30 items-center justify-center shadow-lg z-10">
                    <span className="text-xs font-black text-primary dark:text-blue-400">
                      {item.year.slice(2, 4)}
                    </span>
                  </div>

                  {/* Content Card (Half Width) */}
                  <div className="w-full lg:w-1/2 px-0 lg:px-10">
                    <Slide
                      duration={800}
                      direction={isEven ? "right" : "left"}
                      triggerOnce
                    >
                      <div className="p-6 sm:p-8 rounded-3xl bg-bg_light dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm hover:shadow-xl transition-all">
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300">
                            {item.year} • {item.tag}
                          </span>
                          <div className="p-2 rounded-xl bg-white dark:bg-gray-900 shadow-sm">
                            {item.icon}
                          </div>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                          {item.title}
                        </h3>

                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-normal">
                          {item.description}
                        </p>

                        <div className="space-y-2 pt-4 border-t border-gray-200/80 dark:border-gray-700/80">
                          {item.highlights.map((point, pIdx) => (
                            <div
                              key={pIdx}
                              className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                            >
                              <FiCheck className="text-emerald-500 shrink-0" size={16} />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Slide>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;

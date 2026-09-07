import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";
import {
  FiAward,
  FiCode,
  FiCpu,
  FiExternalLink,
  FiGithub,
  FiGlobe,
  FiHeart,
  FiLinkedin,
  FiShield,
  FiSmile,
  FiZap,
} from "react-icons/fi";

const teamMembers = [
  {
    name: "Pratham Agrawal",
    role: "Founder & Principal Solutions Architect",
    avatarBg: "from-blue-600 to-indigo-700",
    initials: "PA",
    bio: "Passionate software architect with deep expertise across full-stack engineering, cloud infrastructure, and AI systems. Leads technical vision, ensuring every client deployment maintains world-class code quality and sub-second performance.",
    skills: ["Next.js 14", "Distributed Cloud", "Full-Stack Architecture", "AI Automation"],
    links: {
      website: "https://agrawalpratham.in",
      github: "https://github.com/agrawalpratham",
      linkedin: "https://linkedin.com/in/agrawalpratham",
    },
    isFounder: true,
  },
  {
    name: "Elena Rostova",
    role: "Lead UI/UX & Design Systems Engineer",
    avatarBg: "from-purple-600 to-pink-600",
    initials: "ER",
    bio: "Crafts intuitive, accessible, and conversion-optimized user interfaces. Specializes in building scalable design tokens, smooth micro-interactions, and responsive component libraries.",
    skills: ["Figma Systems", "Tailwind CSS", "Micro-Interactions", "WCAG 2.1 AA"],
    links: {},
    isFounder: false,
  },
  {
    name: "Marcus Chen",
    role: "Principal Cloud & DevOps Architect",
    avatarBg: "from-emerald-600 to-teal-700",
    initials: "MC",
    bio: "Orchestrates resilient multi-region infrastructure on AWS and GCP. Expert in containerization, zero-trust security postures, and automated CI/CD pipelines with 99.99% uptime guarantees.",
    skills: ["AWS / GCP", "Docker & K8s", "Terraform", "Zero-Trust CI/CD"],
    links: {},
    isFounder: false,
  },
  {
    name: "Priya Sharma",
    role: "Senior AI & Data Systems Engineer",
    avatarBg: "from-amber-500 to-orange-600",
    initials: "PS",
    bio: "Develops production-grade AI applications, retrieval-augmented generation (RAG) pipelines, and intelligent search algorithms that solve tangible enterprise productivity bottlenecks.",
    skills: ["Python / FastAPI", "LangChain & RAG", "Vector DBs", "LLM Fine-Tuning"],
    links: {},
    isFounder: false,
  },
  {
    name: "David Miller",
    role: "Senior Full-Stack & API Engineer",
    avatarBg: "from-blue-500 to-cyan-600",
    initials: "DM",
    bio: "Focuses on high-throughput backend APIs, database optimization, and secure transactional integrations across diverse enterprise web and mobile applications.",
    skills: ["Node.js / Express", "PostgreSQL", "GraphQL / REST", "Redis Caching"],
    links: {},
    isFounder: false,
  },
  {
    name: "Aisha Patel",
    role: "QA Automation & Performance Specialist",
    avatarBg: "from-rose-500 to-red-600",
    initials: "AP",
    bio: "Guarantees zero-regression releases through end-to-end automated testing, load simulations, and rigorous Core Web Vitals optimization across all devices.",
    skills: ["Playwright", "Cypress E2E", "Load Testing", "Lighthouse 100"],
    links: {},
    isFounder: false,
  },
];

const culturePillars = [
  {
    icon: <FiCode className="text-blue-500" size={24} />,
    title: "Extreme Engineering Rigor",
    desc: "We write clean, modular, and maintainable code built to scale for years without accumulating crippling technical debt.",
  },
  {
    icon: <FiZap className="text-amber-500" size={24} />,
    title: "Asynchronous Agility",
    desc: "We prioritize deep, uninterrupted work and concise documentation over pointless meetings, shipping deliverables rapidly.",
  },
  {
    icon: <FiShield className="text-emerald-500" size={24} />,
    title: "Radical Transparency",
    desc: "Direct communication with engineers, live staging preview links, and clear milestone progress without corporate obfuscation.",
  },
  {
    icon: <FiHeart className="text-rose-500" size={24} />,
    title: "Human-Centered Empathy",
    desc: "Software is built for people. We care deeply about the end-user experience, client peace of mind, and team well-being.",
  },
];

const OurTeam = () => {
  return (
    <section id="team" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-bg_light dark:bg-bg_dark transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Slide duration={800} direction="down" triggerOnce>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 mb-4">
              Our People & Culture
            </span>
          </Slide>
          <Slide duration={900} direction="up" delay={150} triggerOnce>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              Meet the Minds Behind Solutions
            </h2>
          </Slide>
          <Fade duration={1000} delay={300} triggerOnce>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              A distributed collective of senior software engineers, system architects, and design thinkers united by high standards of digital craftsmanship.
            </p>
          </Fade>
        </div>

        {/* Founder Spotlight Card */}
        {teamMembers
          .filter((m) => m.isFounder)
          .map((founder, idx) => (
            <div key={idx} className="mb-16">
              <Slide duration={900} direction="up" triggerOnce>
                <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-gray-800/90 border-2 border-primary/30 dark:border-blue-500/30 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

                  <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                    {/* Avatar Initials Circle */}
                    <div className="shrink-0 flex flex-col items-center">
                      <div className={`w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-tr ${founder.avatarBg} text-white text-3xl sm:text-4xl font-black flex items-center justify-center shadow-lg`}>
                        {founder.initials}
                      </div>
                      <span className="mt-4 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 uppercase tracking-wider">
                        Founder & Lead
                      </span>
                    </div>

                    {/* Bio & Details */}
                    <div className="flex-1 text-center lg:text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                            {founder.name}
                          </h3>
                          <p className="text-base font-semibold text-primary dark:text-blue-400">
                            {founder.role}
                          </p>
                        </div>

                        {/* Founder Social Links */}
                        <div className="flex items-center justify-center sm:justify-end gap-2.5">
                          {founder.links.github && (
                            <a
                              href={founder.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="GitHub Profile"
                              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-700/60 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
                            >
                              <FiGithub size={18} />
                            </a>
                          )}
                          {founder.links.linkedin && (
                            <a
                              href={founder.links.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="LinkedIn Profile"
                              className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-600 dark:text-blue-400 transition-colors"
                            >
                              <FiLinkedin size={18} />
                            </a>
                          )}
                          {founder.links.website && (
                            <a
                              href={founder.links.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Personal Portfolio"
                              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-700/60 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
                            >
                              <FiGlobe size={18} />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-normal">
                        {founder.bio}
                      </p>

                      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                        {founder.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-3 py-1 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          ))}

        {/* Engineering Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {teamMembers
            .filter((m) => !m.isFounder)
            .map((member, idx) => (
              <Fade key={idx} duration={800} delay={idx * 120} triggerOnce>
                <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 shadow-sm hover:shadow-lg transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${member.avatarBg} text-white font-bold text-lg flex items-center justify-center shadow-md`}>
                        {member.initials}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {member.name}
                        </h4>
                        <p className="text-xs font-semibold text-primary dark:text-blue-400">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5 font-normal">
                      {member.bio}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100 dark:border-gray-700/80">
                    {member.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Fade>
            ))}
        </div>

        {/* Culture & Philosophy Grid */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
              Our Operating Philosophy
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              The internal culture and principles that empower our team to consistently deliver world-class software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-bg_light dark:bg-gray-900/60 border border-gray-100 dark:border-gray-700/60"
              >
                <div className="mb-3">{pillar.icon}</div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

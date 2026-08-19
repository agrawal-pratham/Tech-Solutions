import Link from "next/link";
import {
  FiArrowRight,
  FiCheck,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayout,
  FiServer,
  FiSmartphone,
} from "react-icons/fi";

const servicesList = [
  {
    id: "full-stack",
    icon: <FiCode className="text-3xl text-blue-600 dark:text-blue-400" />,
    title: "Full-Stack Web Development",
    subtitle: "Custom SaaS & Web Apps",
    description:
      "Modern, responsive web platforms built with React, Next.js, and Node.js. High performance, server-side rendering, and production-tested architecture.",
    features: [
      "Next.js 14 App / Pages Router architecture",
      "Robust REST & GraphQL API integrations",
      "Real-time data synchronization with WebSockets",
      "Secure authentication & RBAC authorization",
    ],
    technologies: ["React.js", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    timeline: "3 - 8 weeks",
    startingAt: "$2,499",
  },
  {
    id: "ui-ux",
    icon: <FiLayout className="text-3xl text-purple-600 dark:text-purple-400" />,
    title: "Custom UI/UX & Design Systems",
    subtitle: "Intuitive & High-Converting Interfaces",
    description:
      "User-centric product design that turns visitors into loyal customers. Wireframes, high-fidelity prototypes, interactive micro-interactions, and design tokens.",
    features: [
      "Figma interactive design prototypes",
      "Scalable component libraries & design systems",
      "Responsive accessibility (WCAG 2.1 AA compliant)",
      "User research, heatmaps & usability testing",
    ],
    technologies: ["Figma", "Tailwind CSS", "Framer Motion", "Design Tokens", "Storybook"],
    timeline: "2 - 4 weeks",
    startingAt: "$1,499",
  },
  {
    id: "cloud-devops",
    icon: <FiServer className="text-3xl text-emerald-600 dark:text-emerald-400" />,
    title: "Cloud Architecture & DevOps",
    subtitle: "High Availability & Automated CI/CD",
    description:
      "Bulletproof infrastructure deployment on AWS, Google Cloud, or Vercel. Automated build/test pipelines, containerization, and 99.9% uptime guarantees.",
    features: [
      "Docker containerization & Kubernetes clusters",
      "Automated GitHub Actions CI/CD workflows",
      "Serverless functions & edge caching setup",
      "Proactive uptime monitoring & automated alerts",
    ],
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
    timeline: "2 - 5 weeks",
    startingAt: "$1,999",
  },
  {
    id: "ai-automation",
    icon: <FiCpu className="text-3xl text-amber-600 dark:text-amber-400" />,
    title: "AI & Intelligent Automation",
    subtitle: "LLM Workflows & Custom AI Agents",
    description:
      "Integrate next-generation AI into your product. Custom retrieval-augmented generation (RAG), conversational bots, automated data extraction, and fine-tuning.",
    features: [
      "Enterprise RAG & vector database search",
      "OpenAI & Claude LLM API integrations",
      "Automated document processing & analysis",
      "Custom internal workflow AI copilot assistants",
    ],
    technologies: ["OpenAI", "LangChain", "Pinecone", "Python", "FastAPI", "Next.js"],
    timeline: "3 - 6 weeks",
    startingAt: "$2,999",
  },
  {
    id: "mobile-solutions",
    icon: <FiSmartphone className="text-3xl text-cyan-600 dark:text-cyan-400" />,
    title: "Cross-Platform Mobile Apps",
    subtitle: "iOS & Android from One Codebase",
    description:
      "Native-feel iOS and Android applications developed using React Native. Offline-first synchronization, native device sensor access, and instant app store readiness.",
    features: [
      "Unified codebase for iOS and Android",
      "Push notification systems (Firebase Cloud Messaging)",
      "Secure in-app purchases & subscription handling",
      "Offline SQLite storage & biometric login",
    ],
    technologies: ["React Native", "Expo", "Firebase", "Redux Toolkit", "iOS", "Android"],
    timeline: "4 - 10 weeks",
    startingAt: "$3,499",
  },
  {
    id: "ecommerce",
    icon: <FiDatabase className="text-3xl text-rose-600 dark:text-rose-400" />,
    title: "E-Commerce & Payment Gateways",
    subtitle: "High-Volume Transaction Portals",
    description:
      "High-speed e-commerce platforms engineered for conversion. Frictionless checkout, multi-currency support, automated inventory sync, and enterprise payment gateways.",
    features: [
      "Stripe, Razorpay & PayPal checkout integrations",
      "Custom shopping cart, discount & tax engines",
      "Inventory management & ERP integration",
      "Core Web Vitals sub-second page loads",
    ],
    technologies: ["Next.js", "Stripe", "Shopify Headless", "PostgreSQL", "Redis"],
    timeline: "3 - 7 weeks",
    startingAt: "$2,299",
  },
];

const CoreServices = () => {
  return (
    <section id="core-services" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-blue-400">
            Comprehensive Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4">
            Our Core Engineering Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            Every project we undertake is engineered with security, high performance, and future scale at the forefront.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((svc) => (
            <div
              key={svc.id}
              className="flex flex-col justify-between bg-bg_light dark:bg-gray-800/80 rounded-2xl p-7 border border-gray-200/80 dark:border-gray-700/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm mb-6">
                  {svc.icon}
                </div>

                <span className="text-xs font-semibold text-primary dark:text-blue-400 uppercase tracking-wider">
                  {svc.subtitle}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-3">
                  {svc.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {svc.description}
                </p>

                <div className="space-y-2 mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-400">
                    Key Features:
                  </p>
                  {svc.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                      <FiCheck className="text-green-500 mt-0.5 shrink-0" size={14} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-400 mb-2">
                    Technologies:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {svc.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-gray-200 dark:border-gray-700/80 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-gray-400 block uppercase font-medium">Timeline</span>
                  <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">{svc.timeline}</span>
                </div>
                <Link
                  href={`/contact-us?service=${encodeURIComponent(svc.title)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Consult on this
                  <FiArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;

import { trackEvent } from "@/lib/analytics";
import Head from "next/head";
import { useState } from "react";
import {
  FiAward,
  FiBriefcase,
  FiCheck,
  FiCheckCircle,
  FiChevronDown,
  FiDollarSign,
  FiGlobe,
  FiHeart,
  FiMapPin,
  FiMonitor,
  FiSend,
  FiSmile,
  FiX,
} from "react-icons/fi";

const perks = [
  {
    icon: <FiGlobe className="text-2xl text-blue-500" />,
    title: "100% Remote-First Culture",
    desc: "Work from anywhere in the world. We focus on impact, deliverables, and asynchronous communication, not rigid desk hours.",
  },
  {
    icon: <FiDollarSign className="text-2xl text-emerald-500" />,
    title: "Competitive Compensation & Equity",
    desc: "Top-tier global market salaries, performance bonuses, and equity options to ensure everyone shares in our collective upside.",
  },
  {
    icon: <FiMonitor className="text-2xl text-purple-500" />,
    title: "Latest Apple Hardware",
    desc: "Receive the newest MacBook Pro, 4K external display, ergonomic accessories, and an annual home office budget.",
  },
  {
    icon: <FiAward className="text-2xl text-amber-500" />,
    title: "$2,500 Learning Stipend",
    desc: "Continuous education budget every year for courses, technical certifications, books, and international developer conferences.",
  },
  {
    icon: <FiHeart className="text-2xl text-rose-500" />,
    title: "Comprehensive Health & Wellness",
    desc: "Full medical, dental, and vision coverage for you and your dependents, plus a monthly mental health & gym stipend.",
  },
  {
    icon: <FiSmile className="text-2xl text-cyan-500" />,
    title: "Generous Paid Time Off",
    desc: "25 days of paid vacation per year, unlimited sick leave, paid parental leave, and company-wide recharge rest weeks.",
  },
];

const initialJobs = [
  {
    id: "fs-eng",
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
    salary: "$120,000 – $155,000 USD",
    experience: "5+ years",
    description:
      "We are seeking an experienced Full-Stack Engineer to lead the architecture and development of scalable Next.js and Node.js client platforms. You will work on real-time data sync, microservices, and high-conversion web portals.",
    responsibilities: [
      "Architect and ship clean, accessible web apps using Next.js 14, React, and TypeScript.",
      "Design and maintain scalable REST and GraphQL APIs with Node.js and PostgreSQL.",
      "Collaborate directly with UI/UX designers to translate Figma specs into pixel-perfect components.",
      "Mentor junior engineers and champion code review best practices.",
    ],
    requirements: [
      "5+ years building web applications at scale with React, Next.js, and Node.js.",
      "Deep expertise in modern state management, SSR, SSG, and edge caching.",
      "Strong database design fundamentals (PostgreSQL, MongoDB, Redis).",
      "Excellent asynchronous communication skills.",
    ],
  },
  {
    id: "uiux-des",
    title: "Senior UI/UX Product Designer",
    department: "Design",
    location: "Remote (US / Europe / Asia)",
    type: "Full-time",
    salary: "$100,000 – $130,000 USD",
    experience: "4+ years",
    description:
      "Join our creative team to design captivating, intuitive, and conversion-focused digital experiences for enterprise SaaS and modern e-commerce clients.",
    responsibilities: [
      "Lead end-to-end design from user research and wireframing to high-fidelity clickable Figma prototypes.",
      "Develop and evolve scalable design systems with comprehensive design tokens.",
      "Conduct usability tests and iterate based on customer feedback and analytics.",
      "Partner closely with frontend engineers to guarantee design fidelity during implementation.",
    ],
    requirements: [
      "4+ years of digital product design experience with an exceptional web/mobile portfolio.",
      "Mastery of Figma, component variants, auto-layout, and interactive prototyping.",
      "Deep understanding of responsive accessibility (WCAG 2.1 AA).",
      "Familiarity with Tailwind CSS or HTML/CSS concepts is a strong plus.",
    ],
  },
  {
    id: "devops-arch",
    title: "Cloud Platform & DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / Hybrid (Bengaluru / SF)",
    type: "Full-time",
    salary: "$130,000 – $165,000 USD",
    experience: "4+ years",
    description:
      "Build, automate, and harden our multi-cloud deployment pipelines. You will ensure 99.9% uptime, automate CI/CD pipelines, and secure cloud infrastructure.",
    responsibilities: [
      "Manage AWS and Google Cloud environments using Terraform and Docker.",
      "Implement resilient CI/CD deployment pipelines using GitHub Actions.",
      "Configure automated telemetry, logging (Datadog/Grafana), and incident alerting.",
      "Perform periodic security audits and ensure SOC2 / ISO compliance standards.",
    ],
    requirements: [
      "4+ years of production DevOps/SRE experience with AWS or GCP.",
      "Hands-on mastery of Kubernetes, Docker containerization, and Terraform IaC.",
      "Proficiency in scripting (Bash, Python, or Go).",
      "Experience setting up zero-downtime blue/green deployment workflows.",
    ],
  },
  {
    id: "ai-eng",
    title: "AI Solutions & RAG Engineer",
    department: "AI Labs",
    location: "Remote (Global)",
    type: "Full-time",
    salary: "$125,000 – $160,000 USD",
    experience: "3+ years",
    description:
      "Help our clients build intelligent AI copilots, enterprise knowledge retrieval engines, and LLM-powered business automation workflows.",
    responsibilities: [
      "Implement enterprise RAG pipelines using LangChain/LlamaIndex and vector databases (Pinecone, Qdrant).",
      "Integrate and fine-tune OpenAI and Anthropic models with guarded prompts and structured outputs.",
      "Build fast Python microservices using FastAPI and async event streaming.",
      "Ensure data privacy, hallucination mitigation, and robust prompt evaluation.",
    ],
    requirements: [
      "3+ years software engineering experience with strong proficiency in Python.",
      "Hands-on experience shipping LLM applications, embeddings, and vector databases in production.",
      "Familiarity with FastAPI, Docker, and REST/WebSocket streaming.",
      "Strong understanding of model evaluation and retrieval optimization.",
    ],
  },
  {
    id: "tech-pm",
    title: "Technical Project & Delivery Manager",
    department: "Operations",
    location: "Remote (Global)",
    type: "Full-time",
    salary: "$90,000 – $120,000 USD",
    experience: "3+ years",
    description:
      "Bridge client strategy with technical execution. You will run agile sprints, manage project timelines, remove blockers, and ensure flawless milestone delivery.",
    responsibilities: [
      "Run sprint planning, standups, and retrospective meetings with cross-functional engineering pods.",
      "Maintain clear project documentation, timelines, and budgets across Jira and Linear.",
      "Serve as the trusted primary liaison for client stakeholders during active deliveries.",
      "Proactively detect risks and coordinate swift technical mitigations.",
    ],
    requirements: [
      "3+ years managing software development projects in a high-growth tech consultancy or startup.",
      "Strong technical literacy—ability to discuss architecture, APIs, and deadlines with engineers.",
      "Exceptional written and oral client-facing communication skills.",
      "Proficiency with Agile, Scrum, Jira, and modern collaboration tools.",
    ],
  },
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState("All");
  const [expandedJob, setExpandedJob] = useState(null);
  const [applyModalJob, setApplyModalJob] = useState(null);

  const [applicationData, setApplicationData] = useState({
    fullName: "",
    email: "",
    phone: "",
    portfolio: "",
    experienceYears: "3-5",
    coverNote: "",
  });
  const [applyStatus, setApplyStatus] = useState({
    submitting: false,
    success: false,
    refId: null,
  });

  const departments = ["All", "Engineering", "Design", "Infrastructure", "AI Labs", "Operations"];

  const filteredJobs = initialJobs.filter((job) =>
    selectedDept === "All" ? true : job.department === selectedDept
  );

  const handleApplyClick = (job) => {
    setApplyModalJob(job);
    setApplyStatus({ submitting: false, success: false, refId: null });
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setApplyStatus({ submitting: true, success: false, refId: null });

    setTimeout(() => {
      const trackingCode = `APP-${Math.floor(100000 + Math.random() * 900000)}`;
      setApplyStatus({
        submitting: false,
        success: true,
        refId: trackingCode,
      });

      trackEvent({
        action: "job_application_submitted",
        category: "careers",
        label: selectedJob?.title || "General Application",
        params: {
          job_id: selectedJob?.id,
          role: selectedJob?.title,
          tracking_code: trackingCode,
        },
      });

      setApplicationData({
        fullName: "",
        email: "",
        phone: "",
        portfolio: "",
        experienceYears: "3-5",
        coverNote: "",
      });
    }, 1200);
  };

  return (
    <>
      <Head>
        <title>Careers & Open Roles - Solutions by Pratham Agrawal</title>
        <meta
          name="description"
          content="Explore career opportunities at Tech Solutions. Join our remote-first engineering team building cutting-edge web applications, cloud systems, and AI tools."
        />
        <meta
          name="keywords"
          content="Tech Solutions careers, software engineering jobs, remote developer jobs, UI/UX jobs, Pratham Agrawal"
        />
        <link rel="canonical" href="https://solutions.agrawalpratham.in/careers" />
      </Head>

      <div className="min-h-screen pt-28 pb-20 bg-bg_light dark:bg-bg_dark text-gray-800 dark:text-gray-100 transition-colors">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 mb-4">
            We Are Hiring
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            Do the Best Work of Your Career
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            We are a group of passionate builders, engineers, and designers crafting world-class digital products. Join us from anywhere in the world.
          </p>
        </div>

        {/* Culture & Perks Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Why You’ll Love Working With Us
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              We invest deeply in our people with flexible autonomy, top compensation, and genuine respect for work-life balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-7 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-gray-700 flex items-center justify-center mb-4">
                  {perk.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {perk.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="openings">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-blue-400">
                Current Openings
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
                Explore Available Roles ({initialJobs.length})
              </h2>
            </div>

            {/* Department Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedDept === dept
                      ? "bg-primary text-white shadow-sm"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job List */}
          <div className="space-y-4">
            {filteredJobs.map((job) => {
              const isExpanded = expandedJob === job.id;
              return (
                <div
                  key={job.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden transition-all"
                >
                  <div className="p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                          {job.department}
                        </span>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <FiMapPin size={12} /> {job.location}
                        </span>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <FiBriefcase size={12} /> {job.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {job.title}
                      </h3>

                      <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl">
                        {job.description}
                      </p>

                      <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 pt-1">
                        Compensation: {job.salary} • Experience: {job.experience}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        onClick={() => setExpandedJob(isExpanded ? null : job.id)}
                        className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-1.5"
                      >
                        {isExpanded ? "Hide Details" : "View Details"}
                        <FiChevronDown
                          className={`transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <button
                        onClick={() => handleApplyClick(job)}
                        className="px-5 py-2.5 rounded-xl bg-primary hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-sm"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>

                  {/* Expanded Accordion: Responsibilities & Requirements */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 sm:px-7 sm:pb-7 border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/30">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200 mb-3">
                            Key Responsibilities:
                          </h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300"
                              >
                                <FiCheck className="text-primary dark:text-blue-400 mt-0.5 shrink-0" size={14} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 dark:text-gray-200 mb-3">
                            What We Look For:
                          </h4>
                          <ul className="space-y-2">
                            {job.requirements.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300"
                              >
                                <FiCheck className="text-emerald-500 mt-0.5 shrink-0" size={14} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Apply Now Modal */}
        {applyModalJob && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-gray-700 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setApplyModalJob(null)}
                className="absolute right-5 top-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <FiX size={20} />
              </button>

              {applyStatus.success ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-950/60 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <FiCheckCircle size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Application Submitted!
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                    Thank you for applying for the <strong>{applyModalJob.title}</strong> role. Our talent team will review your application and respond within 48 hours.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-3 text-xs text-gray-500 dark:text-gray-400 mb-6 border border-gray-200 dark:border-gray-700">
                    Application Tracking Code:{" "}
                    <span className="font-mono font-bold text-primary dark:text-blue-400">
                      {applyStatus.refId}
                    </span>
                  </div>
                  <button
                    onClick={() => setApplyModalJob(null)}
                    className="px-6 py-2.5 bg-primary text-white text-xs font-semibold rounded-xl"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit}>
                  <div className="mb-5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-primary dark:text-blue-400">
                      Job Application
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {applyModalJob.title}
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {applyModalJob.department} • {applyModalJob.location} • {applyModalJob.type}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={applicationData.fullName}
                        onChange={(e) =>
                          setApplicationData((p) => ({ ...p, fullName: e.target.value }))
                        }
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={applicationData.email}
                          onChange={(e) =>
                            setApplicationData((p) => ({ ...p, email: e.target.value }))
                          }
                          placeholder="alex@example.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={applicationData.phone}
                          onChange={(e) =>
                            setApplicationData((p) => ({ ...p, phone: e.target.value }))
                          }
                          placeholder="+1 (555) 123-4567"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                        Portfolio / GitHub / LinkedIn URL <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="url"
                        required
                        value={applicationData.portfolio}
                        onChange={(e) =>
                          setApplicationData((p) => ({ ...p, portfolio: e.target.value }))
                        }
                        placeholder="https://github.com/yourhandle or linkedin.com/in/..."
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                        Relevant Experience
                      </label>
                      <select
                        value={applicationData.experienceYears}
                        onChange={(e) =>
                          setApplicationData((p) => ({
                            ...p,
                            experienceYears: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="1-2">1 - 2 years</option>
                        <option value="3-5">3 - 5 years</option>
                        <option value="6-8">6 - 8 years</option>
                        <option value="8+">8+ years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                        Brief Cover Note / Highlights <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={applicationData.coverNote}
                        onChange={(e) =>
                          setApplicationData((p) => ({ ...p, coverNote: e.target.value }))
                        }
                        placeholder="Share a standout project you shipped or why this role excites you..."
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-primary"
                      ></textarea>
                    </div>

                    <div className="pt-2 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setApplyModalJob(null)}
                        className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={applyStatus.submitting}
                        className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-primary hover:bg-blue-700 disabled:opacity-60 text-white text-xs font-semibold rounded-xl shadow"
                      >
                        {applyStatus.submitting ? "Submitting..." : "Submit Application"}
                        <FiSend size={14} />
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

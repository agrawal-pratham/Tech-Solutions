import Link from "next/link";
import { Slide } from "react-awesome-reveal";
import { FiArrowRight, FiCheckCircle, FiStar } from "react-icons/fi";

const featuredTestimonials = [
  {
    name: "Elena Rostova",
    role: "Chief Technology Officer",
    company: "FinFlow Global",
    quote:
      "Tech Solutions transformed our financial dashboard into an ultra-responsive Next.js app. Their deep knowledge of state management and API security delivered an immediate 40% jump in daily active engagement.",
    tags: ["Next.js", "TypeScript", "FinTech"],
    rating: 5,
    initials: "ER",
    bg: "bg-blue-600",
  },
  {
    name: "Marcus Chen",
    role: "Founder & CEO",
    company: "TrendHub Apparel",
    quote:
      "The custom headless e-commerce portal they built exceeded our wildest expectations. Site load times dropped to under 0.8s globally, doubling our conversion rate within 30 days of launch.",
    tags: ["Shopify Headless", "Stripe", "Next.js"],
    rating: 5,
    initials: "MC",
    bg: "bg-emerald-600",
  },
  {
    name: "David Miller",
    role: "VP of Engineering",
    company: "CloudScale Infrastructure",
    quote:
      "They architected our migration from monolith to containerized microservices on AWS with zero unplanned downtime. Deployment cycle went from 3 days down to 15 minutes.",
    tags: ["AWS", "Docker", "Kubernetes"],
    rating: 5,
    initials: "DM",
    bg: "bg-purple-600",
  },
];

const TestimonialSpotlight = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg_light_2 dark:bg-bg_dark_2 text-gray-800 dark:text-gray-100 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-blue-400">
              Social Proof & Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-2">
              Loved by Fast-Growing Engineering Teams
            </h2>
          </div>
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-xs font-bold text-primary dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            Read All 128+ Verified Reviews
            <FiArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTestimonials.map((t, idx) => (
            <Slide key={idx} direction="up" duration={700 + idx * 150} triggerOnce>
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-7 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between h-full hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <FiStar key={i} className="fill-current text-sm" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                      Verified Client
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {t.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs ${t.bg}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                        {t.name}
                      </h4>
                      <FiCheckCircle className="text-primary dark:text-blue-400 text-xs" />
                    </div>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSpotlight;

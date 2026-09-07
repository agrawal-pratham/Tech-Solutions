import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";
import CountUp from "react-countup";
import { FiActivity, FiArrowRight, FiAward, FiCheckCircle, FiClock, FiStar, FiUsers } from "react-icons/fi";

const stats = [
  {
    id: 1,
    title: "Delivered Projects",
    subtitle: "Web, Cloud & AI Systems",
    number: 120,
    suffix: "+",
    decimals: 0,
    icon: <FiCheckCircle className="text-2xl text-blue-500" />,
    badgeBg: "bg-blue-50 dark:bg-blue-950/50",
  },
  {
    id: 2,
    title: "Satisfied Clients",
    subtitle: "Startups & Enterprises",
    number: 50,
    suffix: "+",
    decimals: 0,
    icon: <FiUsers className="text-2xl text-emerald-500" />,
    badgeBg: "bg-emerald-50 dark:bg-emerald-950/50",
  },
  {
    id: 3,
    title: "Support & Uptime SLA",
    subtitle: "24/7 Monitoring",
    number: 99.9,
    suffix: "%",
    decimals: 1,
    icon: <FiActivity className="text-2xl text-purple-500" />,
    badgeBg: "bg-purple-50 dark:bg-purple-950/50",
  },
  {
    id: 4,
    title: "Average Rating",
    subtitle: "Based on 128+ Reviews",
    number: 4.9,
    suffix: " / 5",
    decimals: 1,
    icon: <FiStar className="text-2xl text-amber-500 fill-amber-500" />,
    badgeBg: "bg-amber-50 dark:bg-amber-950/50",
  },
];

const HappyClient = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Slide direction="up" duration={700} triggerOnce>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-blue-400">
              Proven Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">
              Measurable Results That Speak For Themselves
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400">
              We judge our engineering success by the tangible business metrics, uptime, and growth we deliver to our partners.
            </p>
          </Slide>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((item, idx) => (
            <div
              key={item.id}
              className="bg-bg_light dark:bg-gray-800 p-7 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${item.badgeBg} flex items-center justify-center mb-5 shadow-sm`}
              >
                {item.icon}
              </div>

              <div className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-1">
                <CountUp
                  start={0}
                  end={item.number}
                  decimals={item.decimals}
                  duration={2.5}
                  suffix={item.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>

              <h3 className="text-base font-bold text-gray-900 dark:text-white mt-1">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Social Proof Link Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="fill-current text-sm" />
              ))}
            </div>
            <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
              See detailed reviews and case studies from verified CTOs and founders.
            </p>
          </div>
          <Link
            href="/reviews"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors whitespace-nowrap"
          >
            Read All Reviews
            <FiArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HappyClient;

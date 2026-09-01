import { Fade, Slide } from "react-awesome-reveal";
import { FiCheckCircle, FiCompass, FiCpu, FiGlobe, FiSmartphone } from "react-icons/fi";

const browserData = [
  {
    title: "Google Chrome",
    subtitle: "V8 engine optimized with sub-second page loads and zero layout shifts.",
    icon: "/chrome.png",
    metric: "100% Core Web Vitals",
  },
  {
    title: "Apple Safari",
    subtitle: "Hardware-accelerated rendering across iOS and macOS devices.",
    icon: "/safari.png",
    metric: "Retina & WebKit Native",
  },
  {
    title: "Microsoft Edge",
    subtitle: "Enterprise enterprise-grade security, Chromium rendering parity.",
    icon: "/edge.png",
    metric: "Strict Compliance",
  },
  {
    title: "Mozilla Firefox",
    subtitle: "Gecko privacy-centric compliance with modern CSS grid & flex standards.",
    icon: "/firefox.png",
    metric: "Open Web Standards",
  },
];

const platformBadges = [
  { icon: <FiSmartphone size={16} />, label: "Mobile First (iOS & Android)" },
  { icon: <FiGlobe size={16} />, label: "Global Edge CDN Acceleration" },
  { icon: <FiCheckCircle size={16} />, label: "WCAG 2.1 AA Accessible" },
  { icon: <FiCpu size={16} />, label: "PWA Offline-Ready Support" },
];

const BrowserSupport = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg_light dark:bg-bg_dark text-gray-800 dark:text-gray-100 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Slide direction="up" duration={700} triggerOnce>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-blue-400">
              Universal Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3">
              Flawless Performance Across All Devices & Browsers
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-400">
              Every platform we build is rigorously tested across operating systems and screen viewports to ensure uniform fidelity.
            </p>
          </Slide>
        </div>

        {/* Browser Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {browserData.map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center justify-between"
            >
              <div>
                <img
                  className="w-16 h-16 mb-4 rounded-full mx-auto drop-shadow"
                  src={item.icon}
                  alt={item.title}
                />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {item.subtitle}
                </p>
              </div>

              <span className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-primary dark:text-blue-400 border border-blue-100 dark:border-blue-900">
                {item.metric}
              </span>
            </div>
          ))}
        </div>

        {/* Standards & Capabilities Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {platformBadges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-sm"
            >
              <span className="text-primary dark:text-blue-400">{badge.icon}</span>
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowserSupport;

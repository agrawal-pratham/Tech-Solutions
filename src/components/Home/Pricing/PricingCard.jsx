import { TabPanel } from "@headlessui/react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const PricingCard = ({ data, id }) => {
  return (
    <TabPanel className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-4">
        {data.map((plan, index) => (
          <Fade
            direction="up"
            duration={700 + index * 150}
            key={index}
            triggerOnce
          >
            <div
              className={`relative flex flex-col justify-between rounded-3xl p-7 transition-all duration-300 ${
                plan.popular
                  ? "bg-white dark:bg-gray-800 border-2 border-primary dark:border-blue-500 shadow-xl lg:-translate-y-2"
                  : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 rounded-full bg-primary text-white text-[11px] font-bold uppercase tracking-wider shadow">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-blue-400">
                    {plan.name}
                  </span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                    {plan.timeline}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.title}
                </h3>

                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
                      ${plan.price}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      / {plan.billing}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {plan.description}
                </p>

                <div className="space-y-2.5 mb-8">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-400">
                    What's Included:
                  </p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                      <FiCheck className="text-green-500 mt-0.5 shrink-0" size={14} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-700/80">
                <Link
                  href={`/contact-us?service=${encodeURIComponent(
                    `${plan.name} (${plan.title})`
                  )}`}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold transition-all ${
                    plan.popular
                      ? "bg-primary hover:bg-blue-700 text-white shadow-md"
                      : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
                  }`}
                >
                  Get Started With This Plan
                  <FiArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </TabPanel>
  );
};

export default PricingCard;

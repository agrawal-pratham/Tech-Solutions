import LoadingSpinner from "@/components/Shared/Spinner/LoadingSpinner";
import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import PricingCard from "./PricingCard";
import { PricingData } from "./pricingData";

const serviceCategories = [
  { name: "Web Dev", icon: "/s1.png", color: "#3B82F6" },
  { name: "UI/UX Design", icon: "/s2.png", color: "#8B5CF6" },
  { name: "Cloud & DevOps", icon: "/s3.png", color: "#10B981" },
  { name: "AI Solutions", icon: "/s4.png", color: "#F59E0B" },
  { name: "Mobile Apps", icon: "/s5.png", color: "#06B6D4" },
  { name: "E-Commerce", icon: "/s6.png", color: "#F43F5E" },
];

const Pricing = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-blue-400">
            Transparent Investment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4">
            Predictable Milestone-Based Pricing
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Select a service category below to view estimated milestones, deliverables, and timelines. No hidden charges or surprise invoices.
          </p>
        </div>

        <TabGroup>
          {/* Category Tabs Bar */}
          <TabList className="flex justify-center gap-3 sm:gap-6 flex-wrap mb-10">
            {serviceCategories.map((cat, index) => (
              <Tab
                key={index}
                className="flex flex-col items-center gap-2 focus:outline-none group"
              >
                {({ selected }) => (
                  <>
                    <div
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center p-3 transition-all duration-300 ${
                        selected
                          ? "bg-blue-600 shadow-lg scale-105"
                          : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                      }`}
                    >
                      <img
                        src={cat.icon}
                        alt={cat.name}
                        className={`w-8 h-8 sm:w-10 sm:h-10 object-contain transition-transform group-hover:scale-110 ${
                          selected ? "brightness-0 invert" : ""
                        }`}
                      />
                    </div>
                    <span
                      className={`text-xs font-bold transition-colors ${
                        selected
                          ? "text-primary dark:text-blue-400"
                          : "text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      }`}
                    >
                      {cat.name}
                    </span>
                  </>
                )}
              </Tab>
            ))}
          </TabList>

          {/* Pricing Panels */}
          <TabPanels>
            {PricingData.length === 0 ? (
              <div className="spinner text-center py-10">
                <LoadingSpinner />
              </div>
            ) : (
              PricingData.map((data, index) => (
                <PricingCard id={index} data={data} key={index} />
              ))
            )}
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  );
};

export default Pricing;

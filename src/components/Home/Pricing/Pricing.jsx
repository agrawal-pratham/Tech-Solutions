import LoadingSpinner from "@/components/Shared/Spinner/LoadingSpinner";
import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import PricingCard from "./PricingCard";
import { PricingData } from "./pricingData";

const Pricing = () => {
  return (
    <section className="pricing py-8 px-4 bg-bg_light dark:bg-bg_dark ">
      <h4 className="text-center uppercase text-primary dark:text-blue-600">
        Pricing
      </h4>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          CHOOSE PLAN
        </h2>
      </div>
      <div className="mx-auto">
        <TabGroup>
          <TabList className="flex justify-center gap-6  flex-wrap flex-row">
            {[
              "/s1.png",
              "/s2.png",
              "/s3.png",
              "/s4.png",
              "/s5.png",
              "/s6.png",
            ].map((src, index) => (
              <Tab
                key={index}
                className="relative h-24 w-24 mb-12 rounded-full transition duration-300"
              >
                {({ selected }) => (
                  <>
                    <div
                      className={`h-full w-full rounded-full bg-slate-50 transition-all ease-out duration-300 border-none`}
                      style={{
                        outlineOffset: selected ? 5 : 0,

                        outline: `7px solid ${getColorByIndex(index)}`,
                        // border: `7px solid ${getColorByIndex(index)}`,
                        backgroundColor: selected
                          ? getColorByIndexForBackground(index)
                          : "",
                      }}
                    >
                      <img
                        src={src}
                        alt=""
                        className="absolute w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                  </>
                )}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="flex justify-center space-x-4  flex-wrap flex-row">
            {PricingData.length === 0 ? (
              <div className="spinner text-center mt-3">
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

const getColorByIndex = (index) => {
  const colors = [
    "#ffccd3",
    "#a2ffd2",
    "#fdd2ff",
    "#CBEDFF",
    "#dfdaff",
    "#ffeb94",
  ];
  return colors[index];
};
const getColorByIndexForBackground = (index) => {
  const colors = [
    "#FF4F66",
    "#4ED797",
    "#F78CFF",
    "#76CDFF",
    "#755BFF",
    "#ffd30f",
  ];
  return colors[index];
};

export default Pricing;

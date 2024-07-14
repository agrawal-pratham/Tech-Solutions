import { TabPanel } from "@headlessui/react";
import { Fade } from "react-awesome-reveal";

const PricingCard = ({ data, id }) => {
  return (
    <TabPanel>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map(({ title, name, price }, index) => (
          <Fade
            direction="up"
            duration={1000 + index * 250}
            key={index}
            triggerOnce
          >
            <div
              className={`pricingCard p-6 rounded-lg shadow-lg`}
              style={{
                backgroundColor: getColorByIndex(id),
              }}
            >
              <div className="pricingBox text-center mb-4">
                <h4 className="text-xl font-semibold text-gray-900 ">
                  {title}
                </h4>
                <p className="pricePlan text-2xl font-bold text-blue-500">
                  ${price}/<span className="text-base">month</span>
                </p>
                <h5 className="text-lg text-gray-700 ">{name}</h5>
                <p className="planDescription text-gray-800 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sunt, autem iusto aliquam labore sed error molestias vel
                  corporis explicabo vitae adipisci laudantium! Tempore quisquam
                  eos nam omnis voluptates illum, eligendi ipsum, veritatis
                  facere harum, quo unde? Nulla quos, unde praesentium omnis
                  maxime ex alias ducimus!
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">UI/UX Design.</li>
                <li className="flex items-center">Related statistics.</li>
                <li className="flex items-center">Business Analysis.</li>
              </ul>
            </div>
          </Fade>
        ))}
      </div>
    </TabPanel>
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

export default PricingCard;

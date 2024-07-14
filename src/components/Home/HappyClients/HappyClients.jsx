import { Fade } from "react-awesome-reveal";
import CountUp from "react-countup";

const HappyClient = () => {
  const workDetails = [
    { title: "Happy Clients", number: 50, id: 1 },
    { title: "Projects", number: 120, id: 2 },
    { title: "Hours of Support", number: 1634, id: 3 },
    { title: "Hard Workers", number: 32, id: 4 },
  ];

  return (
    <section className="bg-bg_light_2 dark:bg-bg_dark_2 p-8">
      <div className="container mx-auto grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {workDetails.map(({ title, number, id }) => (
          <div className="w-full p-2" key={id}>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center transition duration-1000">
              <span
                className={`inline-block p-6 py-12  rounded-lg mb-4 ${
                  id === 1
                    ? "bg-green-500 shadow-green-500/50"
                    : id === 2
                    ? "bg-yellow-500 shadow-yellow-500/50"
                    : id === 3
                    ? "bg-indigo-500 shadow-indigo-500/50"
                    : "bg-pink-500 shadow-pink-500/50"
                }`}
              >
                {/* Icon placeholder */}
              </span>
              <p className="text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">
                {title}
              </p>

              <CountUp start={0} end={number} redraw={true} suffix="+">
                {({ countUpRef, start }) => {
                  return (
                    <Fade
                      duration={1500}
                      triggerOnce
                      onVisibilityChange={(inView) => {
                        if (inView) start();
                      }}
                    >
                      <>
                        <h4
                          className="text-4xl font-bold text-primary dark:text-blue-600"
                          ref={countUpRef}
                        />
                      </>
                    </Fade>
                  );
                }}
              </CountUp>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HappyClient;

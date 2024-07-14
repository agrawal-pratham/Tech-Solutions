import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <section className="about overflow-hidden py-5 px-4 bg-bg_light dark:bg-bg_dark">
      <div className=" xs:text-center md:text-left mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full md:w-6/12 md:p-6">
          <Slide duration={2000} direction="left" triggerOnce>
            <img src="/about.svg" alt="Team" className="w-full md:rounded-lg" />
          </Slide>
        </div>
        <div className="w-full md:w-6/12 md:p-2 xs:mt-4 md:mt-auto transition-all duration-500">
          <Slide duration={2000} direction="right" triggerOnce>
            <p className="text-xs text-primary dark:text-blue-600">About us</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              HOW WE CAN HELP YOUR{" "}
              <span className="text-primary dark:text-blue-600">BUSINESS</span>{" "}
              GOAL
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
              Choosing a suitable theme for your business isn’t hard if you know
              what to look for. A solid bundled contact form plugin enables
              customers to make contact with you, and a means of displaying your
              business and location information prominently is also essential.
            </p>
            <button class="text-white w-fit bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-primary focus:outline-none dark:focus:ring-blue-800">
              Learn More
            </button>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default About;

// components/CallToAction.js

import { Fade } from "react-awesome-reveal";

const CallToAction = () => {
  return (
    <section className="py-8 px-2 bg-bg_light dark:bg-bg_dark text-center md:h-[100vh] xs:h-auto grid place-content-center snap-center">
      <Fade duration={1000} cascade={true} direction="up" triggerOnce>
        <h2 className="text-4xl font-bold mb-10  text-primary dark:text-blue-600">
          Get in Touch
        </h2>
        <p className=" mx-auto md:max-w-[50%] xs:max-w-[90%] text-xl font-semibold mb-8 text-gray-800 dark:text-white">
          We would love to hear from you! Whether you have a project in mind or
          just want to learn more about what we do, feel free to reach out.
          Let's build something great together.
        </p>
        <a
          href="/#contact"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 xs:mb-12 rounded-full inline-block mx-auto"
        >
          Contact Us
        </a>
      </Fade>
    </section>
  );
};

export default CallToAction;

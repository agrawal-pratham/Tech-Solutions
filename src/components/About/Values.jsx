// components/ValuesMission.js

import { Fade, Slide } from "react-awesome-reveal";

const ValuesMission = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:py-24 lg:px-8 bg-bg_light_2 dark:bg-bg_dark_2 text-center md:h-[100vh] xs:h-auto grid place-content-center snap-center">
      <Slide duration={1000} fraction={0.8} direction="down" triggerOnce>
        <h2 className="text-4xl font-bold mb-8  text-primary dark:text-blue-500">
          Our Values and Mission
        </h2>
      </Slide>
      <div className="mt-10 space-y-10">
        <div className="values">
          <Fade
            duration={1000}
            cascade={true}
            delay={500}
            damping={0.3}
            direction="down"
            triggerOnce
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Core Values
            </h3>
            <p className="text-gray-600 text-lg dark:text-slate-300 mx-auto md:max-w-[50%] xs:max-w-[90%]">
              <strong>Innovation</strong>: We are committed to staying at the
              cutting edge of technology, constantly exploring new ways to
              enhance our services.
            </p>
            <p className="text-gray-600 text-lg dark:text-slate-300 mx-auto md:max-w-[50%] xs:max-w-[90%]">
              <strong>Quality</strong>: Our focus is on delivering high-quality
              solutions that exceed client expectations.
            </p>
            <p className="text-gray-600 text-lg dark:text-slate-300 mx-auto md:max-w-[50%] xs:max-w-[90%]">
              <strong>Integrity</strong>: We believe in honesty, transparency,
              and building trust with our clients.
            </p>
          </Fade>
        </div>

        <div className="mission">
          <Fade
            duration={1000}
            cascade={true}
            delay={1200}
            damping={0.5}
            direction="up"
            triggerOnce
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Our Mission
            </h3>
            <p className="text-gray-600 text-lg dark:text-slate-300 mx-auto md:max-w-[50%] xs:max-w-[90%]">
              Our mission is to empower businesses by providing top-notch web
              development services that drive growth and success. We believe in
              the transformative power of the web and strive to make a positive
              impact on our clients and the world.
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default ValuesMission;

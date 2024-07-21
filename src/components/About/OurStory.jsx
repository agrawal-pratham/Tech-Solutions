import { Fade, Slide } from "react-awesome-reveal";

const OurStory = () => {
  return (
    <section className="py-8 px-2 bg-bg_light_2 dark:bg-bg_dark_2 text-center md:h-[100vh] xs:h-auto grid place-content-center snap-center">
      <Slide duration={1000} direction="down" triggerOnce>
        <h2 className="text-4xl font-bold mb-8  text-primary dark:text-blue-500">
          Our Story
        </h2>
      </Slide>
      <div className="mb-8">
        <Slide duration={1000} direction="up" delay={200} triggerOnce>
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
            The Beginning
          </h3>
        </Slide>
        <Fade duration={1200} delay={400} triggerOnce>
          <p className="text-gray-600 text-lg dark:text-slate-300 mx-auto md:max-w-[50%] xs:max-w-[90%] ">
            Our journey started in 2020 when Pratham Agrawal identified a gap in
            the market for high-quality, user-centric web development services.
            Inspired by the potential of the web to transform businesses,
            Pratham set out to create a company that would not just meet but
            exceed client expectations. From humble beginnings, we have grown
            through dedication, hard work, and a relentless pursuit of
            excellence.
          </p>
        </Fade>
      </div>
      <div>
        <Fade duration={1000} delay={600} triggerOnce>
          <Slide duration={1000} delay={600} direction="up" triggerOnce>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Milestones
            </h3>
          </Slide>
        </Fade>
        <ul className="list-disc text-lg list-inside text-left text-gray-600 dark:text-slate-300 md:max-w-[60%] xs:max-w-[90%] leading-loose mx-auto">
          <Fade duration={1000} delay={800} cascade triggerOnce>
            <li>
              <strong>2022</strong>: Solutions was founded and launched its
              first client project, setting the standard for quality and
              innovation.
            </li>
            <li>
              <strong>2023</strong>: Expanded our services to include
              comprehensive full-stack development, enhancing our ability to
              deliver complete web solutions.
            </li>

            <li>
              <strong>2024</strong>: Launched our specialized service
              platform,solutions.agrawalpratham.in, to provide a seamless
              experience for our clients.
            </li>
          </Fade>
        </ul>
      </div>
    </section>
  );
};

export default OurStory;

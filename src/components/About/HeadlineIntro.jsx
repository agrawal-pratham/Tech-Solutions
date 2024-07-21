import { Fade, Slide } from "react-awesome-reveal";

const HeadlineIntro = () => {
  return (
    <section className="grid place-content-center !snap-center md:pt-32 xs:pt-28 xs:pb-2 px-4 bg-bg_light dark:bg-bg_dark text-center md:h-[100vh]  xs:h-auto">
      <Slide duration={1000} direction="down" triggerOnce>
        <h1 className="text-4xl font-bold mb-4 text-primary dark:text-blue-600">
          Building the Future of Web Development
        </h1>
      </Slide>
      <Slide duration={1200} triggerOnce direction="up" delay={200}>
        <p className="text-xl mb-6 text-gray-800 dark:text-white">
          Welcome to Solutions by Pratham Agrawal
        </p>
      </Slide>
      <Fade duration={1400} triggerOnce delay={500}>
        <p className="text-gray-600 dark:text-gray-400 md:max-w-[50%] xs:max-w-[80%] mx-auto text-lg">
          At Solutions, we're passionate about crafting innovative and
          interactive web experiences. We believe in delivering excellence and
          driving digital transformation for our clients. Our mission is to
          empower businesses with cutting-edge web solutions, and we are
          committed to achieving your digital dreams.
        </p>
      </Fade>
    </section>
  );
};

export default HeadlineIntro;

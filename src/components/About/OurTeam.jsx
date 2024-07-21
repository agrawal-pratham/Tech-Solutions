import { Fade, Slide } from "react-awesome-reveal";

const OurTeam = () => {
  return (
    <section className="py-8 px-2 bg-bg_light dark:bg-bg_dark text-center md:h-[100vh] xs:h-auto grid place-content-center snap-center">
      <Slide duration={1000} fraction={0.8} direction="down" triggerOnce>
        <h2 className="text-4xl font-bold mb-10  text-primary dark:text-blue-600">
          Meet Our Team
        </h2>
      </Slide>
      <div className="team-member flex flex-col items-center">
        <Slide duration={1000} delay={500} direction="up" triggerOnce>
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            Pratham Agrawal - Founder & Lead Developer
          </h3>
        </Slide>
        <Fade triggerOnce duration={1000} delay={800}>
          <p className="text-gray-600 text-lg dark:text-gray-400 mx-auto md:max-w-[50%] xs:max-w-[90%]">
            Pratham is the visionary behind Solutions, bringing his extensive
            experience and passion for web development to the forefront. He
            leads the team with a focus on innovation and excellence, ensuring
            every project aligns with our high standards.
          </p>
        </Fade>
      </div>
      <div className="team-culture flex flex-col items-center mt-10">
        <Fade triggerOnce cascade duration={1000} delay={800}>
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
            Team Culture
          </h3>

          <p className="text-gray-600 text-lg dark:text-gray-400 mx-auto md:max-w-[50%] xs:max-w-[90%]">
            At Solutions, we foster a collaborative and inclusive environment
            where creativity and innovation thrive. Our team is a close-knit
            group of professionals who are dedicated to pushing the boundaries
            of what's possible in web development. We value diverse perspectives
            and believe that our collective expertise drives our success.
          </p>
        </Fade>
      </div>
    </section>
  );
};

export default OurTeam;

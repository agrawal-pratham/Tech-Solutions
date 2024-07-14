import { useThemeContext } from "@/context/ThemeContext";
import { Slide } from "react-awesome-reveal";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const { darkMode } = useThemeContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-32 xs:mt-20 xs:mb-2 ">
      <div className="flex items-center justify-center">
        <div className="p-4 md:pl-8 md:text-left xs:text-center">
          <div className="mb-2">
            <Slide duration={2000} delay={0} fraction={0.1}>
              <h4 className="text-4xl font-bold text-gray-900 md:text-5xl dark:text-slate-200">
                Easy Consulting <br />
                Start Your{" "}
                <span className="bg-gradient-to-r from-transparent  via-transparent to-primary text-blue-700 bg-clip-text">
                  <ReactTyped
                    strings={["Business", "Startup"]}
                    typeSpeed={100}
                    startDelay={100}
                    fadeOut
                    loop
                  />
                </span>
              </h4>
            </Slide>
          </div>
          <div className="mb-3">
            <Slide duration={2200} direction="left" triggerOnce>
              <p className="text-lg text-gray-700 dark:text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                delectus.
                <br />
                Lorem ipsum dolor sit amet.
              </p>
            </Slide>
          </div>
          <Slide duration={2000} direction="left" triggerOnce>
            <div className="flex flex-row md:items-center md:justify-start xs:justify-center ">
              <button
                type="button"
                class="text-white w-fit bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-primary focus:outline-none dark:focus:ring-blue-800"
              >
                Start Now
              </button>
              <button
                type="button"
                class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 w-fit hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Learn more
              </button>{" "}
            </div>
          </Slide>
        </div>
      </div>

      <div className="flex items-center justify-center px-2 overflow-visible ">
        <a
          rel="noopener noreferrer nofollow"
          href="https://mui.com/store/previews/mira-pro-react-material-admin-dashboard/"
          target="_blank"
        >
          <div className="shadow-lg  rounded-lg overflow-hidden   w-full max-w-screen-lg md:max-w-full  hover:scale-110 transition-all duration-500">
            {darkMode ? (
              <img src="/dark.jpg" alt="Dashboard" className="w-full" />
            ) : (
              <img src="/default.jpg" alt="Dashboard" className="w-full" />
            )}
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;

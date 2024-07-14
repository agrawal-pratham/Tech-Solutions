import { useThemeContext } from "@/context/ThemeContext";
import { Fade, Slide } from "react-awesome-reveal";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco, vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const BuildTools = () => {
  const { darkMode } = useThemeContext();

  return (
    <div className="py-8 px-2 bg-bg_light_2 dark:bg-bg_dark_2">
      <div className="mb-8">
        <div className="mb-4">
          <Slide direction="up" duration={1500} triggerOnce>
            <h4 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
              Build tools and full documentation
            </h4>
            <p className="text-lg text-center text-gray-600 dark:text-gray-400">
              Components, plugins, and build tools are all thoroughly documented
              with live examples and markup for easier use and customization.
            </p>
          </Slide>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-10/12 lg:w-1/2 transition-all duration-500">
          <Fade direction="down" triggerOnce duration={2000}>
            <SyntaxHighlighter
              language="javascript"
              style={darkMode ? vs2015 : docco}
              className="p-4 rounded-lg bg-blue-900  text-white dark:bg-gray-800 dark:text-gray-300"
            >
              {`
      > $ yarn install
      // Or
      > $ npm install
      
      // Everything installed!
      
      
      > $ yarn start
      // Or
      > $ npm run start
      
      // LiveReload started. Opening localhost:3000
            `}
            </SyntaxHighlighter>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default BuildTools;

const data = [
  {
    title: "Google Chrome",
    subtitle:
      "Google Chrome is a cross-platform web browser developed by Google.",
    icon: "/chrome.png",
  },
  {
    title: "Safari",
    subtitle:
      "Safari is a graphical web browser developed by Apple, based on the WebKit engine.",
    icon: "/safari.png",
  },
  {
    title: "Microsoft Edge",
    subtitle:
      "Microsoft Edge is a web browser developed by Microsoft. It was first released for Windows 10.",
    icon: "/edge.png",
  },
  {
    title: "Mozilla Firefox",
    subtitle:
      "Mozilla Firefox, or simply Firefox, is a free and web browser developed by the Mozilla.",
    icon: "/firefox.png",
  },
];

const BrowserSupport = () => {
  return (
    <div className="p-8  bg-bg_light dark:bg-bg_dark">
      <div className="mb-16 text-center">
        <h5 className=" uppercase font-medium mb-2 text-primary dark:text-blue-600">
          Compatibility
        </h5>
        <h2 className="font-bold text-3xl text-gray-800 dark:text-white">
          Compatible with all major browsers
        </h2>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item, i) => (
          <div
            className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <img
              className="w-20 h-20 mb-4 rounded-full"
              src={item.icon}
              alt={item.title}
            />
            <h6 className="text-lg font-semibold text-gray-800 dark:text-white text-center mb-2">
              {item.title}
            </h6>
            <p className="text-center text-gray-600 dark:text-gray-400">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowserSupport;

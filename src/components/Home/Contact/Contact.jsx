import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  return (
    <section id="contact" className="py-12 bg-bg_light_2 dark:bg-bg_dark_2">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <Fade duration={1500} direction="left" triggerOnce>
              <form
                onSubmit={handleSubmit}
                className="bg-bg_light_2 dark:bg-bg_dark_2 shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <h4 className="text-xl font-semibold text-primary dark:text-blue-500 mb-2">
                  CONTACT US
                </h4>
                <h5 className="text-2xl font-bold text-gray-900 dark:text-slate-300 mb-6">
                  GET IN TOUCH
                </h5>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      class="shadow-sm bg-bg_light border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-bg_dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Your Name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <input
                      class="shadow-sm bg-bg_light border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-bg_dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Your Email"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <input
                    class="shadow-sm bg-bg_light border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-bg_dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Subject"
                    type="text"
                    required
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    class="shadow-sm bg-bg_light border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-bg_dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Your Message..."
                    required
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    class="text-white w-fit bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-primary focus:outline-none dark:focus:ring-blue-800"
                    type="submit"
                  >
                    Submit Now
                  </button>
                </div>
              </form>
            </Fade>
          </div>
          <div className="w-full md:w-1/2">
            <Slide triggerOnce direction="right">
              <Image
                height={0}
                width={0}
                style={{
                  height: "100%",
                  width: "100%",
                }}
                src="/contact.svg"
                alt="contact_us_image"
                className="w-full h-auto"
              />
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

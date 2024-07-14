import {
  FaDiscord,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-gray-800 text-white">
      <footer className="bg-bg_light dark:bg-bg_dark">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 text-center">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-bg_dark uppercase dark:text-bg_light_2">
                Company
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/careers" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/brand-center" className="hover:underline">
                    Brand Center
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/blog" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-bg_dark uppercase dark:text-bg_light_2">
                Help center
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/discord-server" className="hover:underline">
                    Discord Server
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/in/agrawalpratham/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://x.com/agrawal_2002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/contact-us" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-bg_dark uppercase dark:text-bg_light_2">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/licensing" className="hover:underline">
                    Licensing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/terms-conditions" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-bg_dark uppercase dark:text-bg_light_2">
                Download
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/ios" className="hover:underline">
                    iOS
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/android" className="hover:underline">
                    Android
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/windows" className="hover:underline">
                    Windows
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/macos" className="hover:underline">
                    MacOS
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 md:flex md:items-center md:justify-between flex items-center justify-between xs:flex-col sm:flex-row">
            <span className="sm:text-sm xs:text-xs text-gray-500 dark:text-gray-300 sm:text-center">
              &copy; 2024{" "}
              <a
                href="https://agrawalpratham.in/"
                target="_blank"
                rel="author"
                referrerPolicy="origin"
              >
                Pratham Agrawal
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex xs:justify-center sm:mt-0 xs:mt-4 space-x-5">
              <a
                href="https://www.facebook.com"
                target="_blank"
                referrerPolicy="origin-when-cross-origin"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaFacebookF />
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                referrerPolicy="origin-when-cross-origin"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaDiscord />
                <span className="sr-only">Discord community</span>
              </a>
              <a
                href="https://x.com/agrawal_2002"
                rel="author"
                target="_blank"
                referrerPolicy="origin-when-cross-origin"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaTwitter />
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="https://github.com/pratham2002"
                rel="author"
                target="_blank"
                referrerPolicy="origin-when-cross-origin"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaGithub />
                <span className="sr-only">GitHub account</span>
              </a>
              <a
                href="https://www.linkedin.com/in/agrawalpratham/"
                rel="author"
                target="_blank"
                referrerPolicy="origin-when-cross-origin"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaLinkedin />
                <span className="sr-only">Linkedin account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

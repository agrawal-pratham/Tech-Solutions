import { Theme } from "@/constants/variables";
import {
  faBars,
  faMoon,
  faSun,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "" },
  { name: "Services", href: "#services" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    if (localStorage.theme === Theme.Dark) {
      setIsDarkMode(true);
      document.documentElement.classList.add(Theme.Dark);
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove(Theme.Dark);
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      console.log("hash", window.location.hash);
      setActiveHash(window.location.hash);
    };

    handleHashChange(); // Set initial hash
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleChangeTheme = () => {
    if (localStorage.theme !== Theme.Dark) {
      document.documentElement.classList.add(Theme.Dark);
      localStorage.theme = Theme.Dark;
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove(Theme.Dark);
      localStorage.theme = Theme.Light;
      setIsDarkMode(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/logo-bg.png"
            width={180}
            height={80}
            alt="Techo Solution Logo"
          />
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                    activeHash === item.href
                      ? "text-blue-700 dark:text-blue-500"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={handleChangeTheme}
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {isDarkMode ? (
                  <FontAwesomeIcon icon={faSun} />
                ) : (
                  <FontAwesomeIcon icon={faMoon} />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

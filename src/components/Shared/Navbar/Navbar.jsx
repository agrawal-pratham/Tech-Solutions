import { useThemeContext } from "@/context/ThemeContext";
// import { driver } from "driver.js";
// import "driver.js/dist/driver.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const { darkMode, handleChangeTheme } = useThemeContext();

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.pathname);
      setIsMenuOpen(false);
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    // const driverObj = driver({
    //   showProgress: false,
    //   showButtons: ["next"],
    //   steps: [
    //     {
    //       element: "#dark-mode-settings",
    //       popover: {
    //         title: "Dark Mode Settings",
    //         description:
    //           "Here is the code example showing animated tour. Let's walk you through it.",
    //       },
    //     },
    //   ],
    // });

    // driverObj.drive();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((p) => !p);
  };

  const darkModeSettings = () => {
    return (
      <button
        id="dark-mode-settings"
        onClick={handleChangeTheme}
        className="block py-2 px-3 rounded hover:bg-gray-100  md:hover:bg-transparent md:border-0 md:p-0 dark:hover:bg-gray-700 dark:text-white md:dark:hover:bg-transparent !duration-0"
      >
        {darkMode ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
      </button>
    );
  };

  return (
    <nav
      className={`bg-white z-[9999]  border-gray-200 dark:bg-gray-900 dark:border-gray-700 w-full block fixed top-0 shadow-md `}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4  bg-white dark:bg-gray-900">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/logo-bg.png"
            width={180}
            height={80}
            alt="Techo Solution Logo"
          />
        </Link>
        <div className="inline-flex items-center">
          <span className="visible md:hidden">{darkModeSettings()}</span>
          <button
            onClick={toggleMenu}
            type="button"
            className=" p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <IoCloseCircleOutline size={22} />
            ) : (
              <HiOutlineMenu size={22} />
            )}
          </button>
        </div>
        <div
          className={`w-full md:block md:w-auto md:max-h-dvh transition-all ease-in-out overflow-hidden  duration-1000 ${
            isMenuOpen ? "max-h-svh" : "max-h-0"
          }`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map((item) => (
              <li key={item.href} className="group">
                <a
                  href={item.href}
                  className={` block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                    activeHash === item.href
                      ? "text-blue-700 dark:text-blue-500"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {item.name}
                </a>
                <span
                  className={`block ${
                    activeHash === item.href
                      ? "max-w-full bg-blue-500"
                      : "max-w-0 dark:bg-white bg-gray-500"
                  } group-hover:max-w-full transition-all duration-500 h-1`}
                ></span>
              </li>
            ))}
            <li className="hidden md:block">{darkModeSettings()}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

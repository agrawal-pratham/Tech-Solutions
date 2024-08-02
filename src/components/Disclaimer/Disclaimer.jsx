import { useEffect, useState } from "react";

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // Modal opens after 5 seconds

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex z-[9999] items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-bg_light dark:bg-bg_dark text-gray-900 dark:text-slate-200 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Disclaimer</h2>
        <p className="mb-4">
          This project is purely for the purpose of showcasing user interface
          designs and is not intended to cause any harm to businesses, nor does
          it seek to replicate or imitate the work of others. The content and
          layout displayed herein are illustrative and should not be construed
          as fully functional or representative of a final product.
        </p>
        <p className="mb-4">
          Kindly be aware that this site is currently under active development.
          A significant portion of the functionalities and pages are still in
          progress, and as such, the experience provided at this stage is
          limited to preliminary demonstrations. The final version may differ
          substantially as additional features and refinements are introduced.
        </p>
        <button
          onClick={closeModal}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
        >
          I Understand
        </button>
      </div>
    </div>
  );
};

export default DisclaimerModal;

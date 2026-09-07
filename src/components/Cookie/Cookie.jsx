import { trackEvent } from "@/lib/analytics";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiCheck, FiShield } from "react-icons/fi";

export default function CookieBanner() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookie_consent_accepted");
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent_accepted", "true");
    setShowConsent(false);
    trackEvent({
      action: "cookie_consent_accepted",
      category: "consent",
      label: "accepted",
    });
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3 text-gray-700 dark:text-gray-300">
          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-primary dark:text-blue-400 shrink-0">
            <FiShield size={20} />
          </div>
          <p className="text-xs sm:text-sm leading-relaxed">
            We use privacy-friendly analytics cookies (Google Analytics, Clarity, Vercel) to understand traffic and improve your browsing experience. Read our{" "}
            <Link
              href="/privacy-policy"
              className="text-primary dark:text-blue-400 font-semibold underline hover:text-blue-700 transition-colors"
            >
              Privacy Policy
            </Link>{" "}
            for full disclosures.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end shrink-0">
          <button
            onClick={handleAccept}
            className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-primary hover:bg-blue-700 shadow-md hover:shadow-lg transition-all"
          >
            <FiCheck size={16} />
            Accept & Continue
          </button>
        </div>
      </div>
    </div>
  );
}

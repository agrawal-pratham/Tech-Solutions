import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [showConsent, setShowConsent] = useState(true);

  const onClick = () => {
    localStorage.setItem("showCookieConsent", false);
    setShowConsent(false);
  };
  useEffect(() => {
    let toShow = localStorage.getItem("showCookieConsent");
    setShowConsent(!toShow);
  }, []);
  if (!showConsent) {
    return <></>;
  }

  return (
    <div className="flex flex-col items-start justify-between z-10 px-5 py-3 box-border bg-gray-200 md:flex-row md:space-y-0 md:items-stretch md:space-x-2 fixed bottom-0 w-full">
      <div className="flex items-center text-gray-900 w-full ">
        <p className="text-sm font-medium">
          This website uses services that use cookies to analyze traffic.
          {/*
          You can learn more about the services we use at
          our{" "}
          <a className="text-sm underline hover:text-lightAccent">
            <Link href="/privacy-policy">privacy policy</Link>
          </a> */}
        </p>
      </div>
      <div className="flex justify-end w-full">
        <button
          className="p-2 rounded-lg text-sm font-bold text-white uppercase bg-gray-700 whitespace-nowrap"
          onClick={onClick}
        >
          Got it
        </button>
      </div>
    </div>
  );
}

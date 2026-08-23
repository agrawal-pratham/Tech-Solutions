import Head from "next/head";
import Link from "next/link";
import { FiArrowLeft, FiCheckCircle, FiLock, FiMail, FiShield } from "react-icons/fi";

export default function PrivacyPolicy() {
  const sections = [
    { id: "collection", title: "1. Information We Collect" },
    { id: "usage", title: "2. How We Use Your Information" },
    { id: "cookies", title: "3. Cookies & Tracking Technologies" },
    { id: "sharing", title: "4. Third-Party Data Disclosures" },
    { id: "retention", title: "5. Data Retention & Security" },
    { id: "rights", title: "6. Your Privacy Rights (GDPR & CCPA)" },
    { id: "contact", title: "7. Contacting Our Privacy Officer" },
  ];

  return (
    <>
      <Head>
        <title>Privacy Policy - Solutions by Pratham Agrawal</title>
        <meta
          name="description"
          content="Privacy Policy for Solutions by Pratham Agrawal. Learn how we protect, store, process, and handle your personal and enterprise data."
        />
        <meta name="keywords" content="Privacy Policy, Data Protection, GDPR, CCPA, Tech Solutions" />
        <link rel="canonical" href="https://solutions.agrawalpratham.in/privacy-policy" />
      </Head>

      <div className="min-h-screen pt-28 pb-20 bg-bg_light dark:bg-bg_dark text-gray-800 dark:text-gray-100 transition-colors">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-primary dark:text-blue-400 hover:underline mb-6"
          >
            <FiArrowLeft /> Back to Home
          </Link>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary dark:text-blue-400 mb-2">
            <FiShield size={16} /> Legal & Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Effective Date: January 1, 2026 • Last Updated: August 20, 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-10 border border-gray-200 dark:border-gray-700 shadow-sm space-y-10">
            {/* Quick Table of Contents */}
            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-700">
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">
                Table of Contents
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="text-primary dark:text-blue-400 hover:underline"
                  >
                    {sec.title}
                  </a>
                ))}
              </div>
            </div>

            <section id="collection" className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <FiLock className="text-primary dark:text-blue-400" />
                1. Information We Collect
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Solutions by Pratham Agrawal ("Tech Solutions", "we", "our", or "us") respects your privacy. We collect information that you directly provide when using our websites, requesting consultations, or communicating with us.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-300 pl-4 list-disc">
                <li>
                  <strong>Contact Information:</strong> Name, professional email address, phone number, and organization name when submitting contact forms or career applications.
                </li>
                <li>
                  <strong>Technical & Project Specifications:</strong> Architectural goals, tech stack preferences, and functional criteria shared during discovery calls.
                </li>
                <li>
                  <strong>Automated Device Telemetry:</strong> IP addresses, browser types, operating systems, and anonymous usage analytics to maintain platform stability.
                </li>
              </ul>
            </section>

            <section id="usage" className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                2. How We Use Your Information
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                We use the data collected strictly for legitimate business and engineering purposes, including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600 dark:text-gray-300">
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700">
                  <FiCheckCircle className="text-green-500 mb-1" />
                  Delivering, maintaining, and developing custom software projects.
                </div>
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700">
                  <FiCheckCircle className="text-green-500 mb-1" />
                  Responding to contact requests, inquiries, and support tickets within 24 hours.
                </div>
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700">
                  <FiCheckCircle className="text-green-500 mb-1" />
                  Processing job applications and reviewing technical candidate portfolios.
                </div>
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700">
                  <FiCheckCircle className="text-green-500 mb-1" />
                  Detecting, preventing, and mitigating cybersecurity threats or abuse.
                </div>
              </div>
            </section>

            <section id="cookies" className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                3. Cookies & Tracking Technologies
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                We utilize essential cookies to remember your theme preference (Dark Mode vs Light Mode) and anonymous aggregated performance telemetry via Google Analytics and Microsoft Clarity. You can manage or disable cookies at any time via your browser settings or our on-site cookie preferences banner.
              </p>
            </section>

            <section id="sharing" className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                4. Third-Party Data Disclosures
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                We do not sell, rent, or trade your personal data to third parties. Data is shared solely with trusted cloud service providers bound by strict confidentiality and data processing agreements:
              </p>
              <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-300 pl-4 list-disc">
                <li>Cloud hosting & serverless compute (Vercel, AWS, Google Cloud).</li>
                <li>Transactional email systems for client communications.</li>
                <li>Compliance with lawful court orders or regulatory mandates when strictly required.</li>
              </ul>
            </section>

            <section id="retention" className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                5. Data Retention & Security Measures
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                All client communications and deliverables are protected with industry-standard TLS 1.3 encryption in transit and AES-256 encryption at rest. We retain project documentation and contact correspondence only for as long as necessary to fulfill active engagements or satisfy legal obligations.
              </p>
            </section>

            <section id="rights" className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                6. Your Privacy Rights (GDPR & CCPA)
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Depending on your location, you may have specific statutory rights regarding your personal data, including the right to request access, correction, portable transfer, or erasure ("Right to be Forgotten") of your records without discrimination.
              </p>
            </section>

            <section id="contact" className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <FiMail className="text-primary dark:text-blue-400" />
                7. Contacting Our Privacy Officer
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                If you have questions about this policy or wish to exercise your data rights, please contact our data governance team directly:
              </p>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900 text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <p><strong>Email:</strong> privacy@solutions.agrawalpratham.in</p>
                <p><strong>Attention:</strong> Pratham Agrawal, Data Protection Officer</p>
                <p><strong>Headquarters:</strong> Tech Solutions Hub, Innovation District</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

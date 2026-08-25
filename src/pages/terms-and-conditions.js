import Head from "next/head";
import Link from "next/link";
import { FiArrowLeft, FiCheckCircle, FiFileText, FiShield } from "react-icons/fi";

const termsSections = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "services", title: "2. Services & Project Engagements" },
  { id: "payments", title: "3. Invoicing, Fees & Milestone Payments" },
  { id: "revisions", title: "4. Scope, Revisions & Change Requests" },
  { id: "ip", title: "5. Intellectual Property & Code Rights" },
  { id: "warranties", title: "6. Warranty & Limitation of Liability" },
  { id: "termination", title: "7. Termination & Cancellation" },
  { id: "governing-law", title: "8. Governing Law & Dispute Resolution" },
];

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions - Solutions by Pratham Agrawal</title>
        <meta
          name="description"
          content="Terms and Conditions of service for Solutions by Pratham Agrawal. Review our engineering engagement terms, intellectual property clauses, and payment policies."
        />
        <meta name="keywords" content="Terms and Conditions, Terms of Service, Legal Contract, Tech Solutions" />
        <link rel="canonical" href="https://solutions.agrawalpratham.in/terms-and-conditions" />
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
            <FiShield size={16} /> Legal Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            Terms & Conditions
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Effective: January 1, 2026 • Version 2.1
          </p>
        </div>

        {/* Content Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-10 border border-gray-200 dark:border-gray-700 shadow-sm space-y-10">
            {/* Table of Contents */}
            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-700">
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">
                Index of Clauses
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {termsSections.map((sec) => (
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

            <section id="acceptance" className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <FiFileText className="text-primary dark:text-blue-400" />
                1. Acceptance of Terms
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                By browsing, accessing, or entering into an engineering services agreement with Solutions by Pratham Agrawal ("Tech Solutions", "we", or "us"), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you are entering into this agreement on behalf of a company, you represent that you possess the requisite authority.
              </p>
            </section>

            <section id="services" className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                2. Services & Project Engagements
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                We provide custom software engineering, frontend web development, backend architecture, cloud infrastructure configuration, and technical consulting services. Specific deliverables, sprint schedules, milestones, and technical specs are set forth in individually agreed-upon Statements of Work (SOW) or proposal agreements.
              </p>
            </section>

            <section id="payments" className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                3. Invoicing, Fees & Milestone Payments
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Fees for custom development are billed according to agreed milestone schedules (e.g., initial kickoff deposit, sprint milestones, and final delivery). Invoices are payable within 14 calendar days of issuance unless otherwise stipulated. Late balances may be subject to a 1.5% monthly administrative finance charge.
              </p>
            </section>

            <section id="revisions" className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                4. Scope, Revisions & Change Requests
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Each milestone includes up to two iterative revision rounds within the defined functional requirements. Any substantial alterations, architectural redesigns, or third-party API scope changes requested outside the approved SOW will be scoped as an additional work order at our standard hourly consultation rate.
              </p>
            </section>

            <section id="ip" className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                5. Intellectual Property & Code Rights
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Upon full settlement of milestone payments, the client receives sole and unrestricted commercial copyright to all custom deliverables, code, and design files produced under the scope. We retain the customary right to display sanitized screenshots or portfolio summaries for marketing purposes unless constrained by an active NDA.
              </p>
            </section>

            <section id="warranties" className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                6. Warranty & Limitation of Liability
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                We provide a 30-day post-launch hyper-care warranty period during which any demonstrable defects or deviations from the agreed specifications are remedied promptly without extra charge. Under no circumstances will our aggregate legal liability exceed the total professional service fees actually paid by the client under the pertinent Statement of Work.
              </p>
            </section>

            <section id="termination" className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                7. Termination & Cancellation
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Either party may terminate an ongoing engagement upon 14 business days written notice. In the event of early termination, the client shall compensate for all work completed up to the termination effective date, and all completed work-in-progress files will be delivered.
              </p>
            </section>

            <section id="governing-law" className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                8. Governing Law & Dispute Resolution
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                These terms shall be governed by and construed in accordance with applicable laws. In the event of any dispute, the parties agree to first pursue good-faith informal mediation before initiating formal arbitration proceedings.
              </p>
              <div className="mt-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 text-xs text-gray-700 dark:text-gray-300">
                <p>For any legal or contractual inquiries, please contact: <strong>legal@solutions.agrawalpratham.in</strong></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

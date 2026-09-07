import Head from "next/head";
import Link from "next/link";
import { FiArrowLeft, FiAward, FiCheck, FiCode, FiFileText, FiShield } from "react-icons/fi";

const thirdPartyLibraries = [
  {
    name: "Next.js",
    license: "MIT License",
    copyright: "© Vercel, Inc.",
    url: "https://nextjs.org",
    purpose: "React framework for production-grade SSR & SSG.",
  },
  {
    name: "React & React-DOM",
    license: "MIT License",
    copyright: "© Meta Platforms, Inc.",
    url: "https://react.dev",
    purpose: "Declarative UI component library.",
  },
  {
    name: "Tailwind CSS",
    license: "MIT License",
    copyright: "© Tailwind Labs, Inc.",
    url: "https://tailwindcss.com",
    purpose: "Utility-first CSS framework for custom styling.",
  },
  {
    name: "React Icons",
    license: "MIT / Apache 2.0",
    copyright: "© Kamran Ahmed & contributors",
    url: "https://react-icons.github.io/react-icons/",
    purpose: "Vector icon packages (Feather, FontAwesome, Material Icons).",
  },
  {
    name: "Headless UI",
    license: "MIT License",
    copyright: "© Tailwind Labs, Inc.",
    url: "https://headlessui.com",
    purpose: "Unstyled accessible UI primitives.",
  },
  {
    name: "React Awesome Reveal",
    license: "MIT License",
    copyright: "© Marco Moretti",
    url: "https://github.com/morellodev/react-awesome-reveal",
    purpose: "Intersection Observer CSS animation wrapper.",
  },
];

export default function LicensingPage() {
  return (
    <>
      <Head>
        <title>Licensing & Open Source Attributions - Solutions by Pratham Agrawal</title>
        <meta
          name="description"
          content="Licensing policies, commercial IP terms, and third-party open-source attributions for Solutions by Pratham Agrawal."
        />
        <meta name="keywords" content="Software Licensing, Open Source, MIT License, IP Ownership, Tech Solutions" />
        <link rel="canonical" href="https://solutions.agrawalpratham.in/licensing" />
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
            Licensing & Open Source Attributions
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last Updated: August 2026
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-10 border border-gray-200 dark:border-gray-700 shadow-sm space-y-10">
            {/* Client Deliverables Ownership Section */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <FiAward className="text-primary dark:text-blue-400" />
                1. Client IP & Deliverable Ownership
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Unless explicitly stated otherwise in a separate Statement of Work (SOW), all custom source code, databases, design assets, and architectural documents developed by Solutions by Pratham Agrawal for client engagements are transferred exclusively to the client upon full milestone settlement.
              </p>
              <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 text-xs text-gray-700 dark:text-gray-300 space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-primary dark:text-blue-400">
                  <FiCheck /> Perpetual, royalty-free, worldwide commercial rights.
                </div>
                <div className="flex items-center gap-2 font-semibold text-primary dark:text-blue-400">
                  <FiCheck /> No vendor lock-in or proprietary runtime licensing fees.
                </div>
                <div className="flex items-center gap-2 font-semibold text-primary dark:text-blue-400">
                  <FiCheck /> Full access to Git repositories and deployment pipelines.
                </div>
              </div>
            </section>

            {/* Proprietary Brand Assets */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <FiFileText className="text-primary dark:text-blue-400" />
                2. Proprietary Website Assets & Trademarks
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                The Solutions by Pratham Agrawal trademark, brand identity, website graphics, illustrations, and authored case studies are proprietary property protected by international copyright laws. Unauthorized reproduction, scraping, or redistribution without express written consent is prohibited.
              </p>
            </section>

            {/* Third-Party Open Source Libraries */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <FiCode className="text-primary dark:text-blue-400" />
                  3. Open-Source Software Attributions
                </h2>
                <span className="text-xs text-gray-500 font-medium">MIT / Permissive Licenses</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Our platform and projects stand on the shoulders of the open-source community. We gratefully acknowledge and comply with the licenses of the following foundational software packages:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {thirdPartyLibraries.map((lib, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                        {lib.name}
                      </h3>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                        {lib.license}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{lib.copyright}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">{lib.purpose}</p>
                    <a
                      href={lib.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-primary dark:text-blue-400 hover:underline"
                    >
                      Visit Project →
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Standard MIT License Text */}
            <section className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-700">
              <h2 className="text-base font-bold text-gray-900 dark:text-white">
                Standard MIT License Text (Reference)
              </h2>
              <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-900 text-xs font-mono text-gray-700 dark:text-gray-300 leading-relaxed overflow-x-auto">
                <p className="mb-2 font-semibold">Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software...</p>
                <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

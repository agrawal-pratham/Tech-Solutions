import { trackEvent } from "@/lib/analytics";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  FiCheckCircle,
  FiClock,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import { FaDiscord, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactUs() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (router.query?.service) {
      const decodedService = decodeURIComponent(router.query.service);
      setFormData((prev) => ({
        ...prev,
        service: decodedService,
        subject: `Consultation Request: ${decodedService}`,
      }));
    }
  }, [router.query?.service]);

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    response: null,
  });

  const serviceOptions = [
    "Web Development",
    "Custom UI/UX Design",
    "E-Commerce Solutions",
    "Cloud & DevOps Architecture",
    "AI & Automation Solutions",
    "General Consulting",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null, response: null });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit form");
      }

      setStatus({
        submitting: false,
        success: true,
        error: null,
        response: data,
      });

      // Track conversion event in GA4 and Clarity
      trackEvent({
        action: "contact_form_submitted",
        category: "lead_generation",
        label: formData.service,
        params: {
          service: formData.service,
          reference_id: data.referenceId,
        },
      });

      // Clear form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Web Development",
        subject: "",
        message: "",
      });
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message || "Something went wrong. Please try again.",
        response: null,
      });
    }
  };

  const handleReset = () => {
    setStatus({
      submitting: false,
      success: false,
      error: null,
      response: null,
    });
  };

  return (
    <>
      <Head>
        <title>Contact Us - Solutions by Pratham Agrawal</title>
        <meta
          name="description"
          content="Get in touch with Tech Solutions. Reach out for custom web development, design consulting, enterprise tech architecture, or any technical queries."
        />
        <meta
          name="keywords"
          content="Contact Tech Solutions, Web Development inquiry, Software Consulting, Pratham Agrawal"
        />
        <meta property="og:title" content="Contact Us - Solutions by Pratham Agrawal" />
        <meta
          property="og:description"
          content="Have a project in mind? Contact our team of experts for web development, cloud solutions, and UI/UX design."
        />
        <link rel="canonical" href="https://solutions.agrawalpratham.in/contact-us" />
      </Head>

      <div className="min-h-screen pt-28 pb-16 bg-bg_light dark:bg-bg_dark text-gray-800 dark:text-gray-100 transition-colors duration-300">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 mb-4">
            Connect With Our Team
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
            Let’s Build Something{" "}
            <span className="text-primary dark:text-blue-500">Extraordinary</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Have an idea for a project, need enterprise technical consultation, or want to transform your existing digital presence? We’d love to hear from you.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <FiMessageSquare className="text-primary dark:text-blue-500" />
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-xl">
                      <FiMail size={22} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-gray-400 dark:text-gray-400">
                        Direct Email
                      </p>
                      <a
                        href="mailto:contact@solutions.agrawalpratham.in"
                        className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-blue-400 transition-colors"
                      >
                        contact@solutions.agrawalpratham.in
                      </a>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        Guaranteed response within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-xl">
                      <FiPhone size={22} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-gray-400 dark:text-gray-400">
                        Phone & WhatsApp
                      </p>
                      <a
                        href="tel:+15553829104"
                        className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-blue-400 transition-colors"
                      >
                        +1 (555) 382-9104
                      </a>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        Mon-Fri, 9:00 AM – 6:00 PM EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-xl">
                      <FiMapPin size={22} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-gray-400 dark:text-gray-400">
                        Global Headquarters
                      </p>
                      <p className="text-base font-medium text-gray-800 dark:text-gray-200">
                        Tech Solutions Hub, Suite 404
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Innovation Tower, Bengaluru & San Francisco
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-xl">
                      <FiClock size={22} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-semibold text-gray-400 dark:text-gray-400">
                        Availability
                      </p>
                      <p className="text-base font-medium text-gray-800 dark:text-gray-200">
                        24/7 Monitoring & Emergency Support
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        Active response for critical production incidents
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                    Connect on Social Channels
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/in/agrawalpratham/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                      title="LinkedIn"
                    >
                      <FaLinkedin size={18} />
                    </a>
                    <a
                      href="https://x.com/agrawal_2002"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-black hover:text-white dark:hover:bg-black transition-colors"
                      title="Twitter / X"
                    >
                      <FaTwitter size={18} />
                    </a>
                    <a
                      href="https://discord.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-colors"
                      title="Discord Community"
                    >
                      <FaDiscord size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Discovery Call Card */}
              <div className="bg-gradient-to-br from-primary to-blue-700 text-white rounded-2xl p-6 sm:p-8 shadow-md">
                <h3 className="text-xl font-bold mb-2">Need an Immediate Consultation?</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Schedule a complimentary 30-minute discovery call to review your architecture, roadmap, or technical requirements.
                </p>
                <a
                  href="mailto:contact@solutions.agrawalpratham.in?subject=Schedule%20Discovery%20Call"
                  className="inline-flex items-center justify-center px-4 py-2.5 bg-white text-primary font-semibold text-sm rounded-lg hover:bg-blue-50 transition-colors shadow"
                >
                  Book 30-Min Strategy Call
                </a>
              </div>
            </div>

            {/* Right Column: Functional Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
                {status.success ? (
                  <div className="py-10 px-4 text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-950/60 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                      <FiCheckCircle size={36} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Message Received Successfully!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-6">
                      {status.response?.message ||
                        "Thank you for contacting Tech Solutions. A technical lead will review your requirements and reach out within 24 hours."}
                    </p>

                    {status.response?.refId && (
                      <div className="bg-gray-50 dark:bg-gray-900/60 rounded-xl p-4 max-w-md mx-auto mb-6 border border-gray-200 dark:border-gray-700 text-left">
                        <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                          <span className="font-semibold uppercase tracking-wider">Inquiry Reference</span>
                          <span className="font-mono text-primary dark:text-blue-400 font-bold">
                            {status.response.refId}
                          </span>
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                          <p>
                            <strong className="text-gray-800 dark:text-gray-200">Sender:</strong>{" "}
                            {status.response.details?.name} ({status.response.details?.email})
                          </p>
                          <p>
                            <strong className="text-gray-800 dark:text-gray-200">Category:</strong>{" "}
                            {status.response.details?.service}
                          </p>
                          <p>
                            <strong className="text-gray-800 dark:text-gray-200">Submitted:</strong>{" "}
                            {status.response.details?.timestamp}
                          </p>
                        </div>
                      </div>
                    )}

                    <button
                      onClick={handleReset}
                      type="button"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-medium text-sm rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                      Fill out the form below and we will prepare a tailored solution for your project.
                    </p>

                    {status.error && (
                      <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm">
                        <strong>Submission Error:</strong> {status.error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                            Phone Number <span className="text-gray-400 font-normal">(Optional)</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                            Service Needed
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                          >
                            {serviceOptions.map((svc) => (
                              <option key={svc} value={svc}>
                                {svc}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="e.g. Next.js SaaS Web Application Redesign"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5">
                          Project Details / Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project goals, technical requirements, timeline, and budget..."
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        ></textarea>
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={status.submitting}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary hover:bg-blue-700 disabled:opacity-60 text-white font-semibold text-sm rounded-lg transition-all shadow-md focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                        >
                          {status.submitting ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8v8H4z"
                                ></path>
                              </svg>
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <FiSend size={16} />
                              Submit Message
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick FAQ Section */}
          <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  What is your typical turnaround time?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Initial consultations and quotes are provided within 24 hours. Project scopes typically run from 2 to 8 weeks depending on complexity.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Do you sign Mutual NDAs?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Yes, absolutely. We prioritize your intellectual property and confidentiality, and are happy to execute standard or custom NDAs prior to discussion.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  What deliverables will I receive?
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Full ownership of clean, documented source code in a GitHub repository, deployment pipelines, architecture documentation, and 30 days of complimentary support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import { trackEvent } from "@/lib/analytics";
import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FiCheckCircle } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    refId: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ submitting: true, success: false, error: null, refId: null });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to submit message");
      }

      setStatus({
        submitting: false,
        success: true,
        error: null,
        refId: data.refId,
      });

      trackEvent({
        action: "homepage_contact_submitted",
        category: "lead_generation",
        label: formData.subject || "Homepage inquiry",
        params: {
          subject: formData.subject,
          reference_id: data.refId,
        },
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message || "An unexpected error occurred.",
        refId: null,
      });
    }
  };

  return (
    <section id="contact" className="py-16 bg-bg_light_2 dark:bg-bg_dark_2 transition-colors">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Fade duration={1200} direction="left" triggerOnce fraction={0}>
              <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-700">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary dark:text-blue-400 mb-1">
                  CONTACT US
                </h4>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                  GET IN TOUCH
                </h3>

                {status.success ? (
                  <div className="p-6 text-center rounded-xl bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800">
                    <FiCheckCircle className="mx-auto text-4xl text-green-600 dark:text-green-400 mb-2" />
                    <h5 className="text-base font-bold text-gray-900 dark:text-white">
                      Message Sent Successfully!
                    </h5>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 mb-4">
                      Thank you! We have received your inquiry (Ref: <strong>{status.refId}</strong>) and will get back to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus({ submitting: false, success: false, error: null, refId: null })}
                      className="px-4 py-2 bg-primary text-white text-xs font-semibold rounded-lg shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {status.error && (
                      <div className="mb-4 p-3 rounded-lg bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-300 text-xs border border-red-200 dark:border-red-800">
                        {status.error}
                      </div>
                    )}

                    <div className="flex flex-wrap -mx-2 mb-4">
                      <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          Your Name *
                        </label>
                        <input
                          className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your Name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="w-full sm:w-1/2 px-2">
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          Your Email *
                        </label>
                        <input
                          className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your Email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Subject *
                      </label>
                      <input
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Project Discussion or Consultation"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Your Message *
                      </label>
                      <textarea
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Tell us about your project requirements..."
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <button
                      className="w-full sm:w-auto px-6 py-2.5 bg-primary hover:bg-blue-700 disabled:opacity-60 text-white font-semibold text-xs rounded-lg shadow-md transition-all focus:outline-none focus:ring-4 focus:ring-blue-300"
                      type="submit"
                      disabled={status.submitting}
                    >
                      {status.submitting ? "Sending..." : "Submit Now"}
                    </button>
                  </form>
                )}
              </div>
            </Fade>
          </div>

          <div className="w-full md:w-1/2 md:pl-10">
            <Slide triggerOnce direction="right">
              <img
                src="/contact.svg"
                alt="contact_us_image"
                className="w-full h-auto max-w-md mx-auto drop-shadow-md"
              />
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

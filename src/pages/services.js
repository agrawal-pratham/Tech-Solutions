import CoreServices from "@/components/Services/CoreServices";
import FAQ from "@/components/Services/FAQ";
import HeadlineIntro from "@/components/Services/HeadlineIntro";
import WhyChooseUs from "@/components/Services/WhyChooseUs";
import Head from "next/head";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const Services = () => {
  return (
    <div className="services-page">
      <Head>
        <title>Our Services - Solutions by Pratham Agrawal</title>
        <meta
          name="description"
          content="Explore our full suite of technical engineering services: Full-Stack Web Development, Custom UI/UX Design, E-Commerce, Cloud Architecture, and AI Automations."
        />
        <meta
          name="keywords"
          content="web development, full-stack development, custom web design, e-commerce solutions, cloud devops, AI solutions, Tech Solutions"
        />
        <meta
          property="og:title"
          content="Our Services - Solutions by Pratham Agrawal"
        />
        <meta
          property="og:description"
          content="High-impact engineering, scalable cloud infrastructure, and custom web applications tailored to your business."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://solutions.agrawalpratham.in/services"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Services - Solutions by Pratham Agrawal"
        />
        <meta
          name="twitter:description"
          content="Explore our high-performance web development and cloud engineering services."
        />
        <link
          rel="canonical"
          href="https://solutions.agrawalpratham.in/services"
        />
      </Head>

      <HeadlineIntro />
      <CoreServices />
      <WhyChooseUs />
      <FAQ />

      {/* Call to Action Banner */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to Accelerate Your Next Technical Initiative?
          </h2>
          <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with our team today for a comprehensive feasibility evaluation and customized project proposal.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-bold text-sm rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              Get Started Now
              <FiArrowRight />
            </Link>
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-800/60 hover:bg-blue-800 text-white font-semibold text-sm rounded-xl border border-white/20 transition-all"
            >
              Read Client Reviews
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

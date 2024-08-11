import CoreServices from "@/components/Services/CoreServices";
import FAQ from "@/components/Services/FAQ";
import HeadlineIntro from "@/components/Services/HeadlineIntro";
import WhyChooseUs from "@/components/Services/WhyChooseUs";
import Head from "next/head";

const Services = () => {
  return (
    <div className="services-page">
      <Head>
        <title>Our Services - Solutions by Pratham Agrawal</title>
        <meta
          name="description"
          content="Explore the range of web development and design services offered by Solutions by Pratham Agrawal. We provide full-stack development, custom web design, e-commerce solutions, and more."
        />
        <meta
          name="keywords"
          content="web development, full-stack development, custom web design, e-commerce solutions, Solutions by Pratham Agrawal"
        />
        <meta
          property="og:title"
          content="Our Services - Solutions by Pratham Agrawal"
        />
        <meta
          property="og:description"
          content="Discover the web development and design services offered by Solutions by Pratham Agrawal. Learn more about our expertise in full-stack development, custom web design, and e-commerce solutions."
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
          content="Explore the range of web development and design services offered by Solutions by Pratham Agrawal."
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
    </div>
  );
};

export default Services;

import CallToAction from "@/components/About/ContactUs";
import HeadlineIntro from "@/components/About/HeadlineIntro";
import OurStory from "@/components/About/OurStory";
import OurTeam from "@/components/About/OurTeam";
import ValuesMission from "@/components/About/Values";
import Head from "next/head";

export default function About() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Solutions by Pratham Agrawal",
    "alternateName": "Tech Solutions",
    "url": "https://solutions.agrawalpratham.in",
    "logo": "https://solutions.agrawalpratham.in/logo-bg.png",
    "founder": {
      "@type": "Person",
      "name": "Pratham Agrawal",
      "jobTitle": "Founder & Principal Solutions Architect",
      "sameAs": [
        "https://agrawalpratham.in",
        "https://github.com/agrawal-pratham",
        "https://linkedin.com/in/agrawal-pratham"
      ]
    },
    "foundingDate": "2020",
    "description": "Enterprise digital solutions consultancy architecting scalable web applications, cloud infrastructure, and AI automation systems.",
    "sameAs": [
      "https://github.com/agrawal-pratham",
      "https://linkedin.com/in/agrawal-pratham"
    ]
  };

  return (
    <>
      <Head>
        <title>About Us - Solutions by Pratham Agrawal | Digital Engineering & Consultancy</title>
        <meta
          name="description"
          content="Learn about Solutions by Pratham Agrawal: our heritage since 2020, core leadership, client-first philosophy, and our mission to engineer resilient modern software."
        />
        <meta
          name="keywords"
          content="Solutions by Pratham Agrawal, About Us, Pratham Agrawal, Web Engineering, Software Consulting, Full-Stack Architecture, Next.js, Cloud DevOps, AI Solutions"
        />
        <meta
          property="og:title"
          content="About Us - Solutions by Pratham Agrawal | Digital Engineering & Consultancy"
        />
        <meta
          property="og:description"
          content="Discover our story from 2020 to present day, meet our engineering team led by Pratham Agrawal, and explore the core values behind our 99.9% production SLA."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://solutions.agrawalpratham.in/about"
        />
        <meta
          property="og:image"
          content="https://solutions.agrawalpratham.in/logo-bg.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us - Solutions by Pratham Agrawal"
        />
        <meta
          name="twitter:description"
          content="Discover our story, engineering philosophy, and meet the leadership team behind Solutions by Pratham Agrawal."
        />
        <meta
          name="twitter:image"
          content="https://solutions.agrawalpratham.in/logo-bg.png"
        />
        <link
          rel="canonical"
          href="https://solutions.agrawalpratham.in/about"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Head>

      <main className="min-h-screen">
        <HeadlineIntro />
        <OurStory />
        <OurTeam />
        <ValuesMission />
        <CallToAction />
      </main>
    </>
  );
}

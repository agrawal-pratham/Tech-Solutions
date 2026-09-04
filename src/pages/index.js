import DisclaimerModal from "@/components/Disclaimer/Disclaimer";
import About from "@/components/Home/About/About";
import BrowserSupport from "@/components/Home/BrowserSupport/BrowserSupport";
import BuildTools from "@/components/Home/BuildTools/BuildTools";
import Contact from "@/components/Home/Contact/Contact";
import HappyClient from "@/components/Home/HappyClients/HappyClients";
import Hero from "@/components/Home/Hero/Hero";
import Pricing from "@/components/Home/Pricing/Pricing";
import TestimonialSpotlight from "@/components/Home/TestimonialSpotlight";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tech Solutions",
    url: "https://solutions.agrawalpratham.in",
    author: {
      "@type": "Person",
      name: "Pratham Agrawal",
      url: "https://agrawalpratham.in",
    },
    description:
      "Tech Solutions provides innovative engineering solutions for your tech needs. From full-stack web applications to AI and cloud architecture.",
    image: "https://solutions.agrawalpratham.in/logo-bg-2.png",
  };

  return (
    <>
      <Head>
        <title>Tech Solutions - Modern Web Engineering, Cloud & AI</title>
        <meta
          name="description"
          content="Tech Solutions engineers scalable digital products for modern enterprises. Explore our full-stack web development, AI automations, and resilient cloud platforms."
        />
        <meta
          name="keywords"
          content="Tech Solutions, web development, Next.js 14, full stack, AI automation, cloud architecture, Pratham Agrawal"
        />
        <meta
          property="og:title"
          content="Tech Solutions - Modern Web Engineering, Cloud & AI"
        />
        <meta
          property="og:description"
          content="High-performance web applications, AI automations, and scalable cloud systems engineered for your business."
        />
        <meta
          property="og:image"
          content="https://solutions.agrawalpratham.in/logo-bg-2.png"
        />
        <meta property="og:url" content="https://solutions.agrawalpratham.in" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tech Solutions - Modern Web Engineering, Cloud & AI"
        />
        <meta
          name="twitter:description"
          content="High-performance web applications, AI automations, and scalable cloud systems."
        />
        <link rel="canonical" href="https://solutions.agrawalpratham.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <main className={`${inter.className}`}>
        <Hero />
        <BuildTools />
        <About />
        <HappyClient />
        <TestimonialSpotlight />
        <BrowserSupport />
        <Pricing />
        <Contact />
        <DisclaimerModal />
      </main>
    </>
  );
}

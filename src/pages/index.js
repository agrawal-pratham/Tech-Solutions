import About from "@/components/Home/About/About";
import BrowserSupport from "@/components/Home/BrowserSupport/BrowserSupport";
import BuildTools from "@/components/Home/BuildTools/BuildTools";
import Contact from "@/components/Home/Contact/Contact";
import Footer from "@/components/Home/Footer/Footer";
import HappyClient from "@/components/Home/HappyClients/HappyClients";
import Header from "@/components/Home/Header/Header";
import Pricing from "@/components/Home/Pricing/Pricing";
import ScrollTop from "@/components/Shared/ScrollTop/ScrollTop";
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
      "Tech Solutions provides innovative solutions for your tech needs. From web development to AI, we've got you covered.",
    image: "https://solutions.agrawalpratham.in/og-image.jpg",
  };

  return (
    <>
      <Head>
        <title>Tech Solutions - A Project by Pratham Agrawal</title>
        <meta
          name="description"
          content="Tech Solutions provides innovative solutions for your tech needs. From web development to AI, we've got you covered."
        />
        <meta
          property="og:title"
          content="Tech Solutions - A Project by Pratham Agrawal"
        />
        <meta
          property="og:description"
          content="Tech Solutions provides innovative solutions for your tech needs. From web development to AI, we've got you covered."
        />
        <meta
          property="og:image"
          content="https://solutions.agrawalpratham.in/logo-bg.png"
        />
        <meta property="og:url" content="https://solutions.agrawalpratham.in" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tech Solutions - A Project by Pratham Agrawal"
        />
        <meta
          name="twitter:description"
          content="Tech Solutions provides innovative solutions for your tech needs. From web development to AI, we've got you covered."
        />
        <meta
          name="twitter:image"
          content="https://solutions.agrawalpratham.in/logo-bg.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <main className={`${inter.className}`}>
        <Header />
        <BuildTools />
        <About />
        <BrowserSupport />
        <HappyClient />
        <Pricing />
        <Contact />
        <Footer />
        <ScrollTop />
      </main>
    </>
  );
}

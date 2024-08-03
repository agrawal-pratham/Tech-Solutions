import CookieBanner from "@/components/Cookie/Cookie";
import Footer from "@/components/Home/Footer/Footer";
import Header from "@/components/Home/Header/Header";
import ScrollTop from "@/components/Shared/ScrollTop/ScrollTop";
import { ThemeContextProvider } from "@/context/ThemeContext";
import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script id="microsoft-clarity-analytics">
        {`
       (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "nfjtkrqli4");
  `}
      </Script>
      <Head>
        <meta
          name="keywords"
          content="tech solutions, web development, AI, innovation, technology, pratham, full stack"
        />
        <meta
          property="og:image"
          content="https://solutions.agrawalpratham.in/logo-bg.png"
        />
        <meta
          name="twitter:image"
          content="https://solutions.agrawalpratham.in/logo-bg.png"
        />
        <meta name="author" content="Pratham Agrawal" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ThemeContextProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <CookieBanner />
        <ScrollTop />
      </ThemeContextProvider>
      <GoogleAnalytics gaId="G-NLPQCWCG1G" />
      <Analytics />
    </>
  );
}

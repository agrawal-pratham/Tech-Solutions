import ScrollTop from "@/components/Shared/ScrollTop/ScrollTop";
import { ThemeContextProvider } from "@/context/ThemeContext";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="tech solutions, web development, AI, innovation, technology, pratham, full stack"
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
        <Component {...pageProps} />
        <ScrollTop />
      </ThemeContextProvider>
      <Analytics />
    </>
  );
}

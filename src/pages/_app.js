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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeContextProvider>
        <Component {...pageProps} />
        <ScrollTop />
      </ThemeContextProvider>
      <Analytics />
    </>
  );
}

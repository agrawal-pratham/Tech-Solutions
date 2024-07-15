import { ThemeContextProvider } from "@/context/ThemeContext";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tech Solutions - Your Partner in Innovation</title>
        <meta
          name="description"
          content="Tech Solutions provides innovative solutions for your tech needs. From web development to AI, we've got you covered."
        />
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
      </ThemeContextProvider>
    </>
  );
}

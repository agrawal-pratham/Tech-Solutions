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
        <meta
          property="og:title"
          content="Tech Solutions - Your Partner in Innovation"
        />
        <meta
          property="og:description"
          content="Tech Solutions provides innovative solutions for your tech needs. From web development to AI, we've got you covered."
        />
        <meta
          property="og:image"
          content="https://solutions.agrawalpratham.in/og-image.jpg"
        />
        <meta property="og:url" content="https://solutions.agrawalpratham.in" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tech Solutions - Your Partner in Innovation"
        />
        <meta
          name="twitter:description"
          content="Tech Solutions provides innovative solutions for your tech needs. From web development to AI, we've got you covered."
        />
        <meta
          name="twitter:image"
          content="https://solutions.agrawalpratham.in/twitter-image.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  );
}

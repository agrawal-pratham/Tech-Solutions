import { ThemeContextProvider } from "@/context/ThemeContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeContextProvider>
        <Component {...pageProps} />;
      </ThemeContextProvider>
    </>
  );
}

import About from "@/components/Home/About/About";
import BrowserSupport from "@/components/Home/BrowserSupport/BrowserSupport";
import BuildTools from "@/components/Home/BuildTools/BuildTools";
import HappyClient from "@/components/Home/HappyClients/HappyClients";
import Header from "@/components/Home/Header/Header";
import Pricing from "@/components/Home/Pricing/Pricing";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Header />
      <BuildTools />
      <About />
      <BrowserSupport />
      <HappyClient />
      <Pricing />
    </main>
  );
}

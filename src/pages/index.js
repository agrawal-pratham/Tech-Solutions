import Header from "@/components/Header/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Header />
      <div className="h-80 border border-red-500 my-2"></div>
      <div className="h-80 border border-red-500 my-2"></div>
      <div className="h-80 border border-red-500 my-2"></div>
      <div className="h-80 border border-red-500 my-2"></div>
    </main>
  );
}

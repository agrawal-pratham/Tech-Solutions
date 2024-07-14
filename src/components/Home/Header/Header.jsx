import Navbar from "@/components/Shared/Navbar/Navbar";
import Hero from "../Hero/Hero";

export default function Header() {
  return (
    <section
      id="header"
      className="bg-bg_light dark:bg-bg_dark w-full md:h-[100vh]  xs:h-auto "
    >
      <Navbar />
      <Hero />
    </section>
  );
}

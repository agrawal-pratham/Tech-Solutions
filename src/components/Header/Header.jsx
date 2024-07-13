import Hero from "../Hero/Hero";
import Navbar from "../Shared/Navbar/Navbar";

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

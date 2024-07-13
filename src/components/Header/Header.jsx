import Hero from "../Hero/Hero";
import Navbar from "../Shared/Navbar/Navbar";

export default function Header() {
  return (
    <section
      id="header"
      className="bg-[#F3F1FF] dark:bg-[#4B5563] w-full md:h-[100vh]  xs:h-auto "
    >
      <Navbar />
      <Hero />
    </section>
  );
}

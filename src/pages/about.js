import CallToAction from "@/components/About/ContactUs";
import HeadlineIntro from "@/components/About/HeadlineIntro";
import OurStory from "@/components/About/OurStory";
import OurTeam from "@/components/About/OurTeam";
import ValuesMission from "@/components/About/Values";
import Footer from "@/components/Home/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Solutions by Pratham Agrawal</title>
        <meta
          name="description"
          content="Learn more about Solutions by Pratham Agrawal, our mission, our values, and the team that drives our success."
        />
        <meta
          name="keywords"
          content="Solutions by Pratham Agrawal, About Us, Web Development, Team, Mission, Values"
        />
        <meta
          property="og:title"
          content="About Us - Solutions by Pratham Agrawal"
        />
        <meta
          property="og:description"
          content="Discover Solutions by Pratham Agrawal, our story, mission, values, and meet the team behind our success."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://solutions.agrawalpratham.in/about"
        />
        {/* <meta property="og:image" content="/images/about-us.jpg" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us - Solutions by Pratham Agrawal"
        />
        <meta
          name="twitter:description"
          content="Learn more about Solutions by Pratham Agrawal, our mission, values, and the team behind our success."
        />
        <meta name="twitter:image" content="/images/about-us.jpg" />
        <link
          rel="canonical"
          href="https://solutions.agrawalpratham.in/about"
        />
      </Head>
      <Navbar />
      <div className="!snap-y snap-mandatory ">
        <HeadlineIntro />
        <OurStory />
        <OurTeam />
        <ValuesMission />
        <CallToAction />
      </div>
      <Footer />
    </>
  );
}

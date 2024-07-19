import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Shared/Navbar/Navbar';
import Footer from '@/components/Home/Footer/Footer';
import HeadlineIntro from '@/components/About/HeadlineIntro';
import OurStory from '@/components/About/OurStory';
import OurTeam from '@/components/About/OurTeam';
import ValuesMission from '@/components/About/Values';
import CallToAction from '@/components/About/ContactUs';

export default function About() {
    return (
        <>
            <Head>
                <title>About Us - Your Company Name</title>
                <meta name="description" content="Learn more about our company and mission." />
            </Head>
            <section
                className="md:pt-32 xs:pt-20 xs:pb-2  xs:h-auto ">
                <Navbar />

                <HeadlineIntro/>
                <OurStory/>
                <OurTeam/>
                <ValuesMission/>
                <CallToAction/>
                <Footer/>
            </section>
        </>
    );
}


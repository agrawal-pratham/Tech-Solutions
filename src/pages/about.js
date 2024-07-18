import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Shared/Navbar/Navbar';

export default function About() {
    return (
        <>
            <Head>
                <title>About Us - Your Company Name</title>
                <meta name="description" content="Learn more about our company and mission." />
            </Head>
            <section
                id="header"
                className="bg-bg_light dark:bg-bg_dark w-full "
            >
                <Navbar />

                <div className='text-white'>
                    <h1>About Us</h1>
                    <p>Tell the world about your amazing company or project here!</p>
                    {/* Add more content as needed */}
                </div>
            </section>
        </>
    );
}


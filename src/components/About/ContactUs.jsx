// components/CallToAction.js
import React from 'react';

const CallToAction = () => {
  return (
    <section className=" py-12 px-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
      <p className="text-lg text-center mb-8">We would love to hear from you! Whether you have a project in mind or just want to learn more about what we do, feel free to reach out. Let's build something great together.</p>
      <a href="mailto:contact@agrawalpratham.in" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-block mx-auto">Contact Us</a>
    </section>

  );
};

export default CallToAction;
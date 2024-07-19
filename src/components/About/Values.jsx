// components/ValuesMission.js
import React from 'react';

const ValuesMission = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <h2 className="text-3xl font-bold text-center  sm:text-4xl">Our Values and Mission</h2>
      <div className="mt-10 space-y-10">
      <div className="values">
          <h3 className="text-2xl font-bold ">Core Values</h3>
          <p className="mt-4 text-gray-600">
          <strong>Innovation</strong>: We are committed to staying at the cutting edge of technology, constantly exploring new ways to enhance our services.
        </p>
          <p className="mt-4 text-gray-600">
          <strong>Quality</strong>: Our focus is on delivering high-quality solutions that exceed client expectations.
        </p>
          <p className="mt-4 text-gray-600">
          <strong>Integrity</strong>: We believe in honesty, transparency, and building trust with our clients.
        </p>
      </div>
      <div className="mission">
          <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
          <p className="mt-4 text-gray-600">
          Our mission is to empower businesses by providing top-notch web development services that drive growth and success. We believe in the transformative power of the web and strive to make a positive impact on our clients and the world.
        </p>
        </div>
      </div>
    </section>

  );
};

export default ValuesMission;
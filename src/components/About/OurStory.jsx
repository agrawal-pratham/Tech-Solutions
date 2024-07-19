import React from 'react';

const OurStory = () => {
  return (
    <section className="our-story p-10">
      <h2 className="text-3xl font-bold mb-8">Our Story</h2>
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">The Beginning</h3>
        <p className="text-gray-600">
          Our journey started in 2020 when Pratham Agrawal identified a gap in the market for high-quality, user-centric web development services. Inspired by the potential of the web to transform businesses, Pratham set out to create a company that would not just meet but exceed client expectations. From humble beginnings, we have grown through dedication, hard work, and a relentless pursuit of excellence.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Milestones</h3>
        <ul className="list-disc list-inside">
          <li><strong>2020</strong>: Solutions was founded and launched its first client project, setting the standard for quality and innovation.</li>
          <li><strong>2021</strong>: Expanded our services to include comprehensive full-stack development, enhancing our ability to deliver complete web solutions.</li>
          <li><strong>2022</strong>: Reached a significant milestone by partnering with leading industry players, broadening our market presence.</li>
          <li><strong>2023</strong>: Launched our specialized service platform, solutions.agrawalpratham.in, to provide a seamless experience for our clients.</li>
        </ul>
      </div>
    </section>
  );
};

export default OurStory;

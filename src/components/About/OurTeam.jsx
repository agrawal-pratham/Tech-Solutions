import React from 'react';

const OurTeam = () => {
  return (
    <section className="meet-our-team p-10">
      <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
      <div className="team-member flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">Pratham Agrawal - Founder & Lead Developer</h3>
        <p className="text-gray-600 text-center">
          Pratham is the visionary behind Solutions, bringing his extensive experience and passion for web development to the forefront. He leads the team with a focus on innovation and excellence, ensuring every project aligns with our high standards.
        </p>
      </div>
      <div className="team-culture flex flex-col items-center mt-10">
        <h3 className="text-xl font-semibold mb-2">Team Culture</h3>
        <p className="text-gray-600 text-center">
          At Solutions, we foster a collaborative and inclusive environment where creativity and innovation thrive. Our team is a close-knit group of professionals who are dedicated to pushing the boundaries of what's possible in web development. We value diverse perspectives and believe that our collective expertise drives our success.
        </p>
      </div>
    </section>
  );
};

export default OurTeam;

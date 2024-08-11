const CoreServices = () => {
  return (
    <section className="core-services">
      <h2>Our Core Services</h2>
      <div className="service">
        <h3>Full-Stack Web Development</h3>
        <p>
          We build robust and scalable web applications tailored to your
          business needs. From frontend design to backend architecture, our
          full-stack development service ensures a seamless user experience.
        </p>
        <ul>
          <li>Frontend Development with React.js and Next.js</li>
          <li>Backend Development with Node.js, Express, and Firebase</li>
          <li>Database Management with Firebase, MongoDB, and SQL</li>
        </ul>
        <a href="/services/full-stack-web-development" className="cta-button">
          Learn More
        </a>
      </div>
      <div className="service">
        <h3>Custom Web Design</h3>
        <p>
          Stand out from the competition with a unique and visually stunning
          website. Our custom web design service focuses on creating designs
          that not only look great but also provide an exceptional user
          experience.
        </p>
        <ul>
          <li>Responsive Design for all devices</li>
          <li>User Experience (UX) Design</li>
          <li>Branding & Visual Identity</li>
        </ul>
        <a href="/services/custom-web-design" className="cta-button">
          Get a Quote
        </a>
      </div>
      <div className="service">
        <h3>E-Commerce Solutions</h3>
        <p>
          Transform your online store with our comprehensive e-commerce
          solutions. We help you set up, manage, and optimize your e-commerce
          platform for maximum sales and customer satisfaction.
        </p>
        <ul>
          <li>Customized E-Commerce Platforms</li>
          <li>Payment Gateway Integration</li>
          <li>Performance Optimization</li>
        </ul>
        <a href="/services/e-commerce-solutions" className="cta-button">
          Start Selling Online
        </a>
      </div>
    </section>
  );
};

export default CoreServices;

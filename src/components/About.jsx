
function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=900"
          alt="Students studying in a classroom"
        />

        <div className="experience-box">
          <h2>10+</h2>
          <p>Years of Learning Excellence</p>
        </div>
      </div>

      <div className="about-content">

        <span className="section-tag">
          ABOUT OUR PLATFORM
        </span>

        <h2>
          Education That Opens
          <span> New Possibilities.</span>
        </h2>

        <p>
          At EduConnect, we believe that learning should
          be simple, accessible and exciting.
        </p>

        <p>
          Our platform brings together expert instructors,
          practical courses and a supportive learning
          environment to help every student achieve
          their goals.
        </p>

        <div className="about-points">
          <p>✓ Learn from experienced instructors</p>
          <p>✓ Practical and career-focused courses</p>
          <p>✓ Learn anytime, anywhere</p>
        </div>

        <a href="#courses" className="primary-btn">
          Learn More →
        </a>

      </div>

    </section>
  );
}

export default About;


function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">
        <span className="hero-tag">
          ✦ YOUR JOURNEY STARTS HERE
        </span>

        <h1>
          Learn Something
          <br />
          <span>New Every Day.</span>
        </h1>

        <p>
          Discover new skills, explore your interests
          and learn from industry experts. Your future
          starts with the right knowledge.
        </p>

        <div className="hero-buttons">
          <a href="#courses" className="primary-btn">
            Explore Courses →
          </a>

          <a href="#about" className="text-btn">
            Discover More
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <h3>25K+</h3>
            <p>Happy Students</p>
          </div>

          <div>
            <h3>120+</h3>
            <p>Expert Courses</p>
          </div>

          <div>
            <h3>50+</h3>
            <p>Instructors</p>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000"
          alt="College students learning together"
        />

        <div className="image-note">
          <span>✦</span>
          <div>
            <strong>Learn at your pace</strong>
            <p>Build skills for your future</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;

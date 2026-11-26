
function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>edu<span>connect.</span></h2>

          <p>
            Making learning meaningful, accessible
            and inspiring for everyone.
          </p>

          <div className="social-links">
            <a href="https://instagram.com">Instagram</a>
            <a href="https://linkedin.com">LinkedIn</a>
            <a href="https://facebook.com">Facebook</a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#courses">Our Courses</a>
        </div>

        <div className="footer-links">
          <h3>Popular Courses</h3>
          <a href="#courses">Web Development</a>
          <a href="#courses">Python</a>
          <a href="#courses">UI/UX Design</a>
          <a href="#courses">Data Science</a>
        </div>

        <div className="footer-links">
          <h3>Contact</h3>
          <p>support@educonnect.com</p>
          <p>+91 98765 43210</p>
          <p>India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 EduConnect. All rights reserved.</p>
        <p>Designed for curious minds.</p>
      </div>

    </footer>
  );
}

export default Footer;

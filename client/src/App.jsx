
import './App.css';

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2 className="logo">Dhanushree.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <p className="intro">HELLO, I'M</p>

        <h1>
          Dhanushree
          <span>Full Stack Developer</span>
        </h1>

        <p className="description">
          I am a BTech AI and ML student learning
          full stack development and building
          projects to turn ideas into reality.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Projects
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;

import React, { useState, useEffect  } from "react";
import "./header.css"; // optional if you want to style it
type HeroProps = {
  image: string; // image is a string (URL or import)
  bannerText: string;
};

const Header: React.FC<HeroProps> = ({ image, bannerText }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${image})` }}
    >
      <header className={`overlay-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="brand-logo">
          <a href="/"><strong>Travel Americas</strong></a>
        </div>
        <nav className="main-nav">
          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
     ☰
          </button>
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li className="close-btn">
              <button onClick={closeMenu} aria-label="Close menu">✕</button>
            </li>
            <li><a href="/#major-cities">Major Cities</a></li>
            
          </ul>
        </nav>
      </header>

      <div className="hero-text">
        <h1>{bannerText}</h1>
      </div>
    </section>
  );
};

export default Header;

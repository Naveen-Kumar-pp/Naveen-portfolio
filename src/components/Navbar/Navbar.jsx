import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

  // Active navigation section
  const [activeSection, setActiveSection] = useState("");

  // Apply dark mode and save preference
  useEffect(() => {
    document.body.classList.toggle(
      "dark-mode",
      darkMode
    );

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  // Detect active section while scrolling
  useEffect(() => {
    function handleScroll() {
      const sections =
        document.querySelectorAll("main section");

      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop =
          section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    }

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // Toggle mobile menu
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  // Close mobile menu
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">

      <nav className="navbar">

        {/* Logo */}
        <a
          href="#hero"
          className="logo"
          onClick={closeMenu}
        >
          NK
        </a>

        {/* Navigation Links */}
        <ul
          className={`nav-links ${
            menuOpen ? "open" : ""
          }`}
        >

          <li>
            <a
              href="#about"
              className={
                activeSection === "about"
                  ? "active"
                  : ""
              }
              onClick={closeMenu}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={
                activeSection === "skills"
                  ? "active"
                  : ""
              }
              onClick={closeMenu}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={
                activeSection === "projects"
                  ? "active"
                  : ""
              }
              onClick={closeMenu}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={
                activeSection === "contact"
                  ? "active"
                  : ""
              }
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Navigation Actions */}
        <div className="nav-actions">

          {/* Dark Mode Button */}
          <button
            className="theme-toggle"
            onClick={() =>
              setDarkMode(!darkMode)
            }
            title="Toggle Dark Mode"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </nav>

    </header>
  );
}

export default Navbar;
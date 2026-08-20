import { useEffect, useState } from "react";
import "./Footer.css";

function Footer() {

  const [showScrollTop, setShowScrollTop] =
    useState(false);

  const [year] =
    useState(
      new Date().getFullYear()
    );

  useEffect(() => {

    function handleScroll() {

      setShowScrollTop(
        window.scrollY > 400
      );
    }

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);

  function scrollToTop() {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>

      <footer className="site-footer">

        <p>
          &copy; {year} Naveen Kumar.
          All rights reserved.
        </p>

        <nav aria-label="Social links">

          <a
            href="https://github.com/naveenkumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/naveen-goud-pp"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:naveengouda802@gmail.com">
            Email
          </a>

        </nav>

      </footer>

      <button
        className={`scroll-top ${
          showScrollTop ? "show" : ""
        }`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>

    </>
  );
}

export default Footer;
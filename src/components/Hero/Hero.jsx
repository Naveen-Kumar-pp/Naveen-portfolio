import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    function updateGreeting() {
      const hour = new Date().getHours();

      if (hour >= 5 && hour < 12) {
        setGreeting("Good Morning");
      } else if (hour >= 12 && hour < 17) {
        setGreeting("Good Afternoon");
      } else if (hour >= 17 && hour < 21) {
        setGreeting("Good Evening");
      } else {
        setGreeting("Good Night");
      }
    }

    updateGreeting();

    // Check the time every minute
    const timer = setInterval(
      updateGreeting,
      60000
    );

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section" id="hero">

      <div className="hero-content">

        <p className="welcome-text">
          Welcome to My Portfolio
        </p>

        <h1>
          {greeting}, I'm Naveen Kumar 👋
        </h1>

        <p className="tagline">
          I'm a passionate web developer from Bengaluru
        </p>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="hero-btn hero-btn-primary"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="hero-btn hero-btn-secondary"
          >
            Contact Me
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;
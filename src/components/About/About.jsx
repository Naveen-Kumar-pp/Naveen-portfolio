import "./About.css";

function About() {
  return (
    <section
      id="about"
      className="about-section"
    >
      <h2>About Me</h2>

      <div className="about-content">

        <figure>

          <img
            src="/my photo.jpeg"
            alt="Naveen Kumar"
            width="200"
            height="200"
          />

          <figcaption>
            Naveen Kumar - Web Developer
          </figcaption>

        </figure>

        <div className="about-text">

          <p>
            I love building things on the web.
            Currently learning HTML, CSS,
            JavaScript and React.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;
import { useEffect, useRef } from "react";
import "./Skills.css";

const skills = [
  {
    name: "HTML",
    level: 90,
  },
  {
    name: "CSS",
    level: 80,
  },
  {
    name: "JavaScript",
    level: 70,
  },
  {
    name: "React",
    level: 60,
  },
  {
    name: "Python",
    level: 80,
  },
];

function Skills() {
  const skillRefs = useRef([]);

  useEffect(() => {

    const observer =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              const progress =
                entry.target.querySelector(
                  ".skill-progress"
                );

              progress.style.width =
                `${entry.target.dataset.level}%`;

              observer.unobserve(
                entry.target
              );
            }
          });

        },
        {
          threshold: 0.3,
        }
      );

    skillRefs.current.forEach(
      (skill) => {

        if (skill) {
          observer.observe(skill);
        }

      }
    );

    return () => observer.disconnect();

  }, []);

  return (
    <section
      id="skills"
      className="skills-section"
    >

      <h2>My Skills</h2>

      <div className="skills-grid">

        {skills.map(
          (skill, index) => (

            <div
              className="skill-item"
              data-level={skill.level}
              ref={(element) =>
                (skillRefs.current[index] =
                  element)
              }
              key={skill.name}
            >

              <span>
                {skill.name}
              </span>

              <div className="skill-bar">

                <div className="skill-progress"></div>

              </div>

            </div>

          )
        )}

      </div>

    </section>
  );
}

export default Skills;
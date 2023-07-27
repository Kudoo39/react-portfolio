import React from "react";
import "./project.css";
import img1 from "../../assets/pro1.png";
import img2 from "../../assets/pro2.png";
import img3 from "../../assets/pro4.png";
import img4 from "../../assets/pro5.png";

const Project = () => {
  return (
    <section id="project">
      <h5>Projects I have done</h5>
      <h2>My Projects</h2>

      <div className="container project__container">
        <article className="project__item">
          <div className="project__item-image">
            <img src={img2} alt="Photo about the guessing number game" />
          </div>
          <h3>Guessing Number Machine</h3>
          <div className="project__item-cta">
            <a
              href="https://kudoo39.itch.io/guessing-number-game-v20"
              className="btn"
              target="_blank"
            >
              Demo
            </a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={img1} alt="Photo about the DeadSlayer game" />
          </div>
          <h3>The DeadSlayer</h3>
          <div className="project__item-cta">
            <a
              href="https://kudoo39.itch.io/the-deadslayer"
              className="btn"
              target="_blank"
            >
              Demo
            </a>
            <a
              href="https://github.com/Kudoo39/The-DeadSlayer"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={img3} alt="Photo about react-portfolio" />
          </div>
          <h3>Website Portfolio</h3>
          <div className="project__item-cta">
            <a
              href="https://kudoo39.github.io/react-portfolio/"
              className="btn"
              target="_blank"
            >
              Demo
            </a>
            <a
              href="https://github.com/Kudoo39/react-portfolio"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={img4} alt="Photo about Weather-app" />
          </div>
          <h3>Weather App</h3>
          <div className="project__item-cta">
            <a
              href="https://kudoo39.github.io/Weather-app/"
              className="btn"
              target="_blank"
            >
              Demo
            </a>
            <a
              href="https://github.com/Kudoo39/Weather-app"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Project;
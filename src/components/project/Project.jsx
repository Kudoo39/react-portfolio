import React from "react";
import "./project.css";
import img1 from "../../assets/pro1.png";
import img2 from "../../assets/pro2.png";
import img3 from "../../assets/pro4.png";
import img4 from "../../assets/pro8.png";
import img5 from "../../assets/pro6.png";
import img6 from "../../assets/pro7.png";

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
            <img src={img4} alt="Photo about Game Explorer" />
          </div>
          <h3>Game Explorer</h3>
          <div className="project__item-cta">
            <a
              href="https://kudoo39.github.io/clone-game-website/"
              className="btn"
              target="_blank"
            >
              Demo
            </a>
            <a
              href="https://github.com/Kudoo39/clone-game-website"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={img5} alt="Photo about calculator app" />
          </div>
          <h3>Calculator App</h3>
          <div className="project__item-cta">
            <a
              href="https://kudoo39.github.io/calculator-app/"
              className="btn"
              target="_blank"
            >
              Demo
            </a>
            <a
              href="https://github.com/Kudoo39/calculator-app"
              className="btn btn-primary"
              target="_blank"
            >
              Github
            </a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={img6} alt="Photo about todo-list app" />
          </div>
          <h3>Todo-list App</h3>
          <div className="project__item-cta">
            <a
              href="https://kudoo39.github.io/todo-list-app/"
              className="btn"
              target="_blank"
            >
              Demo
            </a>
            <a
              href="https://github.com/Kudoo39/todo-list-app"
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

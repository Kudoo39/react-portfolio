import React from 'react'
import './about.css'
import ME from '../../assets/Me2.png'
import { FiAward } from 'react-icons/fi'
import { AiOutlineCamera } from 'react-icons/ai'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Image about myself" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>Have been coding over a year</small>
            </article>

            <article className="about__card">
              <AiOutlineCamera className="about__icon" />
              <h5>Hobby</h5>
              <small>Coding, Listening to Music, Playing Piano</small>
            </article>

            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Projects</h5>
              <small>10+ projects completed</small>
            </article>
          </div>
          <p>
            Currently, I am a fourth-year student at XAMK. I have a solid foundation on IT. I am a motivated software
            developer with a strong background in front-end development and I would like to become a proficient
            full-stack web developer. I also have some basic knowledge about MVC. My hobbies are building websites and
            creating games using Unity
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}

export default About

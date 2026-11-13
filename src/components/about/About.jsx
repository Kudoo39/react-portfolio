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
              <h5>Current Work</h5>
              <small>Since AI & HEi BUDDii</small>
            </article>

            <article className="about__card">
              <AiOutlineCamera className="about__icon" />
              <h5>Focus</h5>
              <small>Full-stack web & mobile</small>
            </article>

            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Open Source</h5>
              <small>AI Shipcheck maintainer</small>
            </article>
          </div>
          <p>
            I'm a software developer based in Finland, building full-stack web and
            mobile applications. At Since AI, I contribute to the web platform and
            official website, and maintain AI Shipcheck. I'm also a Founding Engineer
            at HEi BUDDii, helping build and deliver a social networking platform.
            My main stack includes React, Next.js, TypeScript, Node.js, PostgreSQL,
            and MongoDB. My work also includes automated testing, CI/CD, and cloud
            deployment. In my spare time, I enjoy building websites and creating
            games with Unity.
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

import React from 'react'
import "./project.css"
import img1 from  '../../assets/pro1.png'
import img2 from  '../../assets/pro2.png'

const Project = () => {
  return (
    <section id='project'>
      <h5>Projects I have done</h5>
      <h2>My Projects</h2>

      <div className="container project__container">

        <article className='project__item'>
          <div className="project__item-image">
            <img src={img2} alt="Photo about guessing number game" />
          </div>
          <h3>Guessing Number Machine</h3>
          <div className="project__item-cta">
            <a href="https://kudoo39.itch.io/guessing-number-game-v20" className='btn' target='_blank'>Link</a>
          </div>
        </article>

        <article className='project__item'>
          <div className="project__item-image">
            <img src={img1} alt="Photo about DeadSlayer game" />
          </div>
          <h3>The DeadSlayer</h3>
          <div className="project__item-cta">
            <a href="https://kudoo39.itch.io/the-deadslayer" className='btn' target='_blank'>Link</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Project
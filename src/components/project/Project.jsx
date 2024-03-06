import React from 'react'
import './project.css'
import img1 from '../../assets/pro1.png'
import img2 from '../../assets/pro2.png'
import img3 from '../../assets/pro9.png'
import img4 from '../../assets/pro8.png'
import img5 from '../../assets/pro10.png'
import img7 from '../../assets/pro11.png'
import img8 from '../../assets/pro12.png'
import img9 from '../../assets/pro13.png'
import img10 from '../../assets/pro14.png'

const Project = () => {
  const projects = [
    {
      name: 'Guessing Number Machine',
      imgSrc: img2,
      alt: 'Photo about the guessing number game',
      demoLink: 'https://kudoo39.itch.io/guessing-number-game-v20'
    },
    {
      name: 'The DeadSlayer',
      imgSrc: img1,
      alt: 'Photo about the DeadSlayer game',
      demoLink: 'https://kudoo39.itch.io/the-deadslayer',
      githubLink: 'https://github.com/Kudoo39/The-DeadSlayer'
    },
    {
      name: 'Restaurant App',
      imgSrc: img3,
      alt: 'Photo about react-portfolio',
      demoLink: 'https://kudoo39.github.io/restaurant-app/',
      githubLink: 'https://github.com/Kudoo39/restaurant-app'
    },
    {
      name: 'Game Explorer',
      imgSrc: img4,
      alt: 'Photo about Game Explorer',
      demoLink: 'https://kudoo39.github.io/clone-game-website/',
      githubLink: 'https://github.com/Kudoo39/clone-game-website'
    },
    {
      name: 'AuthNodeJS',
      imgSrc: img5,
      alt: 'Photo about calculator app',
      demoLink: 'https://kudoo39-authentication.glitch.me/login',
      githubLink: 'https://github.com/Kudoo39/node-authentication'
    },
    {
      name: 'Trending Shop',
      imgSrc: img10,
      alt: 'Photo about Trending Shop',
      demoLink: 'https://trending-shop.netlify.app/',
      githubLink: 'https://github.com/Kudoo39/trending-shop'
    },
    {
      name: 'Breweries App',
      imgSrc: img7,
      alt: 'Photo about breweries app',
      demoLink: 'https://fs-breweries-app.netlify.app/',
      githubLink: 'https://github.com/Kudoo39/fs17-week3-React-public'
    },
    {
      name: 'Serenity Space',
      imgSrc: img8,
      alt: 'Photo about serenity space app',
      demoLink: 'https://serenity-space.netlify.app/',
      githubLink: 'https://github.com/Kudoo39/serenity-space'
    },
    {
      name: 'Coffee Page',
      imgSrc: img9,
      alt: 'Photo about coffee page',
      demoLink: 'https://coffee-styles.netlify.app/',
      githubLink: 'https://github.com/Kudoo39/coffee-page'
    }
  ]

  return (
    <section id="project">
      <h5>Projects I have done</h5>
      <h2>My Projects</h2>

      <div className="container project__container">
        {projects.map((project, index) => (
          <article className="project__item" key={index}>
            <div className="project__item-image">
              <img src={project.imgSrc} alt={project.alt} />
            </div>
            <h3>{project.name}</h3>
            <div className="project__item-cta">
              <a href={project.demoLink} className="btn" target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              {project.githubLink && (
                <a href={project.githubLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Project

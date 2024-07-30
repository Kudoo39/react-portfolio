import React from 'react'
import './project.css'
import img1 from '../../assets/projects/pro1.png'
import img2 from '../../assets/projects/pro2.png'
import img3 from '../../assets/projects/pro9.png'
import img4 from '../../assets/projects/pro8.png'
import img7 from '../../assets/projects/pro11.png'
import img8 from '../../assets/projects/pro12.png'
import img9 from '../../assets/projects/pro13.png'
import img10 from '../../assets/projects/pro14.png'
import img11 from '../../assets/projects/pro15.png'
import img12 from '../../assets/projects/pro16.png'

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
      name: 'The Trendy Store',
      imgSrc: img11,
      alt: 'Photo about The Trendy Store',
      demoLink: 'https://trendy-store.netlify.app/',
      githubLink: 'https://github.com/Kudoo39/the-trendy-store'
    },
    {
      name: 'Trending Shop',
      imgSrc: img10,
      alt: 'Photo about Trending Shop',
      demoLink: 'https://trending-shop.netlify.app/',
      githubLink: 'https://github.com/Kudoo39/trending-shop'
    },
    {
      name: 'Trello Project',
      imgSrc: img12,
      alt: 'Photo about trello app',
      demoLink: 'https://trelloproject.vercel.app/',
      githubLink: 'https://github.com/Kudoo39/trello-project'
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

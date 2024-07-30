import React from 'react'
import './experience.css'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { DiCss3, DiJavascript, DiMongodb } from 'react-icons/di'
import { SiReact, SiTypescript, SiExpress, SiNetlify, SiRedux, SiJest, SiSpring } from 'react-icons/si'
import { FaNodeJs, FaJava } from 'react-icons/fa'
import { IoMdGitBranch } from 'react-icons/io'
import { TbBrandVercel } from 'react-icons/tb'
import { VscGithub } from 'react-icons/vsc'

const frontendSkills = [
  { icon: <AiFillHtml5 className="experience__details-icon" />, name: 'HTML' },
  { icon: <DiCss3 className="experience__details-icon" />, name: 'CSS' },
  { icon: <DiJavascript className="experience__details-icon" />, name: 'JavaScript' },
  { icon: <SiTypescript className="experience__details-icon" />, name: 'TypeScript' },
  { icon: <SiReact className="experience__details-icon" />, name: 'React' },
  { icon: <SiRedux className="experience__details-icon" />, name: 'Redux' }
]

const backendSkills = [
  { icon: <FaNodeJs className="experience__details-icon" />, name: 'Node.js' },
  { icon: <SiExpress className="experience__details-icon" />, name: 'Express.js' },
  { icon: <DiMongodb className="experience__details-icon" />, name: 'MongoDB' },
  { icon: <FaJava className="experience__details-icon" />, name: 'Java' },
  { icon: <SiSpring className="experience__details-icon" />, name: 'Spring Boot' }
]

const deploymentSkills = [
  { icon: <SiNetlify className="experience__details-icon" />, name: 'Netlify' },
  { icon: <TbBrandVercel className="experience__details-icon" />, name: 'Vercel' },
  { icon: <VscGithub className="experience__details-icon" />, name: 'GitHub Pages' }
]

const otherSkills = [
  { icon: <IoMdGitBranch className="experience__details-icon" />, name: 'Git' },
  { icon: <AiFillGithub className="experience__details-icon" />, name: 'GitHub' },
  { icon: <SiJest className="experience__details-icon" />, name: 'Jest' }
]

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendSkills.map((skill, index) => (
              <article className="experience__details" key={index}>
                {skill.icon}
                <h4>{skill.name}</h4>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backendSkills.map((skill, index) => (
              <article className="experience__details" key={index}>
                {skill.icon}
                <h4>{skill.name}</h4>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__deployment_platforms">
          <h3>Deployment Platforms</h3>
          <div className="experience__content">
            {deploymentSkills.map((skill, index) => (
              <article className="experience__details" key={index}>
                {skill.icon}
                <h4>{skill.name}</h4>
              </article>
            ))}
          </div>
        </div>

        <div className="experience__others">
          <h3>Others</h3>
          <div className="experience__content">
            {otherSkills.map((skill, index) => (
              <article className="experience__details" key={index}>
                {skill.icon}
                <h4>{skill.name}</h4>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

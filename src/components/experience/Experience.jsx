import React from 'react'
import './experience.css'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import { DiCss3, DiJavascript, DiMongodb } from 'react-icons/di'
import { SiReact, SiTypescript, SiExpress, SiNetlify, SiTailwindcss } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { IoMdGitBranch } from 'react-icons/io'
import { TbBrandVercel } from 'react-icons/tb'
import { VscGithub } from 'react-icons/vsc'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <DiCss3 className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <DiJavascript className="experience__details-icon" />
              <h4>Javascript</h4>
            </article>
            <article className="experience__details">
              <SiTypescript className="experience__details-icon" />
              <h4>Typescript</h4>
            </article>
            <article className="experience__details">
              <SiReact className="experience__details-icon" />
              <h4>React</h4>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <h4>Node.js</h4>
            </article>
            <article className="experience__details">
              <SiExpress className="experience__details-icon" />
              <h4>Express.js</h4>
            </article>
            <article className="experience__details">
              <DiMongodb className="experience__details-icon" />
              <h4>MongoDB</h4>
            </article>
          </div>
        </div>

        <div className="experience__deployment_platforms">
          <h3>Deployment Platforms</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiNetlify className="experience__details-icon" />
              <h4>Netlify</h4>
            </article>
            <article className="experience__details">
              <TbBrandVercel className="experience__details-icon" />
              <h4>Vercel</h4>
            </article>
            <article className="experience__details">
              <VscGithub className="experience__details-icon" />
              <h4>GitHub Pages</h4>
            </article>
          </div>
        </div>

        <div className="experience__others">
          <h3>Others</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoMdGitBranch className="experience__details-icon" />
              <h4>Git</h4>
            </article>
            <article className="experience__details">
              <AiFillGithub className="experience__details-icon" />
              <h4>GitHub</h4>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <h4>TailwindCSS</h4>
            </article>
            <article className="experience__details">
              <h4>Material UI & Chakra UI</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

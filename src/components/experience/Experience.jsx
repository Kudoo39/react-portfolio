import React from 'react'
import "./experience.css"
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {DiJavascript} from 'react-icons/di'
import {DiBootstrap} from 'react-icons/di'
import {SiReact} from 'react-icons/si'
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {SiTypescript} from "react-icons/si"
import {FaNodeJs} from "react-icons/fa"
import {AiFillGithub} from 'react-icons/ai'
import {SiExpress} from "react-icons/si"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <h4>HTML</h4>
            </article>
            <article className='experience__details'>
              <DiCss3 className='experience__details-icon'/>
              <h4>CSS</h4>
            </article>
            <article className='experience__details'>
              <DiJavascript className='experience__details-icon'/>
              <h4>Javascript</h4>
            </article>
            <article className='experience__details'>
              <SiTypescript className='experience__details-icon'/>
              <h4>Typescript</h4>
            </article>
            <article className='experience__details'>
              <DiBootstrap className='experience__details-icon'/>
              <h4>Bootstrap</h4>
            </article>
            <article className='experience__details'>
              <SiReact className='experience__details-icon'/>
              <h4>ReactJS</h4>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon'/>
              <h4>NodeJS</h4>
            </article>
            <article className='experience__details'>
              <SiExpress className='experience__details-icon'/>
              <h4>Express</h4>
            </article>
            
          </div>
        </div>
        <div className="experience__backend">
          <h3>Others</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillGithub className='experience__details-icon'/>
              <h4>Github</h4>
            </article>
            <article className='experience__details'>
              <AiOutlineConsoleSql className='experience__details-icon'/>
              <h4>SQL</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
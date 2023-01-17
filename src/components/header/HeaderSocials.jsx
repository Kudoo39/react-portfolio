import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {FaItchIo} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/khang-nguyen3902/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Kudoo39/" target="_blank"><ImGithub/></a>
        <a href="https://kudoo39.itch.io/" target="_blank"><FaItchIo/></a>
    </div>
  )
}

export default HeaderSocials
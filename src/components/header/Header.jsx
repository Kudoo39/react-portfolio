import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Me.png'
import HeaderSocial from './HeaderSocials'

const Header = ({ switchTheme }) => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Khang Nguyen</h1>
        <h5 className="text-light">Aspiring Full-stack Developer</h5>
        <CTA></CTA>
        <HeaderSocial />

        <button className="me" onClick={switchTheme}>
          <img src={ME} alt="me" />
        </button>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header

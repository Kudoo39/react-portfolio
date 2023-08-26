import React from "react";
import "./footer.css";
import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { FaItchIo } from "react-icons/fa";
import LOGO from "../../assets/blacklogo.png";

const Footer = ({ switchTheme }) => {
  return (
    <footer>
      <div>
        <a href="#" className="footer__logo" onClick={switchTheme}>
          KHANG NGUYEN
        </a>
      </div>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a target="_blank" href="https://www.linkedin.com/in/khang-nguyen3902/">
          <GrLinkedinOption />
        </a>
        <a target="_blank" href="https://github.com/Kudoo39/">
          <AiFillGithub />
        </a>
        <a target="_blank" href="https://www.facebook.com/nguyenphu.duykhang">
          <ImFacebook />
        </a>
        <a target="_blank" href="https://www.instagram.com/dkhangg0309/">
          <BsInstagram />
        </a>
        <a target="_blank" href="https://kudoo39.itch.io/">
          <FaItchIo />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2023 - Khang Nguyen</small>
      </div>
    </footer>
  );
};

export default Footer;

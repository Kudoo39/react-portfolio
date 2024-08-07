import React from "react";
import "./footer.css";
import { SiLeetcode } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { FaItchIo } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/khang-nguyen3902/",
    icon: <GrLinkedinOption />,
    title: "LinkedIn"
  },
  {
    href: "https://github.com/Kudoo39/",
    icon: <AiFillGithub />,
    title: "GitHub"
  },
  {
    href: "https://leetcode.com/u/Kudoo39/",
    icon: <SiLeetcode />,
    title: "LeetCode"
  },
  {
    href: "https://kudoo39.itch.io/",
    icon: <FaItchIo />,
    title: "Itch.io"
  }
];

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
        {socialLinks.map((link, index) => (
          <Tooltip key={index} title={link.title}>
            <a target="_blank" rel="noopener noreferrer" href={link.href}>
              {link.icon}
            </a>
          </Tooltip>
        ))}
      </div>

      <div className="footer__copyright">
        <small>&copy; 2024 - Khang Nguyen</small>
      </div>
    </footer>
  );
};

export default Footer;

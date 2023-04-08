import React from 'react'
import './footer.css'
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        YD
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com/yuri_aaz" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://linkedin.com/in/yuri-diogo-az" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/YuriAz" target="_blank">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Yuri Diogo. All rights reserved.</small>
      </div>
    </footer>
  )
}

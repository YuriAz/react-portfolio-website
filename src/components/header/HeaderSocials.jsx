import React from 'react'
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.instagram.com/yuri_aaz/" target="_blank">
        <BsInstagram />
      </a>
      <a href="https://www.linkedin.com/in/yuri-diogo-az/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/YuriAz" target="_blank">
        <BsGithub />
      </a>
    </div>
  )
}

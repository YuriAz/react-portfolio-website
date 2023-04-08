import React from 'react'
import { CTA } from './CTA'
import ME from '../../assets/me.webp'
import { HeaderSocials } from './HeaderSocials'
import './header.css'

export const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Yuri Diogo</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}

import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocials'
// import Typical from 'react-typical'

const Header = () => {
  return (
    <header>
      <div className="container header__container"> 
      <h5>Hello I'm</h5>
      <h1>Micheal Iyanda</h1>
      <h5 className="text-light">Backend Developer</h5>
      {/* <h1>
        {" "}
        <Typical
        loop={Infinity}
        steps={[
          "Hello I'm", 1000,
          "Micheal Iyanda", 2000,
          "Backend Developer", 2000
        ]}
        />
      </h1> */}
      <CTA />
      <HeaderSocial/>

      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
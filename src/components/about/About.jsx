import React from 'react'
import './about.css'
import Me from '../../assets/me-about1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'> 
    <h5>Get to know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
      <div className="about__me-image">
        <img src={Me}alt="About Image" />
      </div>

      </div>
      <div className="about__content">
        <div className="about__cards">

          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>200+ </small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>3+ Years Working</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>20+ Completed</small>
          </article>
        </div>
        <p>
        Experienced Python and PHP Developer with a demonstrated history of working in the non-profit organization management industry. Skilled in PHP, laravel, Heroku, Python (Programming Language), WordPress, Bash, and Art. Currently Python Software Foundation Fellow, Strong business development professional with a HND focused in Computer Science.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
     </section>
  )
}

export default About
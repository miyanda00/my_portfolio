import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBookmarkStarFill} from 'react-icons/bs'
import {GiFiles} from 'react-icons/gi'
import {MdContactPage} from 'react-icons/md'
import{useState} from 'react'
// import AnimatedButton from 'react-animated-buttons'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      
      <a href="#" onClick={() =>setActiveNav('#')} className={activeNav ==='#' ? 'active' : ''}><ImHome /></a>
      
      <a href="#about" onClick={() =>setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() =>setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active' : ''}><BsBookmarkStarFill /></a>
      <a href="#porfolio" onClick={() =>setActiveNav('#porfolio')} className={activeNav ==='#porfolio' ? 'active' : ''}><GiFiles /></a>
      <a href="#contact" onClick={() =>setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><MdContactPage /></a>
    </nav>
  )
}

export default Nav
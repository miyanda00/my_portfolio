import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {DiGithubAlt} from 'react-icons/di'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedln.com" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com" target="_blank"><DiGithubAlt/></a>
        <a href="https://dribble.com" target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials

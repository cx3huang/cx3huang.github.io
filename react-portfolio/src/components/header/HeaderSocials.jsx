import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaMailBulk} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com' target="_blank"><FaGithub/></a>
        <a href='mailto:cx3huang@uwaterloo.ca' target="_blank"><FaMailBulk/></a>
    </div>
  )
}

export default HeaderSocials
import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaMailBulk} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Chelsea Huang</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://linkedin.com' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com' target="_blank"><FaGithub/></a>
        <a href='mailto:cx3huang@uwaterloo.ca' target="_blank"><FaMailBulk/></a>
        <a href='tel:+1778-773-4984' target="_blank"><BsFillTelephoneFill/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Chelsea Huang, 2023.</small>
      </div>
    </footer>
  )
}

export default Footer
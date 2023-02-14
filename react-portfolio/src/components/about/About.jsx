import React from 'react'
import './about.css'
import ME from '../../assets/fav.png'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FiAward className='about__icon' />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>
              {/* TODO: FIX THE CARD DESCRIPTIONS */}
              <article className='about__card'>
                <FiUsers className='about__icon' />
                <h5>Education</h5>
                <small>University of Waterloo</small>
              </article>
              <article className='about__card'>
                {/* TODO: FIX ICON */}
                <FiAward className='about__icon' />
                <h5>Projects</h5>
                <small>Numerous Personal Projects</small>
              </article>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A animi accusantium assumenda mollitia delectus cum accusamus odit minus blanditiis consequuntur voluptatem nisi nemo laudantium, quis eligendi ex, similique modi facere?
            </p>

            <a href='#contact' className='btn btn-primary'>Contact Me</a>
          </div>
        </div>
    </section>
  )
}

export default About
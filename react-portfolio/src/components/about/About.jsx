import React from 'react'
import './about.css'
import ME from '../../assets/profile.jpg'
import {MdWork} from 'react-icons/md'
import {MdSchool} from 'react-icons/md'
import {FaCat} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
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
                <MdSchool className='about__icon' />
                <h5>Education</h5>
                <small>ETH Zurich</small>
              </article>
              <article className='about__card'>
                <MdWork className='about__icon' />
                <h5>Experiences</h5>
                <small>Machine Learning & Research</small>
              </article>
              <article className='about__card'>
                <FaCat className='about__icon' />
                <h5>Interests</h5>
                <small>Cats, Puzzles, Snowboarding</small>
              </article>
            </div>

            <p>
              My name is Chelsea, currently a MSc EEIT student at ETH Zurich in the beautiful city of Zurich, Switzerland. I'm a passionate believer of lifelong learning and am super interested in a lot of STEM subjects and technologies. In my free time, I love visiting my friends' cats, exploring the surrounding areas with friends, and playing video games. 
            </p>
            <p>
              I attended the University of Waterloo for my undergraduate degree, earning a degree in Biomedical Engineering. While in Waterloo, I received the NSERC Undergraduate Student Research Award twice, as well as the Lau Engineering Scholarship, numerous program Top Student awards, and merit-based grants.
            </p>
            
            <a href='#contact' className='btn btn-primary'>Contact Me</a>
          </div>
        </div>
    </section>
  )
}

export default About
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
                <small>University of Waterloo</small>
              </article>
              <article className='about__card'>
                <MdWork className='about__icon' />
                <h5>Experiences</h5>
                <small>Software & Research</small>
              </article>
              <article className='about__card'>
                <FaCat className='about__icon' />
                <h5>Cat Lover</h5>
                <small>: 3</small>
              </article>
            </div>

            <p>
              My name is Chelsea, currently a Biomedical Engineering student in my 4A term at the University of Waterloo. I am passionate about a lot of STEM subjects and software technologies. In my free time, I love visiting my friends' cats, exploring new restaurants, and playing video games. 
            </p>
            <p>
              I previously received the Lau Engineering Scholarship, numerous program Top Student awards, and the NSERC USRA Award. My current GPA is 94.02%. Some courses I took recently include Pattern Recognition, Control Systems, and Digital Systems.
            </p>
            
            <a href='#contact' className='btn btn-primary'>Contact Me</a>
          </div>
        </div>
    </section>
  )
}

export default About
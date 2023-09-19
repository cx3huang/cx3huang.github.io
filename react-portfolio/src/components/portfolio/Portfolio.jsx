import React from 'react'
import './portfolio.css'
import PRJ1 from '../../assets/ultrasound_proj.png'
import PRJ2 from '../../assets/prosthetic.png'
import PRJ3 from '../../assets/rendered.gif'
import PRJ4 from '../../assets/sun_position.gif'
import PRJ5 from '../../assets/pantheon.png'
import PRJ6 from '../../assets/painproj.png'
import {FaCat} from 'react-icons/fa'

// const data = [
//   {
//     id: 1,
//     image: PRJ1,
//     title: 'Ultrasound Sensor',
//     github: 'https://github.com',
//     demo: 'https://github.com'
//   },
//   {
//     id: 2,
//     image: PRJ2,
//     title: 'Prosthetic Foot Model',
//     github: 'https://github.com',
//     demo: 'https://github.com'
//   },{
//     id: 3,
//     image: PRJ3,
//     title: 'Maskora',
//     github: 'https://github.com',
//     demo: 'https://github.com'
//   },{
//     id: 4,
//     image: PRJ4,
//     title: 'Exterior Lighting',
//     github: 'message',
//     demo: 'https://github.com'
//   },{
//     id: 5,
//     image: PRJ5,
//     title: 'Model of the Pantheon',
//     github: 'https://github.com',
//     demo: 'https://github.com'
//   },
// ]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My (Incomplete)</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={PRJ6} alt="Pain Detection Wireframe" />
          </div>
          <h3>Automatic Pain Detection in Infants</h3>
          <div className="portfolio__item-cta">
            <small>
              My fourth-year capstone project: Designing and building a stand-alone system for pain detection using computer vision and electrical sensors. We conducted feasibility analysis by meeting with relevant stakeholders, clarifying current protocol and pain points.
            </small>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={PRJ1} alt="Ultrasound Sensor" />
          </div>
          <h3>Ultrasound Sensor</h3>
          <div className="portfolio__item-cta">
            <small>
              Designed a system using Arduino and ultrasonic sensors to detect 1 of 3 hand gestures. Used piezoelectric ceramics to generate ultrasound waves for distance detection with ultrasonic sensors.
            </small>
            <a href='https://github.com/lisaxie31/386_project' className='btn btn-primary' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={PRJ2} alt="Prosthetic Foot Model" />
          </div>
          <h3>Prosthetic Foot Model</h3>
          <div className="portfolio__item-cta">
            <small>
              Modelled mechanical details of a prosthetic leg. Used plane modelling and references in SolidWorks to create the opening for the shank component of the prosthetic.
            </small>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={PRJ3} alt="Maskora" />
          </div>
          <h3>Maskora</h3>
          <div className="portfolio__item-cta">
            <small>
              A project developed at the UofT Designathon 2021. This design was prompted by a need to prevent glasses from fogging up while wearing a mask during COVID-19. Used Fusion 360 and SolidWorks to model and 3ds Max to render the GIF.
            </small>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={PRJ4} alt="Exterior Lighting" />
          </div>
          <h3>Exterior Lighting</h3>
          <div className="portfolio__item-cta">
            <small>
              Renders done in 3ds Max to experiment with different lighting tools. Used methods include skydome with HDRI images and sunlight positioner; the model was done in 3ds Max as well. This was an interesting project to explore the Arnold renderer specifically.
            </small>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={PRJ5} alt="Model of the Pantheon" />
          </div>
          <h3>Model of the Pantheon</h3>
          <div className="portfolio__item-cta">
            <small>
              A model of the Greek Pantheon done in SolidWorks, originally for a school project. Used typical modelling tools in SolidWorks, and the PhotoView360 Add-in to edit surface materials and produce a render.
            </small>
          </div>
        </article>
        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={PRJ6} alt="" />
          </div>
          <h3>Next Project In Progress...</h3>
        </article> */}
        {/* {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article  key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        } */}
      </div>
    </section>
  )
}

export default Portfolio
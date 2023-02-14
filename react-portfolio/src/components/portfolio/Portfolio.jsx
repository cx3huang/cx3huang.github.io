import React from 'react'
import './portfolio.css'
import PRJ1 from '../../assets/exterior_lighting_1.jpg'
import PRJ2 from '../../assets/exterior_lighting_2.jpg'
import PRJ3 from '../../assets/exterior_lighting_3.jpg'
import PRJ4 from '../../assets/exterior_lighting_4.jpg'

const data = [
  {
    id: 1,
    image: PRJ1,
    title: 'Exterior Lighting',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: PRJ2,
    title: 'Exterior Lighting',
    github: 'https://github.com',
    demo: 'https://github.com'
  },{
    id: 3,
    image: PRJ3,
    title: 'Exterior Lighting',
    github: 'https://github.com',
    demo: 'https://github.com'
  },{
    id: 4,
    image: PRJ4,
    title: 'Exterior Lighting',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      {/* TODO: ADD PORTFOLIO ITEMS */}
      <div className="container portfolio__container">
        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={PRJ1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href='http://github.com' className='btn' target='_blank'>Github</a>
            <a href='http://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}
        {
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
        }
      </div>
    </section>
  )
}

export default Portfolio
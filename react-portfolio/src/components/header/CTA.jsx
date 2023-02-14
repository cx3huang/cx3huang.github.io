import React from 'react'
/* TODO: ADD RESUME
import Resume from '../../assets/res.pdf' */

const CTA = () => {
  return (
    <div className='cta'>
        <a href='' className='btn'>My Resume</a>
        {/* <a href={Resume} download className='btn'>Download CV</a> */}
        <a href='#contact' className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA
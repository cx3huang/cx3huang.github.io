import React from 'react'
import Resume from '../../assets/resume_cxh.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>My Resume</a>
        <a href='#contact' className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA
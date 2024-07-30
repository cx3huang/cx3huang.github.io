import React from 'react'
import './experience.css'
import {BiData} from 'react-icons/bi'
import {AiFillRobot} from 'react-icons/ai'
import {AiFillCar} from 'react-icons/ai'
import {RiFlaskFill} from 'react-icons/ri'
import {GiLaserBurst} from 'react-icons/gi'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experiences</h2>

      <div className="container experience__container">
        <div className="photomedicine">
          <h3>Research & Development Co-op</h3>
          <h5>PhotoMedicine Labs</h5>
          <small>MAY - DEC 2023</small>
          <div className="experience__content">
            {/* TODO: CHECK THE VALUES */}
            <article className='experience__details'>
              <GiLaserBurst className='experience__details-icon' />
              <div>
                <p>
                  Designed and fine-tuned deep learning model parameters in PyTorch to improve registration accuracy by 50%. 
                </p>
              </div>
            </article>
            <article className='experience__details'>
              <GiLaserBurst className='experience__details-icon' />
              <div>
                <p>
                  Created and validated algorithm in Matlab to remove intensity artifacts, reduced error from 60% to 10%.
                </p>
              </div>
            </article>
            <article className='experience__details'>
              <GiLaserBurst className='experience__details-icon' />
              <div>
                <p>
                  Refactored black-box function calls in Python from >10 library files for efficiency, reducing runtime by ~2 hours.
                </p>
              </div>
            </article>
            <article className='experience__details'>
              <GiLaserBurst className='experience__details-icon' />
              <div>
                <p>
                  Processed large whole slide images (>3 GB) using OpenCV and scikit-image for stain-agnostic registration.
                </p>
              </div>
            </article>
            <article className='experience__details'>
              <GiLaserBurst className='experience__details-icon' />
              <div>
                <p>
                Conducted wet-lab experiments, in particular in vivo imaging with PARS technology and optical laser alignment.
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="nuralogix">
          <h3>Data Science Developer Co-op</h3>
          <h5>Nuralogix Corporation</h5>
          <small>MAY - AUG 2022, JAN - APR 2023</small>
          <div className="experience__content">
            {/* TODO: CHECK THE VALUES */}
            <article className='experience__details'>
              <BiData className='experience__details-icon' />
              <div>
                <p>
                  Developed and improved GAN model using Pytorch to increase accuracy of calculations by 60%. 
                </p>
              </div>
            </article>
            <article className='experience__details'>
              <BiData className='experience__details-icon' />
              <div>
                <p>
                  Utilized ML models with various methods (SVM, KNN) to improve video signal feature-labeling and analysis.
                </p>
              </div>
            </article>
            <article className='experience__details'>
              <BiData className='experience__details-icon' />
              <div>
                <p>
                  Extracted skin tone features from images in various colour spaces with OpenCV, using KMeans algorithm.
                </p>
              </div>
            </article>
            <article className='experience__details'>
              <BiData className='experience__details-icon' />
              <div>
                <p>
                  Provided prompt results to data cleaning and organizing tasks with automated scripts using pandas, NumPy.
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="microfluidics">
          <h3>Soft Robotics R&D Engineering</h3>
          <h5>Waterloo Microfluidics Lab</h5>
          <small>SEPT - DEC 2021</small>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillRobot className='experience__details-icon' />
              <div>
                <p>
                  Designed innovative soft robotics solutions to lymphedema using SolidWorks, Eagle, and AutoCAD. 
                </p>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillRobot className='experience__details-icon' />
              <div>
                <p>
                  Developed PCB designs and soldered components to allow for electrical testing of sensors and prototypes.
                </p>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillRobot className='experience__details-icon' />
              <div>
                <p>
                  Carried out iterative, comprehensive testing with hand-manufactured, high-fidelity prototypes in-lab.
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="ford">
          <h3>Software Development Co-op</h3>
          <h5>Ford Motor Company</h5>
          <small>MAY - AUG 2020, JAN - APR 2021</small>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCar className='experience__details-icon' />
              <div>
                <p>
                  Designed and demonstrated a native API using Franca IDL for list paging implemented in C/C++.
                </p>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCar className='experience__details-icon' />
              <div>
                <p>
                  Explored and developed a Python service using API generators for signal simulation in Unreal Engine.
                </p>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCar className='experience__details-icon' />
              <div>
                <p>
                  Assisted with unit test validation during project porting to AOSP by executing board bring-up and debug tasks.
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="igem">
          <h3>Math & Modelling Team Member</h3>
          <h5>Waterloo iGEM</h5>
          <small>FEB 2021 - SEPT 2022</small>
          <div className="experience__content">
            <article className='experience__details'>
              <RiFlaskFill className='experience__details-icon' />
              <div>
                <p>
                  Researched and gathered genes for glycolysis and oxidative metabolism in S. cerevisiae strains.
                </p>
              </div>
            </article>
            <article className='experience__details'>
              <RiFlaskFill className='experience__details-icon' />
              <div>
                <p>
                  Implemented and used yeast metabolic models, analyzed yeast flux model results.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
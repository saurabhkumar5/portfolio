import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>

      <div className='container experience_container'>
        <div className='experience_fronted'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>React Js</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Tailwind CSS</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Redux</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>
          </div>

        </div>

        <div className='experience_backend'>
        <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>NodeJs</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Express Js</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>MongoDb</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>MySql</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Websocket</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>
            {/* <article className='experience_details'>
              < BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article> */}
          </div>

        </div>

        <div className='experience_backend'>
        <h3>Tools And Software</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Docker</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Git</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Linux</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Vs Code</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Android Studio</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience_details'>
              < BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>IntelliJ Idea</h4>
              <small className='text-light'>Advanced</small>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
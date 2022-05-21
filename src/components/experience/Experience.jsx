import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {SiPython} from 'react-icons/si'
import {DiJavascript1} from 'react-icons/di'
import {DiHeroku} from 'react-icons/di'
import {DiLaravel} from 'react-icons/di'
import {DiPhp} from 'react-icons/di'
import {SiFlask} from 'react-icons/si'
import {SiJirasoftware} from 'react-icons/si'
import {SiTypescript} from 'react-icons/si'
import {SiAmazonaws} from 'react-icons/si'
import {SiDjango} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {GrWordpress} from 'react-icons/gr'
import {BsBootstrapFill} from 'react-icons/bs'
import {FaCss3} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {CgGoogle} from 'react-icons/cg'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skillz I Have</h5>
      <h2>TECHNOLOGIES/FRAMEWORK/PROCESSES</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          
          <div className="experience__content">
            <article className='experience__details'>
              <SiPython className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <DiPhp className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiFlask className='experience__details-icon'/>
              <div>
                <h4>Flask</h4>
                <small className='text-light'>Intermedite</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiDjango className='experience__details-icon'/>
              <div>
                <h4>Django</h4>
                <small className='text-light'>intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
            <DiLaravel className='experience__details-icon'/>
              <div>
                <h4>Laravel</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <DiJavascript1 className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiTypescript className='experience__details-icon'/>
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <GrWordpress className='experience__details-icon'/>
              <div>
                <h4>Wordpress</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsBootstrapFill className='experience__details-icon'/>
              <div>
                <h4>bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>


        <div className="experience__backend">
          <div className="experience__content">
              <article className='experience__details'>
                <SiMysql className='experience__details-icon'/>
                <div>
                  <h4>MYSQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Postgres</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Bash</h4>
                  <small className='text-light'>Intermedite</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Git</h4>
                  <small className='text-light'>intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Notion</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Docker</h4>
                  <small className='text-light'>Experienced</small> 
                </div>
              </article>

              <article className='experience__details'>
                <SiAmazonaws className='experience__details-icon'/>
                <div>
                  <h4>AWS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <CgGoogle className='experience__details-icon'/>
                <div>
                  <h4>GCP</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience__details'>
                <SiJirasoftware className='experience__details-icon'/>
                  <div>
                    <h4>Jira</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
              </article>

              <article className='experience__details'>
                <DiHeroku className='experience__details-icon'/>
                <div>
                  <h4>Heroku</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
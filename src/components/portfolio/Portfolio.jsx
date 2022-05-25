import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Pycon Nigeria 2019',
    github: 'https://github.com/miyanda2/pyconng-2019',
    demo: '#'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Http Transport',
    github: 'https://github.com/miyanda2/httpTransport',
    demo: '#'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Nigerian Institution of Mechanical Engineers',
    github: 'https://github.com/miyanda2/NIMechE',
    demo: 'https://nimechehq.org/'
  },
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo})=> {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
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
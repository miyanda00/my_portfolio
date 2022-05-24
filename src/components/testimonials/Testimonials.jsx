import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name:'The Python Software Foundation',
    review: 'He supported the Python ecosystem by being phenomenal leader, sustaining the growth of the Python scientific community, maintaining virtual Python communities, maintaining Python libraries, creating educational material, organizing Python events and conferences, starting Python communities in local regions, and overall being great mentors in our community. Each of them continues to help make Python more accessible around the world.',
    link: <button><a href="https://pyfound.blogspot.com/2021/10/announcing-python-software-foundation.html"></a></button>,
  },

  {
    avatar: AVTR2,
    name:'The Python Software Foundation',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasi, asperiores enim doloremque quam fugit ab tempora possimus illum at expedita placeat assumenda aut maiores, voluptate nemo explicabo? Sed, corporis.',
    link: "https://pyfound.blogspot.com/2021/10/announcing-python-software-foundation.html",
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h2>Mentions and Awards</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1} 
      pagination={{ clickable: true }}>
      {
        data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} />
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'> {review}</small>
              
          </SwiperSlide>
          )
        })
      } 
      </Swiper>
    </section>
  )
}

export default Testimonials
import React from 'react'
import { Layout } from 'ui/organisms/Layout/Layout'
import './about.scss';

export const AboutPage = () => {
  return (
    <Layout>
      <div className='about'>
        <div className='gallery'>
          <img className='gallery__img' src={require('./resources/5.jpeg')} alt='Photo 1'/>
          <div className='gallery__photos'>
            <img className='gallery__photos__img' src={require('./resources/2.jpeg')} alt='Photo 2'/>
            <img className='gallery__photos__img' src={require('./resources/3.jpeg')} alt='Photo 3'/>
            <img className='gallery__photos__img' src={require('./resources/4.jpeg')} alt='Photo 4'/>
            <img className='gallery__photos__img' src={require('./resources/1.jpeg')} alt='Photo 5'/>
          </div>
        </div>
        <div className='about-me'>
        <div className="about-me__p">
            I’m a graduate of  <span className="bold color-black">Computer Engineering </span>{' '}
            living currently in Cochabamba, Bolivia. Now I am taking courses to improve my knowledge, 
            I am also developing web pages for my portfolio.
          </div>

          <div className="about-me__p">
            I was introduced to computers from an early age and since then it
            became my passion. Being driven by curiosity, I got into design,
            programming and others IT areas that sparked my interest.
          </div>

          <div className="about-me__p">
            Moreover, there are a lot of things that I am passionate about, such
            as music, math, meditating, artificial intelligence, books, health &
            performance optimization ( and frankly optimization of any sort
            really ), photography, investing and personal development.
          </div>

          <div className="about-me__p">
            I think that anything can be achieved with hard work, perseverance,
            ambition & determination and I strongly believe that, on a personal
            level, change starts from within.
          </div>

          <div className="about-me__p">
            You can get in touch with me via{' '}
            <span className="bold color-black underline">email: andresiporre07@gmail.com</span> or on
            Linkedin at <span className="bold color-black">Andres Iporre</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

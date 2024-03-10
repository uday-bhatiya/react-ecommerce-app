import React from 'react'
import { Card, Banner } from '../components'
import { Banners, HeroServices, AboutText } from '../constant'
import { AboutPng, Video } from '../assests'

const About = () => {
  return (
    <main>
      <Banner banner={"aboutBanner"} bannerDetails={Banners.aboutBanner} />
      <section className='2xl:max-w-[1280px] mx-auto my-10 px-10 flex gap-3 flex-wrap items-center justify-between'>

       <div className='w-full h-min'>

       <div className='w-full flex items-center flex-col md:flex-row justify-between'>
          <div className="img w-full  md:w-[48%] h-full md:h-[80%]">
            <img className='w-full h-full object-cover' src={AboutPng} alt="about" />
          </div>

          <div className=' w-full md:w-[48%] h-[500px] md:h-[80%] flex flex-col gap-4 justify-center'>
            <h1 className='text-[50px]'>{AboutText.h1}</h1>
            <p className='text-[14px]'>{AboutText.p}</p>
            <span className='text-[13px] '>{AboutText.span}</span>
            <marquee className="text-[12px]  py-2 bg-slate-400" >{AboutText.movingText}</marquee>
          </div>

        </div>

        <div className=' w-full md:w-[800px] h-min  mx-auto'>
          <h2 className='text-center text-[60px] my-6'> Download Our App</h2>
          <div className='w-full h-[500px] mb-6 '>
            <video autoPlay muted loop className='w-full h-full object-cover rounded-[20px]' src={Video}></video>
          </div>
        </div>

       </div>


          {HeroServices.map((item, index) => (
            <Card key={index} img={item.img} text={item.text} btnColor={item.btnColor} />
          ))}

      </section>

    </main>
  )
}

export default About

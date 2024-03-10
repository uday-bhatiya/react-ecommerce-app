import React from 'react'
import { HeroBackground, Banner1 } from '../assests'
import { Headings, HeroServices, Banners, addsBanners } from '../constant'
import {Card,Banner,Product, AddsBanner, } from '../components'
const Hero = () => {
  return (
    <main className='w-full'>
      <section className='bg-[#E3E6F3]'>
        <div style={{ backgroundImage: `url(${HeroBackground})` }} className=' bg-cover sm:bg-center md:bg-right bg-[#E3E6F3] 2xl:max-w-[1280px] mx-auto px-10'>

          <div className=' mx-auto w-full h-screen flex flex-col items-start justify-center'>
            <h6 className='text-[20px] font-[400]'>Trad-if-offer</h6>
            <h4 className='text-[50px] font-[600]'>Super value deals</h4>
            <h4 className='text-[50px] font-[600] text-[#0A8271] leading-9 pb-4'>On all products</h4>
            <p className='text-[#465B52]'>Save more with coupons & up to 70% off!</p>
          </div>

        </div>
      </section>
      <section className='2xl:max-w-[1280px] mx-auto px-10 flex items-center justify-center gap-8 my-10 flex-wrap'>
        {
          HeroServices.map((item, index) => (
            <Card key={index} img={item.img} text={item.text} btnColor={item.btnColor} />
          ))
        }
      </section>

      <section className='2xl:max-w-[1280px] mx-auto px-10 '>

        <div className="heading flex flex-col items-center justify-center py-4 mb-4">
          <h4 className='text-5xl font-[600] text-center'>{Headings.Featured.heading}</h4>
          <p className='text-[15px] font-[400] text-[#465B52]'>{Headings.Featured.subHeading}</p>
        </div>

        <div className='flex items-center justify-evenly flex-wrap'>
          <Product/>
        </div>
      </section>
      <Banner banner={"homeBanner"} bannerDetails={Banners.homeBanner} />

      <section className='2xl:max-w-[1280px] mx-auto px-10'>
      <div className="heading flex flex-col items-center justify-center py-4 mb-4">
          <h4 className='text-[50px] font-[600]'>{Headings.Arrivals.heading}</h4>
          <p className='text-[15px] font-[400] text-[#465B52]'>{Headings.Arrivals.subHeading}</p>
        </div>
        <div className='flex items-center justify-evenly flex-wrap'>
          <Product/>
        </div>
      </section>

      <section  className='2xl:max-w-[1280px] mx-auto  w-full h-min m-2 px-10 ' >

          <div className='w-full flex flex-wrap justify-center lg:justify-between p-2'>
            {addsBanners.Banner1.map((item, index) => (
              <AddsBanner bannerImg={item.bannerImg} key={index} tag={item.heading1} heading={item.heading2} subHeading={item.heading3} width={item.width} height={item.height} />
            ))}
          </div>

          <div className='w-full flex flex-wrap justify-center md:justify-between p-2' >
            {addsBanners.Banner2.map((item, index) => (
              <AddsBanner bannerImg={item.bannerImg}  key={index} heading={item.heading} subHeading={item.subHeading} width={item.width} height={item.height}/>
            ))}
          </div>
        </section>
    </main>
  )
}

export default Hero


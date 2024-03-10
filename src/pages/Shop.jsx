import React from 'react'
import {Banner, Product} from '../components'
import { Banners, Headings } from '../constant'

const Shop = () => {
  return (
    <main className='w-full h-min' >
      <Banner banner={"shopBanner"} bannerDetails={Banners.shopBanner} />

      <section className='2xl:max-w-[1280px] mx-auto my-4 px-10  w-full h-min'>
      <div className="heading flex flex-col items-center justify-center py-4 mb-4">
          <h4 className='text-6xl text-center font-[600]'>{Headings.Featured.heading}</h4>
          <p className='text-[15px] font-[400] text-[#465B52]'>{Headings.Featured.subHeading}</p>
        </div>
          <div className='flex items-center justify-evenly flex-wrap'>
          <Product/>
          </div>
        </section>
    </main>
  )
}

export default Shop

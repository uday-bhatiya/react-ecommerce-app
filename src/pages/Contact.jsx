// import React from 'react'
import { Banner, GoogleMap } from '../components'
import { Banners, ContactStuff } from '../constant'
import { CiMail, CiMap, CiPhone, CiTimer,  } from "react-icons/ci";

const Contact = () => {
  return (
    <main className='w-full h-min'>
      <Banner banner={"contactBanner"} bannerDetails={Banners.contactBanner} />

      <section className='2xl:max-w-[1280px]  md:px-10  mx-auto my-4  w-full h-min px-2'>
        <div className='w-full flex flex-col md:flex-row justify-between items-center md:items-start'>

          <div className='w-full md:w-[48%] my-10'>
            <h4 className='text-slate-400'>{ContactStuff.text1.h4}</h4>
            <h3 className='text-3xl font-medium my-5'>{ContactStuff.text1.h3}</h3>
            <h5 className='font-medium my-2'>{ContactStuff.text1.h5}</h5>

            <div className='flex items-center gap-2'>
            <CiMap /> <p className='text-sm my-1'>{ContactStuff.contactInfo.address}</p>
            </div>
            <div className='flex items-center gap-2'>
            <CiMail /> <p className='text-sm my-1'>{ContactStuff.contactInfo.mail}</p>
            </div>
            <div className='flex items-center gap-2'>
            <CiPhone /><p className='text-sm my-1'>{ContactStuff.contactInfo.phone}</p>
            </div>

            <div className='flex items-center gap-2'>
            <CiTimer /><p className='text-sm my-1'>{ContactStuff.contactInfo.time}</p>
            </div>
          </div>

          <div className='w-full md:w-[48%] h-[40vh] my-5'>
            <GoogleMap />
          </div>
        </div>
      </section>

      <section className='2xl:max-w-[1280px] h-min my-4 w-full border-2 border-zinc-500 rounded-[30px] mx-auto px-2'>

        <div className='w-full p-4 items-center md:flex justify-evenly'>
          <div className=' w-full md:w-[48%] flex flex-col gap-5 p-3'>
            <h4>{ContactStuff.text2.h4}</h4>
            <h3>{ContactStuff.text2.h3}</h3>
            <input className='outline outline-1 rounded-md p-2' type="text" placeholder='Your Name' />
            <input className='outline outline-1 rounded p-2' type="email" placeholder='example@gmail.com' />
            <input className='outline outline-1 rounded p-2' type="text" placeholder='Subject' />
            <textarea className='outline outline-1 rounded-md p-2 resize-none' placeholder='Your Message' cols="30" rows="10"></textarea>
          </div>
          <div className=' w-full md:w-[48%] h-min'>
            {ContactStuff.workers.map((item, index) => (
              <div key={index} className='flex gap-5 justify-start lg:justify-end lg:pr-20'>
                <div className='w-24 h-24 bg-red-300 rounded-[50%] items-center flex justify-center'>
                  <img className='w-full h-full object-cover' src={item.img} alt="peapleImg" />
                </div>
                <div className='flex flex-col my-4'>
                  <h3 className='font-semibold'>{item.name}</h3>
                  <span className='text-sm'>{item.post}</span>
                  <span className='text-sm'>{item.phone}</span>
                  <span className='text-sm'>{item.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </main>
  )
}

export default Contact


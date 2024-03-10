import React from 'react'
import {Banner} from '../components'
import {Banners, Blogs} from '../constant'

const Blog = () => {
  return (
    <main className='w-full h-min' >
    <Banner banner={"blogBanner"} bannerDetails={Banners.blogBanner} />

    <section className='2xl:max-w-[1280px] mx-auto my-4  w-full h-min px-10'>
       <div className="blogContainer flex flex-col gap-5 my-20">

       {Blogs.map((blog, index) => (
         <div key={index} className="blog flex justify-between  flex-col md:flex-row relative my-10">
         <div style={{backgroundImage: `url(${blog.blogImg})`}} className="blogImg object-contain bg-cover w-[450px] h-[250px] z-10">
         </div>
         <div className="blogText w-full md:w-[60%] flex place-items-start justify-center flex-col">
         <h4 className='mb-5 capitalize text-[20px] font-[600] ml-2 w-full'>{blog.h4}</h4>
         <p className='text-[15px] ml-2'>{blog.p}</p>
         </div>
         <h2 className='text-[75px] text-[#C9CBCE] font-[800] absolute top-[-20%]  md:top-[-30%] z-0 ' >{blog.h2}</h2>
       </div> 
       ))}
        
       </div>
      </section>
  </main>
  )
}

export default Blog
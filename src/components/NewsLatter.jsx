import React from 'react'

const NewsLatter = () => {
  return (
    <div id='NewsLatter' className='w-full h-min md:h-[150px]'>
      <div className='2xl:max-w-[1280px] px-10 w-full h-full mx-auto flex flex-col my-5 py-2 text-center md:flex-row md:text-start items-center justify-between'>

        <div className='py-2'>
          <h3 className='text-[25px] font-[800] text-white'>
            Sing Up For Newsletters
          </h3>
          <p className='text-[#818EA0] text-[15px] font-[600]'>Get E-mail updates about our latest shop and <span className='text-[#FFBD27]'>Special Offers.</span> </p>
        </div>

        <div className='py-2'>
          <input className='outline-none py-1 px-4 rounded-tl-md rounded-bl-md' type="text" placeholder='Your Email Address' />
          <button className='outline-none py-1 px-4 rounded-br-md rounded-tr-md bg-[#088178] text-white font-[600]'>Sing Up</button>
        </div>

      </div>
    </div>
  )
}

export default NewsLatter

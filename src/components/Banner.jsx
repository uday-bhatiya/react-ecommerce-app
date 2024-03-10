import React from 'react'

const Banner = ({banner, bannerDetails}) => {
  return (
    <div  className={`${banner} w-full h-[260px] bg-red-600 flex items-center justify-center flex-col text-center`}>
      <p className='text-white text-[15px] font-[800]'>{bannerDetails.text}</p>
      <h3 className='text-[40px] text-white font-[600]'>{bannerDetails.heading}</h3>
      <span className='text-white text-[15px] font-[800]'>{bannerDetails.subHeading}</span>
    </div>
  )
}

export default Banner

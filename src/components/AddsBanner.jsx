import React from 'react'

const AddsBanner = ({tag, heading, subHeading, width, height, bannerImg}) => {
  return (
    <div style={{backgroundImage: `url(${bannerImg})`}} className={`bg-cover object-center p-4 text-white mb-2 flex items-start justify-center flex-col ${width} ${height}`}>
      <span className='text-[15px] font-[200]'>{tag}</span>
      <h3 className='text-[20px] font-[600]'>{heading}</h3>
      <p className='text-[14px] font-[200]'>{subHeading}</p>
    </div>
  )
}

export default AddsBanner


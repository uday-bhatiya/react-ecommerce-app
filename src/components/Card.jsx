import React from 'react'

const Card = ({img, text, btnColor}) => {
  return (
    <div className='w-[170px] h-[220px] p-4 flex flex-col justify-between border border-zinc-300 shadow-md'>
      <div className=' w-full h-[70%]'>
      <img className='w-full h-full object-cover' src={img} alt="service image" />
      </div>
      <h4 style={{backgroundColor: btnColor}} className='px-4 py-2 text-center text-[13px] font-[600] rounded-[8px] text-[#088178]'>{text}</h4>
    </div>
  )
}

export default Card


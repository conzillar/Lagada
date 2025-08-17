import React from 'react'

export default function Nextpage() {
  return (
    <div className='flex px-[20px] md:px-[20px] bg-amber-100 py-[40px]'>
      <div className='w-[60%]'>
        <img src="laga.jpg" alt="" className='hidden md:flex w-[45%] h-[300px] object-cover ml-[6rem]' />
      </div>
      <div className='md:w-[30%]'>
        <div className='ml-[-8rem] md:ml-[-16rem]'>
          <p className='text-[30px] ml-[1rem] font-[500] font-syne'>The Lagada Experience<hr className='w-[51%]' /></p>
          <div className='flex gap-[0.5rem] mt-[2rem]'>
            <h1 className=' text-[40px] md:text-[50px] font-[600] text-amber-900 font-Cormorant'>Glow.. </h1>
            <h2 className=' text-[40px] md:text-[50px] font-[600] text-amber-900 font-Cormorant'>Naturally..</h2>
            <h3 className=' text-[40px] md:text-[50px] font-[600] text-amber-900 font-Cormorant'>Luxuriously.</h3>
          </div>
          <p className='md:leading-[30px] tracking-[1px] font-[600] font-roboto mb-[2rem]'>Our innovative skincare line leverages cutting-edge green science and premium ingredients to enhance your natural aura.</p>
        </div>
        <button className='px-[55px] ml-[-7.7rem] mt-[0.5rem] md:ml-[-16rem] py-[7px] border hover:border-amber-800 rounded-full text-[20px] font-[500] font-syne bg-amber-900 hover:bg-white/100 hover:text-black text-white transition duration-500 hover:scale-105'>Explore lagada</button>
      </div>
    </div>
  )
}

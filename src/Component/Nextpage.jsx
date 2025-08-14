import React from 'react'

export default function Nextpage() {
  return (
    <div className='flex px-[150px] bg-amber-50 py-[50px]'>
      <div className='w-[60%]'>
        <img src="laga.jpg" alt="" className='w-[55%] h-[500px] object-cover ml-[6rem]' />
      </div>
      <div className='w-[30%] text-center '>
        <div className='ml-[-5rem]'>
          <p className='text-[20px] font-[500] font-roboto'>The Lagada Experience</p>
          <h1 className='text-[60px] font-[600] text-amber-900 font-Cormorant'>Glow.</h1>
          <h2 className='text-[60px] font-[600] text-amber-900 font-Cormorant'>Naturally.</h2>
                          {/* <h1 className='text-red-700 font-[500]'>+234 7058133544</h1> */}
          <h3 className='text-[60px] font-[600] text-amber-900 font-Cormorant'>Luxuriously.</h3>
          <p className='leading-[30px] tracking-[1px] font-roboto mb-[1rem]'>Our innovative skincare line leverages cutting-edge green science and premium ingredients to enhance your natural aura.</p></div>
        <button className='px-[15px] ml-[-3rem] py-[7px] border border-amber-800 rounded-full text-[17px] font-[500] font-syne hover:bg-amber-900 hover:text-white transition duration-500 hover:scale-105'>Explore lagada</button>
      </div>
    </div>
  )
}

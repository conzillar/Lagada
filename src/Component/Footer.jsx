import React from 'react'

export default function Footer() {
  return (
    <div className='foot px-[20px] py-[30px] md:px-[48px] md:py-[40px] overflow-hidden'>
      <div className='md:flex justify-between items-center '>
        <div className='md:w-[50%] md:mt-[-3rem] '>
          <h1 className='text-[20px] text-white/100 font-[600] font-syne'>Lagada</h1>
          <p className='text-white/100 text-[14.5px] w-[74%] md:text-[17px] font-[400]'>Our innovative skincare leverages cutting-edge green science and premium ingredients to enhance your natural aura</p>
          <p className='text-whit'>&copy; <span className='text-white text-[15px] font-[500] font-syne'>2025 Lagada. All Right Reserved.</span></p>
        </div>
        <div className=' flex flex-col ml-[-10rem] mt-[-2rem]'>
          <div>
            <h1 className='text-[19px] font-[500] text-white fomt-syne'>Quick Links</h1>
          </div>
          <a href="" className='text-white text-[17px] font-syne'>Home</a>
          <a href="" className='text-white text-[17px] font-syne'>About</a>
          <a href="" className='text-white text-[17px] font-syne'>Privacy Policy</a>
        </div>
        <div className='md:flex gap-[2rem] mt-[-2.3rem]'>
          <div>
            <h1 className='text-[20px] text-white/100 font-[500] font-syne'>Contact Us</h1>
            <p className='text-[17px] text-white font-[500] font-syne'>Have questions & suggestions?</p>
            {/* <p className='text-[17px] text-white font-[500] font-syne'>Need assistance?</p> */}
            <p className='text-[17px] text-white font-[500] font-syne'>Give Us Call: +7058133544</p>
          </div>
        </div>
      </div>
    </div>
  )
}

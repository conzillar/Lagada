import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


export default function Categories() {
    return (
        <div className='px-[20px] md:px-[50px] py-[10px]'>
            <h1 className='text-[30px] md:text-[50px] font-[500] font-syne mb-[1rem] text-amber-800'> Categories</h1>
            <div className=''>
                <div className='md:flex gap-[1rem] mb-[1rem]'>
                    <div className='lag relative overflow-hidden mb-[2rem]'>
                        <div className='hover:scale-105  transition duration-300 overflow-hidden' >
                            <img src="zc-stock-images-02.webp" alt="" className='w-full' />
                        </div>
                        <div className=' absolute left-0 botton-0 right-0 px-[20px] py-[22px] w-full z-10 mt-[-4.5rem] bg-white/40 backdrop-blur-3xl flex items-center'>
                            <h1 className='text-[23px] text-amber-100 font-[500] font-syne'>Costmetics </h1>
                            <GoArrowUpRight className='text-[28px] font-[600] text-amber-100' />
                        </div>
                    </div>
                    <div className='lag relative overflow-hidden mb-[2rem]'>
                        <div className='hover:scale-105  transition duration-300 overflow-hidden' >
                            <img src="wip.webp" alt="" className='w-full' />
                        </div>
                        <div className=' absolute left-0 botton-0 right-0 px-[20px] py-[22px] w-full z-10 mt-[-4.5rem] bg-white/40 backdrop-blur-3xl flex items-center'>
                            <h1 className='text-[23px] text-amber-100 font-[500] font-syne'>Skin Care </h1>
                            <GoArrowUpRight className='text-[28px] font-[600] text-amber-100' />
                        </div>
                    </div>
                    <div className='lag relative overflow-hidden mb-[2rem]'>
                        <div className='hover:scale-105  transition duration-300 overflow-hidden' >
                            <img src="wip.webp" alt="" className='w-full' />
                        </div>
                        <div className=' absolute left-0 botton-0 right-0 px-[20px] py-[22px] w-full z-10 mt-[-4.5rem] bg-white/40 backdrop-blur-3xl flex items-center'>
                            <h1 className='text-[23px] text-amber-100 font-[500] font-syne'>Body Care </h1>
                            <GoArrowUpRight className='text-[28px] font-[600] text-amber-100' />
                        </div>
                    </div>
                    <div className='lag relative overflow-hidden mb-[2rem]'>
                        <div className='hover:scale-105  transition duration-300 overflow-hidden' >
                            <img src="wipp.webp" alt="" className='w-full' />
                        </div>
                        <div className=' absolute left-0 botton-0 right-0 px-[20px] py-[22px] w-full z-10 mt-[-4.5rem] bg-white/40 backdrop-blur-3xl flex items-center'>
                            <h1 className='text-[23px] text-amber-100 font-[500] font-syne'>Hair Care </h1>
                            <GoArrowUpRight className='text-[28px] font-[600] text-amber-100' />
                        </div>
                    </div>
                    <div className='lag relative overflow-hidden mb-[2rem]'>
                        <div className='hover:scale-105  transition duration-300 overflow-hidden' >
                            <img src="wipp.webp" alt="" className='w-full' />
                        </div>
                        <div className=' absolute left-0 botton-0 right-0 px-[20px] py-[22px] w-full z-10 mt-[-4.5rem] bg-white/40 backdrop-blur-3xl flex items-center'>
                            <h1 className='text-[23px] text-amber-100 font-[500] font-syne'>Sex Toys </h1>
                            <GoArrowUpRight className='text-[28px] font-[600] text-amber-100' />
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

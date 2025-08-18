import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { RiMenuFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";

export default function Home() {
    return (
        <div className='laga relative py-[10px] px-[20px] md:px-[30px]'>
            <div className="relative z-10 flex items-center justify-between md:w-[90%] h-[60px] mx-auto mt-8 px-5 md:px-10 py-2.5 bg-gray-100/30 backdrop-blur-sm rounded-full shadow-lg">
                <div>
                    <h1 className="text-[35px] font-bold font-syne text-amber-950">Lagada</h1>
                </div>
                <nav className='hidden md:flex'>
                    <ul className="flex space-x-6">
                        <li className="text-amber-950 hover:text-amber-800 font-[500] text-[17px] transition-colors font-roboto">Home</li>
                       <div className='flex items-center gap-[0.4rem]'>
                         <li className="text-amber-950 hover:text-amber-800 font-[500] text-[17px] transition-colors font-roboto">Categories </li>
                         <IoIosArrowDown className='text-[17px]  mt-[0.3rem]' />
                       </div>
                        <li className="text-amber-950 hover:text-amber-800 font-[500] text-[17px] transition-colors font-roboto">Glow Naturally</li>
                    </ul>
                </nav>
                <div className="hidden md:flex items-center gap-1 md:gap-6">
                    <CiSearch className="text-amber-950 text-xl cursor-pointer" />
                    <IoCartOutline className="text-amber-950 text-xl cursor-pointer" />
                    <IoMdContact className="text-amber-950 text-xl cursor-pointer" />
                </div>
                 <RiMenuFill className='md:hidden text-[25px]' />
            </div>
            <div className='mt-[9rem] md:mt-[5rem] ml-[1rem] md:ml-[4rem] md:w-[40%]'>
                <h1 className='text-[30px] md:text-[60px] md:leading-[80px] font-[500] text-amber-500 md:text-amber-900 tracking-[0px] font-syne '>Embrace Your Inner Glow</h1>
                <p className='text-[16px] font-[600] md:text-[18px] md:text-black text-amber-500 tracking-[px] md:font-[500] mb-[1rem] '>Introducing Lagada: Elegance in Every Drop</p>
                <button className='px-[30px] py-[8px] text-[17px] hover:bg-white/100 hover:scale-105 transition duration-300 cursor-pointer  font-[600] text-[#fff] hover:text-black bg-amber-800 rounded-full font-syne'>Shop Lagada Collection</button>
            </div>
            {/* <button></button> */}
        </div>
    )
}

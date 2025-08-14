import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";

export default function Home() {
    return (
        <div className='laga relative py-[10px] px-[50px]'>
            <div className="relative z-10 flex items-center justify-between w-[90%] h-[60px] mx-auto mt-8 px-10 py-2.5 bg-gray-100/30 backdrop-blur-sm rounded-full shadow-lg">
                <div>
                    <h1 className="text-xl font-bold font-syne text-amber-950">Lagada</h1>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li className="text-amber-950 hover:text-amber-800 font-[500] text-[17px] transition-colors font-roboto">Home</li>
                       <div className='flex items-center gap-[0.4rem]'>
                         <li className="text-amber-950 hover:text-amber-800 font-[500] text-[17px] transition-colors font-roboto">Categories </li>
                         <IoIosArrowDown className='text-[17px]  mt-[0.3rem]' />
                       </div>
                        <li className="text-amber-950 hover:text-amber-800 font-[500] text-[17px] transition-colors font-roboto">Glow Naturally</li>
                    </ul>
                </nav>
                <div className="flex items-center gap-6">
                    <CiSearch className="text-amber-950 text-xl cursor-pointer" />
                    <IoCartOutline className="text-amber-950 text-xl cursor-pointer" />
                    <IoMdContact className="text-amber-950 text-xl cursor-pointer" />
                </div>
            </div>
            <div className='mt-[10rem] ml-[6rem] w-[50%]'>
                <h1 className='text-[70px] leading-[80px] font-[500] tracking-[5px] font-syne '>Embrace Your Inner Glow</h1>
                <p className='text-[18px] tracking-[2px] font-[400] mb-[1rem] '>Introducing Lagada: Elegance in Every Drop</p>
                <button className='px-[30px] py-[8px] text-[17px] hover:bg-amber-950 hover:scale-105 transition duration-300 cursor-pointer  font-[600] text-white bg-amber-800 rounded-full font-syne'>Shop Lagada Collection</button>
            </div>
            <button></button>
        </div>
    )
}

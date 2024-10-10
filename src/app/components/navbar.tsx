'use client'
import { IoFilterSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { useState } from "react";
export default function Navbar(){
    return(
        <div className="flex justify-around h-10 items-center">
            <FaHome className="text-black text-4xl cursor-pointer" />
            <h1 className="font-bold text-[2em] relative"> JewelInTheMines 
                <span className="text-[0.5em] italic text-white"> by Imelda</span>
            </h1>
            <IoFilterSharp className="text-black text-4xl cursor-pointer"/>
        </div>
    );
}
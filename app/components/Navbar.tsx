"use client";
import { Globe } from 'lucide-react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
function Navbar({variant="public"}){
   const [open, setOpen] = useState(false);

  const items = [
    "About us",
    "Our offerings",
    "How Uber works",
    "Sustainability",
    "Explore",
    "Newsroom",
    "Investor relations",
    "Autonomous",
    "Blog",
    "Careers",
  ];
  return (
    <>
     <div className="bg-black h-16 w-full flex items-center justify-center gap-7 px-15">
        <img className="h-8 w-14 mr-4" src="images/uber-logo.png" alt="logo" />

        {variant=="public" &&
             <>
        <Link href="/ride" className="text-white text-[14px] font-bold">Ride</Link>
        <Link href="/ride" className="text-white text-[14px] font-bold">Drive</Link>
        <Link href="/login"className="text-white text-[14px] font-bold">Business</Link>
        <div className="relative">
      <div
        onClick={() => setOpen((prev)=> !prev)}
        className="text-white text-[14px] font-bold cursor-pointer hover:text-gray-300 flex items-center gap-2"
      >
        About
        {open ? <FaAngleUp /> : <FaAngleDown/>}
      </div>

      {open && (
        <div className="absolute top-6 left-0 bg-white text-black rounded-lg shadow-lg w-[175px] py-2 z-50 mt-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 text-[14px] hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
        <div className="flex-1"></div>
        <div className="text-white flex gap-1 items-center">
             <Globe className="h-4 w-4 mt-1"/>
            <div className='text-[14px] font-bold'>En</div>
        </div>
        <div className="text-white text-[14px] font-bold">Help</div>
        
        <Link href="/login" className="text-white text-[14px] font-bold">Login</Link>
        <div className="h-9 w-[74px] flex items-center justify-center bg-white text-black text-sm font-bold rounded-full font-bold">
        Sign up
        </div>
        </>
        }


        
        {variant=="login" && 
            <div className="flex-1"></div>
        }
     </div>
    </>
  );
};

export default Navbar;
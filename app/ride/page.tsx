"use client";
import { FaCar,FaKey,FaCircleDot } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { BsFillPersonFill } from "react-icons/bs";
import Maps from "../components/Maps";
import Link from "next/link";
import { useRef } from "react";


function Ride(){
 const pick = useRef<HTMLInputElement | null>(null);
 const drop = useRef<HTMLInputElement | null>(null); 
  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <div className="h-[60px]  border-neutral-200 border-[4px] border-b flex items-center  px-10 py-2 gap-20 justify-around">
          <div className="font-bold text-[30px]">Uber</div>
           <div className="flex gap-6">
           <div className="flex gap-2 items-center">
            <FaCar className="w-4 h-4"/>
             <div className="font-bold font-[14px]">Trip</div>
           </div>

           <div className="flex gap-2 items-center">
            <FaKey className="w-4 h-4"/>
             <div className="font-bold font-[14px]">Rent</div>
           </div>

           <div className="flex gap-2 items-center">
            <ImSpoonKnife className="w-4 h-4"/>
             <div className="font-bold font-[14px]">Eat</div>
           </div>
           </div>
           <div className="flex-1"></div>

           <div className="flex gap-5 items-center">
             <div className="text-black text-[14px] font-bold flex gap-2 items-center">
              <BsFillPersonFill className="w-4 h-4"/>
              <Link href="login" className="font-[14px]">Login</Link>
             </div>
        <div className="h-9 w-[74px] flex items-center justify-center bg-black text-white text-sm font-bold rounded-full font-bold font-[14px]">
        Sign up
        </div>
           </div>
        </div>



        <div className="h-full w-full flex">
          <div className="flex gap-10 items-start px-20 py-10">
            <div className="w-[346px] rounded-2xl border border-neutral-200 bg-white p-5 flex flex-col gap-4 shadow-sm">
  <h2 className="font-bold text-[20px]">Find a Trip</h2>


  <div 
  onClick={() => pick.current?.focus()}
  className="w-full h-12 rounded-lg bg-[#F3F3F3] px-4 flex items-center gap-2
        cursor-text
        border-2 border-transparent
        focus-within:border-black
  ">
    <FaCircleDot/>
    <input 
     ref={pick}
     type="text"
     placeholder="Pick-up Location"
     className="font-semibold text-[14px] text-neutral-700 h-full w-full bg-transparent
      outline-none" />
  </div>

  <div 
  onClick={() => drop.current?.focus()}
  className="w-full h-12 rounded-lg bg-[#F3F3F3] px-4 flex items-center gap-2
        cursor-text
        border-2 border-transparent
        focus-within:border-black
  ">
    <FaCheckSquare />
    <input 
    ref={drop}
    type="text"
    placeholder="Drop-off Location"
    className="font-semibold text-[14px] text-neutral-700 h-full w-full bg-transparent
      outline-none"
     />
  </div>

  <div className="w-full h-12 rounded-lg bg-[#F3F3F3] px-4 flex items-center justify-between">
    <p className="font-semibold text-[14px] text-neutral-700">Pick up now</p>
    <span className="text-xs text-neutral-500">▼</span>
  </div>


  <button
    type="button"
    className="w-fit h-10 rounded-full bg-[#F3F3F3] px-4 flex items-center gap-2 hover:bg-neutral-200 transition"
  >
    <BsFillPersonFill className="w-4 h-4 text-neutral-700" />
    <p className="font-medium text-[14px] text-neutral-700">For Me</p>
  </button>


  <button
    type="button"
    className="w-full h-12 rounded-lg bg-black text-white font-bold hover:opacity-90 transition flex items-center justify-center"
  >
    Search
  </button>
</div>
          <Maps/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ride;
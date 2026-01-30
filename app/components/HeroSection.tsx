"use client"
import { MapPin, Clock3, ChevronDown, Navigation } from 'lucide-react';
import { FaChevronDown } from "react-icons/fa";
import { FaLocationDot ,FaCircleDot} from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";
import { useRef, useState } from 'react';

function HeroSection(){
   const pick = useRef<HTMLInputElement | null>(null);
   const drop = useRef<HTMLInputElement | null>(null); 
   const [open,setOpen]=useState(false);
  return (
    <>
      <div className="w-full flex justify-center items-start gap-20 p-15 flex-wrap">
        
        <div className="flex flex-col h-[440px] w-[404px]">
            <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-center">
            <FaLocationDot className="h-4 w-4"/>
            <div className="text-[16px] font-bold">Delhi NCR, IN
                <span className="underline ml-2 font-light">Change city</span>
            </div>
            </div>
                <div className="text-[52px] font-bold leading-[1.05] w-[400px]">Go anywhere with Uber</div>
            <div className=" h-[48px] w-[174px] flex p-4 rounded-3xl bg-[#EFEFEF] px-[14px] py-[16px] items-center hover:bg-neutral-200 transition-colors">
                 <Clock3 />
                 <button 
                 onClick={()=>setOpen(true)}
                 className="ml-2 font-bold">Pickup now</button>
                 <FaChevronDown className="ml-2" />
            </div>
            <div 
            onClick={() => pick.current?.focus()}
            className="w-[348px] h-[56px] bg-[#EFEFEF] rounded flex justify-content items-center px-4 gap-2
              cursor-text
               border-2 border-transparent
              focus-within:border-black
            ">
                <FaCircleDot/>
                <input 
                 ref={pick}
                className='w-full h-full border-transparent outline-none'
                type="text" 
                placeholder='Pickup Location'
                />
            </div>
           <div
           onClick={() => drop.current?.focus()}
            className="w-[348px] h-[56px] bg-[#EFEFEF] rounded flex justify-content items-center px-4 gap-2
            cursor-text
             border-2 border-transparent
           focus-within:border-black
           ">
               <FaCheckSquare/>
                <input 
                 ref={drop}
                className='w-full h-full border-transparent outline-none'
                type="text" 
                placeholder='Dropoff Location'
                />
        </div>
        <div className="flex justify-start items-center gap-3">
            <div className="flex justify-center items-center w-[127.11px] h-[48px] bg-black rounded text-white">
                <p>See prices</p>
            </div>
            <div className="underline text-[14px]">
                Login to see your recent activity
            </div>
        </div>
            </div>
        </div>
        {/* <div className="flex flex-col h-[440px] w-[404px]">

      <div className="flex items-center gap-2 mb-8">
        <MapPin className="h-5 w-5" fill="black" />
        <div className="text-base">
          <span className="font-semibold">Delhi NCR, IN</span>
          <span className="underline ml-2 font-normal cursor-pointer hover:text-gray-700">
            Change city
          </span>
        </div>
      </div>

    
      <h1 className="text-[56px] font-black mb-8">
        Go anywhere with Uber
      </h1>

   
      <button className="flex items-center gap-3 bg-gray-100 rounded-full px-5 py-3 w-fit mb-6 hover:bg-gray-200 transition">
        <Clock3 className="h-5 w-5" />
        <span className="font-medium">Pickup now</span>
        <ChevronDown className="h-4 w-4" />
      </button>


      <div className="relative mb-6">
      
        <div className="absolute left-[22px] top-[28px] bottom-[84px] w-[2px] bg-gray-300"></div>
        
   
        <div className="relative flex items-center gap-4 bg-gray-100 rounded-lg px-5 py-4 mb-4 hover:bg-gray-200 transition cursor-text">
          <div className="relative z-10 h-3 w-3 bg-black rounded-full flex-shrink-0"></div>
          <input
            type="text"
            placeholder="Pickup location"
            className="bg-transparent outline-none text-gray-700 placeholder-gray-600 flex-1 text-base"
          />
          <Navigation className="h-5 w-5 text-gray-600 flex-shrink-0" />
        </div>


        <div className="relative flex items-center gap-4 bg-gray-100 rounded-lg px-5 py-4 hover:bg-gray-200 transition cursor-text">
          <div className="relative z-10 h-3 w-3 border-2 border-black rounded-sm flex-shrink-0"></div>
          <input
            type="text"
            placeholder="Dropoff location"
            className="bg-transparent outline-none text-gray-700 placeholder-gray-600 flex-1 text-base"
          />
        </div>
      </div>

      
      <div className="flex items-center gap-6">
        <button className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          See prices
        </button>
        <a href="#" className="text-sm underline hover:text-gray-700 transition">
          Log in to see your recent activity
        </a>
      </div>
    </div> */}


    {/* popup on clicking pickup */}
  {open && (
  <>
  <div
      className="fixed inset-0 bg-black/50"
      onClick={() => setOpen(false)}
    ></div>

    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="bg-white rounded-xl w-[500px] h-[252px] p-6 shadow-xl relative">
        
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-xl font-normal"
        >
          x
        </button>


        <div>
          <label className="flex items-center justify-between cursor-pointer my-6">
            <span className="font-bold">Pickup now</span>
            <input type="radio" name="pickup" />
          </label>
          <hr className="border-neutral-200  w-105 ml-4" />

          <label className="flex items-center justify-between cursor-pointer my-6">
            <span className="font-bold">Schedule later</span>
            <input type="radio" name="pickup" />
          </label>
          <hr className="border-neutral-200 w-105 ml-4" />
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={() => setOpen(false)}
            className="font-bold w-[99px] w-[40px] rounded hover:bg-neutral-200 transition-colors"
          >
            Cancel
          </button>
          <button className="w-[99px] w-[40px] bg-black text-white px-5 py-2 rounded-lg font-bold">
            Confirm
          </button>
        </div>
      </div>
    </div>
  </>
)}

<div className="relative w-full max-w-xl">
  <img
    src="images/random.webp"
    alt="Travel"
    className="w-full rounded-xl"
  />

  {/* Overlay */}
  <div className="absolute bottom-4 left-4 right-4">
    <div className="flex items-center justify-between bg-black/50 backdrop-blur-md text-white px-5 py-4 rounded-2xl">
      <span className="text-base font-medium">Ready to travel?</span>

      <button className="bg-white text-black px-5 py-2 rounded-full font-medium">
        Schedule ahead
      </button>
    </div>
  </div>
</div>

       
      </div>
    </>
  );
};

export default HeroSection;
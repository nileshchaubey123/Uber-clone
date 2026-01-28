import { Globe } from 'lucide-react';
import Link from "next/link";

function Navbar(){
  return (
    <>
     <div className="bg-black h-16 w-full flex items-center justify-center gap-7 px-50">
        <img className="h-8 w-14 mr-4" src="images/uber-logo.png" alt="logo" />
        <Link href="/ride" className="text-white text-[14px] font-bold">Ride</Link>
        <div className="text-white text-[14px] font-bold">Drive</div>
        <div className="text-white text-[14px] font-bold">Business</div>
        <div className="text-white text-[14px] font-bold">About</div>
        <div className="flex-1"></div>
        <div className="text-white flex gap-1">
             <Globe className="h-4 w-4 mt-1"/>
            <div className='text-[14px] font-bold'>En</div>
        </div>
        <div className="text-white text-[14px] font-bold">Help</div>
        
        <div className="text-white text-[14px] font-bold">Login</div>
        <div className="h-9 w-[74px] flex items-center justify-center bg-white text-black text-sm font-bold rounded-full font-bold">
        Sign up
        </div>

     </div>
    </>
  );
};

export default Navbar;
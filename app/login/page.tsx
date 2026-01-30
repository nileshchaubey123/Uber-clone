import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import Navbar from "../components/Navbar";
function Login(){
  return (
    <>
      <Navbar variant="login"/>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5 p-4">
            <p className="font-bold text-[24px] w-[328px] h-[48px] mb-2">What's your phone number or email?</p>
            <input className="w-[328px] h-[48px] rounded-xl p-4 bg-[#F3F3F3] 
            border border-transparent
            focus:outline-none
            focus:border-2
           focus:border-black"
            placeholder="Enter phone number or email"
            type="text" />
            <button className="w-[328px] h-[48px] rounded-xl p-4 bg-black flex items-center justify-center">
                <p className="font-bold text-white">Continue</p>
            </button>

            <div className="flex items-center w-full">
             <div className="flex-1 h-px bg-gray-400"></div>
              <span className="px-4 text-gray-600 text-sm font-medium">or</span>
            <div className="flex-1 h-px bg-gray-400"></div>
            </div>

             <button className="w-[328px] h-[48px] rounded-xl p-4 bg-[#E8E8E8] flex items-center justify-center gap-3">
                <FcGoogle/>
                <p className="font-bold text-black">Continue with Google</p>
            </button>
             <button className="w-[328px] h-[48px] rounded-xl p-4 bg-[#E8E8E8] flex items-center justify-center gap-3">
                <IoLogoApple/>
                <p className="font-bold text-black">Continue with Apple</p>
            </button>
            <div className="flex-1"></div>

            <div className="text-[12px] w-[328px] h-[40px]">By continuing, you agree to calls, 
            including by autodialler, WhatsApp or texts from Uber and its affiliates.</div>

        </div>
      </div>
    </>
  );
};

export default Login;
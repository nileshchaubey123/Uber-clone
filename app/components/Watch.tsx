import { FaCalendarDay } from "react-icons/fa6";
import { LuClock3 } from "react-icons/lu";
import { FaBars } from "react-icons/fa";
function Watch(){
  return (
    <>
      <div className="font-bold text-[36px] ml-80 mt-20">
        <p>Plan for Later</p>
      </div>
        <div className="flex gap-6 mt-4 ml-77">
    
            <img className="w-[700px] h-[398px]" src="images/watch.png" alt="watch" />

            <div className="flex flex-col border border-neutral-100 rounded-xl mt-3 p-[14px] h-[320px] w-[360px]">
                <div className="font-bold text-[20px] mb-6">Benefits</div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 px-4">
                     <FaCalendarDay className="h-6 w-6 ml-5" />
                     <div className="border-b border-neutral-100">Choose your exact pickup time up to 90 days in advance.</div>
                  </div>

                   <div className="flex items-center gap-4 px-4">
                     <LuClock3  className="h-6 w-6 ml-5"/>
                     <div className="border-b  border-neutral-100">Extra wait time included to meet your ride.</div>
                  </div>

                   <div className="flex items-center gap-4 px-4">
                     <FaBars  className="h-6 w-6 ml-5"/>
                     <div className="border-b  border-neutral-100">Cancel at no charge up to 60 minutes in advance.</div>
                  </div>
                  <div className="flex-1"></div>
                  <div className="underline font-normal">See Terms</div>

                </div>
            </div>
        
        </div>
      
    </>
  );
};

export default Watch;
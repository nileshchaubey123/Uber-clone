import { FaArrowRight } from "react-icons/fa";
function Foothead(){
  return (
    <>
     <div>
        <div className="w-full h-[406px] bg-[#EFEFEF] p-[64px] flex flex-col gap-7 justify-center items-center">
        <div className="text-[36px] font-bold ml-8 flex justify-start w-[1130px]">
            <p>It’s easier in the apps</p>
        </div>
        <div className="flex gap-8">
            <div className="bg-white flex gap-4 p-[24px] items-center">
                <img className="w-[150px] h-[150px]" src="images/app-qr.png" alt="app-qr" />
                <div className="flex flex-col">
                    <div className="font-bold text-[24px]">Download the Uber app</div>
                    <div className="font-normal text-[16px]">Scan to download</div>
                </div>
                <FaArrowRight className="h-5 w-5 ml-4" />
            </div>

            <div className="bg-white flex gap-4 p-[24px] items-center">
                <img className="w-[150px] h-[150px]" src="images/driver-qr.png" alt="app-qr" />
                <div className="flex flex-col">
                    <div className="font-bold text-[24px]">Download the Driver app</div>
                    <div className="font-normal text-[16px]">Scan to download</div>
                </div>
                <FaArrowRight className="h-5 w-5 ml-4" />
            </div>
        </div> 
      </div>
     </div>
    </>
  );
};

export default Foothead;
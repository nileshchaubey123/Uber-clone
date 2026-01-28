
function Manwoman(){
  return (
    <>
      <div className="flex items-center mt-6 gap-4 justify-center ">
        <div className="w-[1050px] h-[328px] flex justify-between items-center">
            <div className="flex flex-col gap-4 w-[403.58px]">
                <div className="text-[36px] font-bold">Login to see your account details</div>
                <div className="text-[16px]">View past trips, tailored suggestions, support resources, and more.</div>
                <div className="flex justify-start items-center gap-6">
                    <div className="w-[218px] h-[48px] bg-black px-[14px] py-[25px] rounded text-white flex justify-center items-center ">
                        <p className="font-bold">Login in to your account</p>
                    </div>
                    <div className="underline font-normal">
                        <p className="p-2">Create an account</p>
                    </div>
                </div>
            </div>
            <img className="w-[492px] h-[328px] " src="images/man-woman.svg" alt="man-woman" />
        </div>
      </div>
    </>
  );
};

export default Manwoman;
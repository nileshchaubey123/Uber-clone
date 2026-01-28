

function SegRev({image, title, para}) {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <div className="flex items-center gap-16">

        {/* Right - Content */}
        <div className="flex flex-col gap-8 w-[404px] h-[264px] ml-15">
         <h2 className="text-[36px] font-bold leading-tight max-w-[520px]">
         {title}
         </h2>

          
          <p className="text-[16px] leading-relaxed text-gray-800">
            {para}
          </p>
          
          <div className="flex items-center gap-6">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition text-[16px]">
              Get started
            </button>
            <a href="#" className="underline hover:text-gray-700 transition">
              Already have an account? Sign in
            </a>
          </div>
        </div>
         <div className="flex-shrink-0 ml-15">
          <img 
            className="w-[492px] h-[492px] rounded-2xl object-cover" 
            src={image}
            alt="Driver in car" 
          /> 
        </div>
      </div>
    </div>
  );
}

export default SegRev;
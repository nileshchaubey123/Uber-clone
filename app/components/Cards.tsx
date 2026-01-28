function Card({ title, description, image }) {
  return (
    <div className="flex items-center justify-between bg-gray-100 rounded-xl h-[160px] w-[340px] px-4 py-3 overflow-hidden">
      
     
      <div className="flex flex-col justify-between h-full max-w-[200px]">
        <h2 className="text-[16px] font-bold text-black">
          {title}
        </h2>

        <p className="text-gray-700 text-[12px]">
          {description}
        </p>

        <button className="text-[14px] bg-white text-black px-4 py-2 rounded-full font-medium shadow-sm hover:bg-gray-200 transition self-start">
          Details
        </button>
      </div>

      
      <div className="flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="h-[140px] w-[140px]"
        />
      </div>
    </div>
  );
}

export default Card;


function Card({ creatorId , thumbnailURL, creatorImgURL }) {
  return (
      <div className="md:w-[400px] hover:shadow-xl relative  hover:bg-slate-200  duration-150 w-full rounded-md border">
        <img
          src={thumbnailURL}
          alt="thumbnail"
          className="md:h-[200px] h-3/4 w-full rounded-md object-cover"
        />
        <div className="p-2 flex  flex-row ">
          <img
            className="inline-block  hover:w-12 h-10 w-10 rounded-full"
            src={creatorImgURL}
            alt="creator"
          />
          <div className="absolute bottom-1/2 left-1/2">  </div>
          <h1 className="text-lg my-auto px-3 font-semibold text-gray-900">{creatorId}</h1>
        </div>
      </div>
  );
}

export default Card;
